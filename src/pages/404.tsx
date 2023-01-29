import {FC, useEffect} from "react";

const Custom404: FC = () => {
    useEffect(() => {
        window.location.replace("/")
    }, []);
    return null;
};
export default Custom404