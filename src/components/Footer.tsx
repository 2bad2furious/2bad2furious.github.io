import {FC} from "react";
import {ActionIcon, Flex, Footer as MantineFooter} from "@mantine/core";
import {IconBrandGithub, IconBrandMedium, IconBrandTwitter} from "@tabler/icons-react";
import {PageContainer} from "@/components/PageContainer";
import Link from "next/link";

const links = [
    {
        icon: IconBrandGithub,
        title: "2bad2furious@github",
        href: "https://github.com/2bad2furious"
    },
    {
        icon: IconBrandMedium,
        title: "2bad2furious@medium",
        href: "https://2bad2furious.medium.com"
    },
    {
        icon: IconBrandTwitter,
        title: "2bad2furious@twitter",
        href: "https://twitter.com/2bad2furious"
    }
]

export const Footer: FC = () => {
    return <MantineFooter height={70}>
        <PageContainer>
            <Flex justify={"end"} gap={"sm"} py={"sm"}>
                {links.map((link, i) => (
                    <Link key={i} href={link.href} title={link.title} target={"_blank"}>
                        <ActionIcon variant={"outline"} size={"xl"}>
                            <link.icon></link.icon>
                        </ActionIcon>
                    </Link>))
                }
            </Flex>
        </PageContainer>
    </MantineFooter>
}