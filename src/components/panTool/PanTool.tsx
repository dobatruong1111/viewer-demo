import {
    memo,
    useContext
} from "react";
import { ViewerToolContext } from "../../App";
import OpenWithIcon from "@mui/icons-material/OpenWith";
import { Button } from "@mui/material";
import { PanTool as PanToolCornerstone } from "@cornerstonejs/tools";
import { ViewerTool } from "../../App";

const panTool: ViewerTool = {
    toolId: 3,
    toolName: "Pan",
    fullToolName: PanToolCornerstone.toolName
}

function PanTool() {
    const {clickedViewerTool, handleClickedViewerTool} = useContext(ViewerToolContext);

    const handleClick = () => {
        handleClickedViewerTool(panTool);
    }

    return (
        <Button
            sx={{
                textTransform: "none",
                justifyContent: "flex-start",
                width: "100%",
                height: "40px",
                color: clickedViewerTool.toolId === panTool.toolId ? "#61DAFB" : "white",
                cursor: "pointer",
                backgroundColor: clickedViewerTool.toolId === panTool.toolId ? "#323236" : "#27272B",
                fontSize: "14px",
                "&:hover": {
                    backgroundColor: "#323236",
                    color: "#61DAFB"
                }
            }}
            startIcon={<OpenWithIcon/>}
            onClick={handleClick}
        >
            {panTool.toolName}
        </Button>
    );
}

export default memo(PanTool);