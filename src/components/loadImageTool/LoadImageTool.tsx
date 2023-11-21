import { memo, useContext, useEffect, useRef, useState } from "react"
import styles from "./LoadImageTool.module.css"
import { ImageContext } from "../../App"

function LoadImageTool() {
    const inputFileRef = useRef<HTMLInputElement>(null)
    // const [image, setImage] = useState<any>()
    const {image, setImage} = useContext(ImageContext)

    useEffect(() => {
        // Cleanup function
        return () => {
            image && URL.revokeObjectURL(image.preview)
        }
    }, [image])

    const handleClick = () => {
        inputFileRef.current?.click()
    }

    const handleChange = (e: any) => {
        if (e.target.files.length) {
            const file = e.target.files[0]
            file.preview = URL.createObjectURL(file)
            setImage(file)
        }
    }

    return (
        <div className={styles.loadImageTool}>
            <button
                className={styles.btn}
                type="button"
                onClick={handleClick}
            >
                <i className="fas fa-upload"/> Load Image
            </button>
            <input 
                accept="image/*" 
                type="file" 
                ref={inputFileRef} 
                onChange={handleChange} 
                multiple={false} 
                hidden
            />
        </div>
    )
}

export default memo(LoadImageTool)