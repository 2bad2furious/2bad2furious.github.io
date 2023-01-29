import React, {FC} from "react";
import {ActionIcon, Flex, Header as MantineHeader, Title, useMantineColorScheme} from "@mantine/core";
import Link from "next/link";
import {PageContainer} from "@/components/PageContainer";
import {IconMoon, IconSun} from "@tabler/icons-react";

export const Header: FC = () => {
    const {colorScheme, toggleColorScheme} = useMantineColorScheme();
    const dark = colorScheme === "dark";
    // TODO get rid of fixed height, "auto" works fine, but content is not visible
    return <MantineHeader height={70}>
        <PageContainer>
            <Flex py={"xs"} justify={"end"} align={"center"} gap={"sm"}>
                    <Link target={"_blank"} href="https://martinmacura.cz/web-ukazky">WEB slides</Link>
                    <ActionIcon onClick={() => toggleColorScheme()} title="Toggle color scheme" size={50} variant={"subtle"}>
                        {dark ? <IconSun/> : <IconMoon/>}
                    </ActionIcon>
            </Flex>
        </PageContainer>
    </MantineHeader>
}