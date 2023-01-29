import type {AppProps} from 'next/app'
import React from "react";
import {ColorScheme, ColorSchemeProvider, MantineProvider} from "@mantine/core";
import {useColorScheme, useHotkeys, useLocalStorage} from "@mantine/hooks";
import {Layout} from "@/components/Layout";
import {mantineTheme} from "../../mantine.config";

export default function App({Component, pageProps}: AppProps) {
    const preferredColorScheme = useColorScheme();
    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: 'mantine-color-scheme',
    });

    const actualColorScheme = colorScheme || preferredColorScheme;
    console.debug({preferredColorScheme, colorScheme, actualColorScheme})

    useHotkeys([['mod+J', () => toggleColorScheme()]]);

    const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (actualColorScheme === 'dark' ? 'light' : 'dark'));

    return (<ColorSchemeProvider colorScheme={actualColorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{...mantineTheme, colorScheme: actualColorScheme}}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </MantineProvider>
    </ColorSchemeProvider>)
}
