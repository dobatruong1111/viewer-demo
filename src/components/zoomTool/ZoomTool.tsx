import {
    memo,
    useContext
} from "react";
import { ViewerToolContext } from "../../App";
import { Button } from "@mui/material";
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { ZoomTool as ZoomToolCornerstone } from "@cornerstonejs/tools";
import { ViewerTool } from "../../App";

const zoomTool: ViewerTool = {
    toolId: 1,
    toolName: "Zoom",
    fullToolName: ZoomToolCornerstone.toolName
}

function ZoomTool() {
    const {clickedViewerTool, handleClickedViewerTool} = useContext(ViewerToolContext);

    const handleClick = () => {
        handleClickedViewerTool(zoomTool);
    }

    return (
        <Button
            sx={{
                textTransform: "none",
                justifyContent: "flex-start",
                width: "100%",
                height: "40px",
                color: clickedViewerTool.toolId === zoomTool.toolId ? "#61DAFB" : "white",
                cursor: "pointer",
                backgroundColor: clickedViewerTool.toolId === zoomTool.toolId ? "#323236" : "#27272B",
                fontSize: "14px",
                "&:hover": {
                    backgroundColor: "#323236",
                    color: "#61DAFB"
                }
            }}
            startIcon={<ZoomInIcon/>}
            onClick={handleClick}
        >
            {zoomTool.toolName}
        </Button>
    );
}

export default memo(ZoomTool);