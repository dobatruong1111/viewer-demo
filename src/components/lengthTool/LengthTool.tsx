import {
    memo,
    useContext
} from "react";
import { ViewerToolContext } from "../../App";
import { Button } from "@mui/material";
import StraightenIcon from '@mui/icons-material/Straighten';
import { LengthTool as LengthToolCornerstone } from "@cornerstonejs/tools";
import { ViewerTool } from "../../App";

const lengthTool: ViewerTool = {
    toolId: 4,
    toolName: "Length",
    fullToolName: LengthToolCornerstone.toolName
}

function LengthTool() {
    const {clickedViewerTool, handleClickedViewerTool} = useContext(ViewerToolContext);

    const handleClick = () => {
        handleClickedViewerTool(lengthTool);
    }

    return (
        <Button
            sx={{
                textTransform: "none",
                justifyContent: "flex-start",
                width: "100%",
                height: "40px",
                color: clickedViewerTool.toolId === lengthTool.toolId ? "#61DAFB" : "white",
                cursor: "pointer",
                backgroundColor: clickedViewerTool.toolId === lengthTool.toolId ? "#323236" : "#27272B",
                fontSize: "14px",
                "&:hover": {
                    backgroundColor: "#323236",
                    color: "#61DAFB"
                }
            }}
            startIcon={<StraightenIcon/>}
            onClick={handleClick}
        >
            {lengthTool.toolName}
        </Button>
    );
}

export default memo(LengthTool);