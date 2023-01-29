import React, {FC} from "react";
import {ActionIcon, Button, Flex, Header as MantineHeader, Menu, useMantineColorScheme} from "@mantine/core";
import Link from "next/link";
import {PageContainer} from "@/components/PageContainer";
import {IconArrowsCross, IconBrandCss3, IconBrandHtml5, IconMoon, IconSun} from "@tabler/icons-react";

const items = [
    {icon: IconBrandHtml5, title: "HTML", slug: "html"},
    {icon: IconBrandCss3, title: "CSS", slug: "css"},
    {icon: IconArrowsCross, title: "Flexbox", slug: "flexbox"}
]

export const Header: FC = () => {
    const {colorScheme, toggleColorScheme} = useMantineColorScheme();
    const dark = colorScheme === "dark";
    // TODO get rid of fixed height, "auto" works fine, but content is not visible
    return <MantineHeader height={70}>
        <PageContainer>
            <Flex py={"xs"} justify={"end"} align={"center"} gap={"sm"}>
                <Menu>
                    <Menu.Target>
                        <Button variant={"light"}>Slides (cs)</Button>
                    </Menu.Target>
                    <Menu.Dropdown>
                        {items.map((item, i) => (<Menu.Item key={i} component="a" href={"https://martinmacura.cz/web-ukazky/" + item.slug} target="_blank" icon={<item.icon size={16}></item.icon>}>
                            {item.title}
                        </Menu.Item>))}
                    </Menu.Dropdown>
                </Menu>
                <ActionIcon onClick={() => toggleColorScheme()} title="Toggle color scheme" size={50}
                            variant={"subtle"}>
                    {dark ? <IconSun/> : <IconMoon/>}
                </ActionIcon>
            </Flex>
        </PageContainer>
    </MantineHeader>
}