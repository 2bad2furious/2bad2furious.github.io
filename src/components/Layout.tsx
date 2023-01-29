import React, {FC, PropsWithChildren} from "react";
import {ActionIcon, Affix, AppShell, useMantineColorScheme} from "@mantine/core";
import {IconMoon, IconSun} from '@tabler/icons-react';
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";


export const Layout: FC<PropsWithChildren> = ({children}) => {
    return <>
        <AppShell header={<Header/>} footer={<Footer/>} fixed={false} styles={
            {
                root: {minHeight: "100vh", display: "flex", flexDirection: "column"},
                body: {flexGrow: 1}
            }}>
            {children}
        </AppShell>
    </>;
}