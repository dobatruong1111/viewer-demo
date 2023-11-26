import {
    memo, useContext
} from "react";
import { OptionContext } from "../../App";
import ZoomTool from "../zoomTool/ZoomTool";
import WindowLevelTool from "../windowLevelTool/WindowLevelTool";
import PanTool from "../panTool/PanTool";
import LengthTool from "../lengthTool/LengthTool";
import AngleTool from "../angleTool/AngleTool";
import { Stack } from "@mui/material";

function ToolsMenu() {
    const {clickedOptionId, handleClickedOptionId} = useContext(OptionContext);

    return (
        <Stack
            sx={{
                marginTop: "10px",
                width: "15vw",
                backgroundColor: "#27272B"
            }}
        >
            {clickedOptionId === 1 &&
                (
                    <>
                        <ZoomTool/>
                        <WindowLevelTool/>
                        <PanTool/>
                        <LengthTool/>
                        <AngleTool/>
                    </>
                )
            }
        </Stack>
    );
}

export default memo(ToolsMenu);