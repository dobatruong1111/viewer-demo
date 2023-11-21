import {
    memo
} from "react"
import styles from "./Header.module.css"
import Logo from "../logo/Logo"
import ToolsButtons from "../toolsButtons/ToolsButtons"

function Header() {
    return (
        <div className={styles.header}>
            <Logo/>
            <ToolsButtons/>
        </div>
    )
}

export default memo(Header)