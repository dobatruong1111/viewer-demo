import {
    memo
} from "react";
import Logo from "../logo/Logo";
import ToolsButtons from "../toolsButtons/ToolsButtons";
import Stack from '@mui/material/Stack';

function Header() {
    return (
        <Stack
            sx={{
                height: "15vh"
            }}
            direction={"row"}
        >
            <Logo/>
            <ToolsButtons/>
        </Stack>
    );
}

export default memo(Header);