import { memo } from "react"
import styles from "./ZoomTool.module.css"

function ZoomTool() {
    const handleClick = () => {
        console.log("Zoom");
    }

    return (
        <div className={styles.zoomTool}>
            <button
                className={styles.btn}
                type="button"
                onClick={handleClick}
            >
                <i className="fas fa-search"/> Zoom
            </button>
        </div>
    )
}

export default memo(ZoomTool)