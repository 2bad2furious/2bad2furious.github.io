import type {AppProps} from 'next/app'
import React from "react";
import {ColorScheme, ColorSchemeProvider, MantineProvider} from "@mantine/core";
import {useHotkeys, useLocalStorage} from "@mantine/hooks";
import {Layout} from "@/components/Layout";
import {mantineTheme} from "../../mantine.config";


export default function App({Component, pageProps}: AppProps) {
    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: 'mantine-color-scheme',
        defaultValue: 'light',
        getInitialValueInEffect: true,
    });

    useHotkeys([['mod+J', () => toggleColorScheme()]]);

    const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
    return (<ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{...mantineTheme, colorScheme: colorScheme}}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </MantineProvider>
    </ColorSchemeProvider>)
}
