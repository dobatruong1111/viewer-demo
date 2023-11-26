import {
    memo,
    useContext
} from "react";
import { OptionContext } from "../../App";
import { Button } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import Stack from '@mui/material/Stack';

const options = [
    {
        optionId: 1,
        optionName: "Home",
    },
    {
        optionId: 2,
        optionName: "File",
    }
];

function ToolsButtons() {
    const {clickedOptionId, handleClickedOptionId} = useContext(OptionContext);

    return (
        <Stack
            sx={{
                height: "100%",
                width: "85%",
                backgroundColor: "#27272B"
            }}
        >
            {options.map(option => (
                <Button 
                    key={option.optionId}
                    startIcon={option.optionId === 1 ? <HomeIcon/> : <FileCopyIcon/>}
                    sx={{
                        textTransform: "none",
                        cursor: "pointer",
                        color: clickedOptionId === option.optionId ? "#61DAFB" : "white",
                        height: "50%",
                        width: "100px",
                        backgroundColor: clickedOptionId === option.optionId ? "#323236" : "#27272B",
                        border: "none",
                        fontSize: "14px",
                        justifyContent: "flex-start"
                    }}
                    onClick={() => handleClickedOptionId(option.optionId)}
                >
                    {option.optionName}
                </Button>
            ))}
        </Stack>
    );
}

export default memo(ToolsButtons);