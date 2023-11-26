import {
    memo,
    useContext
} from "react";
import { ViewerToolContext } from "../../App";
import { Button } from "@mui/material";
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import { WindowLevelTool as WindowLevelToolCornerstone } from "@cornerstonejs/tools";
import { ViewerTool } from "../../App";

const windowLevelTool: ViewerTool = {
    toolId: 2,
    toolName: "WW/WL",
    fullToolName: WindowLevelToolCornerstone.toolName
}

function WindowLevelTool() {
    const {clickedViewerTool, handleClickedViewerTool} = useContext(ViewerToolContext);

    const handleClick = () => {
        handleClickedViewerTool(windowLevelTool);
    }

    return (
        <Button
            sx={{
                textTransform: "none",
                justifyContent: "flex-start",
                width: "100%",
                height: "40px",
                color: clickedViewerTool.toolId === windowLevelTool.toolId ? "#61DAFB" : "white",
                cursor: "pointer",
                backgroundColor: clickedViewerTool.toolId === windowLevelTool.toolId ? "#323236" : "#27272B",
                fontSize: "14px",
                "&:hover": {
                    backgroundColor: "#323236",
                    color: "#61DAFB"
                }
            }}
            startIcon={<SettingsBrightnessIcon/>}
            onClick={handleClick}
        >
            {windowLevelTool.toolName}
        </Button>
    );
}

export default memo(WindowLevelTool);