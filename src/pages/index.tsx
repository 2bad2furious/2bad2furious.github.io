import {PageContainer} from "@/components/PageContainer";
import React, {FC, PropsWithChildren, ReactElement} from "react";
import {
    Badge,
    Box,
    Container,
    Divider,
    Flex,
    List,
    Stack,
    ThemeIcon,
    Title,
    Text,
    useMantineTheme
} from "@mantine/core";
import {IconMoodSmile, IconMoodSmileDizzy} from "@tabler/icons-react";
import {MantineNumberSize} from "@mantine/styles";
import {Property} from "csstype";
import AlignItems = Property.AlignItems;
import {useDocumentTitle} from "@mantine/hooks";

type SectionProps = PropsWithChildren<{ header?: ReactElement, size?: MantineNumberSize, spacing?: MantineNumberSize, align?: AlignItems, contentPl?: MantineNumberSize }>
const Section: FC<SectionProps> = (
    {
        children,
        header,
        size = "lg",
        spacing,
        align = "start",
        contentPl = "sm"
    }) => {
    return <Container size={size}>
        <Stack align={align} w={"100%"} spacing={spacing}>
            {header}
            <Box pl={contentPl}>
                {children}
            </Box>
        </Stack>
    </Container>
}

const plansText = "I'd like to continue teaching up-and-coming programmers, build tools to simplify teaching for others and continue learning and coming up with new approaches."

export default function Home() {
    useDocumentTitle("Martin Macura");

    const theme = useMantineTheme();
    return (
        <>
            <PageContainer>
                <Section spacing={0} align={"stretch"} contentPl={0}
                         header={<Title align={"center"} size={"xxx-large"}
                                        mt={"lg"} mb={"sm"} order={1}>Martin Macura</Title>}>
                    <Flex gap={"md"} justify={"center"}>
                        <Badge>Fullstack web dev</Badge>
                        <Badge>Teacher</Badge>
                        <Badge>Student</Badge>
                    </Flex>
                </Section>
                <Divider my={"lg"}></Divider>
                <Section header={<Title order={2}>Technologies</Title>}>
                    <List icon={<ThemeIcon color="teal" size={"xl"} radius="xl" >
                        <IconMoodSmileDizzy size={40}/>
                    </ThemeIcon>} styles={{itemWrapper: {alignItems: "center!important"}, itemIcon: {"lineHeight": 1}}}>
                        <List.Item>Kotlin, Java, Spring</List.Item>
                        <List.Item >JavaScript, Typescript, Angular</List.Item>
                        <List.Item>MySQL, MariaDB</List.Item>
                        <List.Item icon={<ThemeIcon color={"cyan"} size={"xl"} radius="xl"><IconMoodSmile
                            size={40}/></ThemeIcon>}>React, Next, TRPC</List.Item>
                    </List>
                </Section>
                <Divider my={"lg"}/>
                <Section contentPl={0} header={<Title order={2}>Plans</Title>}>
                    <Text sx={({textIndent: theme.spacing["md"]})}>{plansText}</Text>
                </Section>
            </PageContainer>
        </>
    )
}
