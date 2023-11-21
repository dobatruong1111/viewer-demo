import {
    memo, useContext
} from "react"
import styles from "./ToolsMenu.module.css"
import { OptionContext } from "../../App"
import LoadImageTool from "../loadImageTool/LoadImageTool"
import ZoomTool from "../zoomTool/ZoomTool"
import WindowLevelTool from "../windowLevelTool/WindowLevelTool"

function ToolsMenu() {
    const {options, clickedOptionId, setClickedOptionId} = useContext(OptionContext)

    return (
        <div className={styles.toolsmenu}>
            {clickedOptionId === 1 &&
                (
                    <>
                        <LoadImageTool/>
                        <ZoomTool/>
                        <WindowLevelTool/>
                    </>
                )
            }
        </div>
    )
}

export default memo(ToolsMenu)