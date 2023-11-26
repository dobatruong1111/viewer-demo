import {
    memo,
    useContext
} from "react";
import { ViewerToolContext } from "../../App";
import { Button } from "@mui/material";
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import { AngleTool as AngleToolCornerstone } from "@cornerstonejs/tools";
import { ViewerTool } from "../../App";

const angleTool: ViewerTool = {
    toolId: 5,
    toolName: "Angle",
    fullToolName: AngleToolCornerstone.toolName
}

function AngleTool() {
    const {clickedViewerTool, handleClickedViewerTool} = useContext(ViewerToolContext);

    const handleClick = () => {
        handleClickedViewerTool(angleTool);
    }

    return (
        <Button
            sx={{
                textTransform: "none",
                justifyContent: "flex-start",
                width: "100%",
                height: "40px",
                color: clickedViewerTool.toolId === angleTool.toolId ? "#61DAFB" : "white",
                cursor: "pointer",
                backgroundColor: clickedViewerTool.toolId === angleTool.toolId ? "#323236" : "#27272B",
                fontSize: "14px",
                "&:hover": {
                    backgroundColor: "#323236",
                    color: "#61DAFB"
                }
            }}
            startIcon={<SquareFootIcon/>}
            onClick={handleClick}
        >
            {angleTool.toolName}
        </Button>
    );
}

export default memo(AngleTool);