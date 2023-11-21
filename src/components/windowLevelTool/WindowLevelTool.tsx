import { memo } from "react"
import styles from "./WindowLevelTool.module.css"

function WindowLevelTool() {
    const handleClick = () => {
        console.log("Window Level");
    }

    return (
        <div className={styles.windowLevelTool}>
            <button
                className={styles.btn}
                type="button"
                onClick={handleClick}
            >
                <i className="fas fa-adjust"/> WW/WL
            </button>
        </div>
    )
}

export default memo(WindowLevelTool)