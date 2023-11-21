import {
    memo, useContext
} from "react"
import style from "./ToolsButtons.module.css"
import { OptionContext } from "../../App"

function ToolsButtons() {
    const {options, clickedOptionId, setClickedOptionId} = useContext(OptionContext)

    return (
        <div className={style.toolsButtons}>
            {options.map(option => (
                <button 
                    key={option.optionId} 
                    className={style.btn}
                    onClick={() => setClickedOptionId(option.optionId)}
                    style={clickedOptionId === option.optionId ? {color: "#61DAFB", background: "#323236"} : {}}
                >
                    <i className={option.icon}/> {option.optionName}
                </button>
            ))}
        </div>
    )
}

export default memo(ToolsButtons)