import {
    memo
} from "react"
import styles from "./Logo.module.css"
import logo from "../../logo.svg"

function Logo() {
    return (
        <div
            className={styles.logo}
        >
            <img
                className={styles.icon}
                src={logo}
                alt="logo"
            />
        </div>
    )
}

export default memo(Logo)