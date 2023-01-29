import {FC, PropsWithChildren} from "react";
import {Container} from "@mantine/core";

export const PageContainer: FC<PropsWithChildren> = ({children}) => {
    return <Container size={"xl"}>{children}</Container>
}