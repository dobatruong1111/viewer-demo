import {
    memo
} from "react";
import logo from "../../assets/logo.svg";
import Stack from '@mui/material/Stack';

function Logo() {
    return (
        <Stack
            sx={{
                height: "100%",
                width: "15%",
                backgroundColor: "#27272B"
            }}
        >
            <img
                src={logo}
                alt="logo"
                style={{height: "100%", width: "100%"}}
            />
        </Stack>
    );
}

export default memo(Logo);