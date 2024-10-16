import {useBuildInfo} from "../../hooks/useBuildInfo.ts";

const Footer = () => {
    const buildinfo = useBuildInfo()
    return (
        <footer className={"flex justify-center items-center text-text-50/50 p-3 text-sm"}>
            Build mode: {buildinfo.mode.toString().toUpperCase()}, Build timestamp: {buildinfo.timestamp}
        </footer>
    );
};

export default Footer;