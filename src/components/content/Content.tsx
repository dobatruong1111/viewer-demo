import React, { useContext } from "react"
import { memo, useEffect, useRef } from "react"
import styles from "./Content.module.css"
import { ImageContext } from "../../App"
import { RenderingEngine, Enums, getConfiguration, init } from "@cornerstonejs/core"
import { initDemo, createImageIdsAndCacheMetaData } from "../../utils/helpers"

const { ViewportType } = Enums

async function run(element: React.RefObject<HTMLDivElement>) {
    await initDemo()
    // console.log(element);

    // Get Cornerstone imageIds and fetch metadata into RAM
    // const imageIds = await createImageIdsAndCacheMetaData({
    //     StudyInstanceUID:
    //     '1.3.6.1.4.1.14519.5.2.1.7009.2403.334240657131972136850343327463',
    //     SeriesInstanceUID:
    //     '1.3.6.1.4.1.14519.5.2.1.7009.2403.226151125820845824875394858561',
    //     wadoRsRoot: 'https://d3t6nz73ql33tx.cloudfront.net/dicomweb',
    // });
    // console.log(imageIds);
    
    const renderingEngineId = 'myRenderingEngine';
    // const viewportId = 'CT_AXIAL_STACK';
    const renderingEngine = new RenderingEngine(renderingEngineId);
    console.log(renderingEngine);
    
    // const viewportInput: {
    //     viewportId: string, 
    //     element: React.RefObject<HTMLDivElement>, 
    //     type: typeof ViewportType.STACK
    // } = {
    //     viewportId,
    //     element,
    //     type: ViewportType.STACK,
    // };
    // renderingEngine.enableElement(viewportInput);
    
    // const viewport = renderingEngine.getViewport(viewportInput.viewportId);
    // viewport.setStack(imageIds, 60);
    // viewport.render();
}

function Content() {
    const viewportRef = useRef<HTMLDivElement>(null)
    const {image, setImage} = useContext(ImageContext)

    useEffect(() => {
        // console.log(viewportRef);
        // run(viewportRef)
    }, [])

    return (
        <div className={styles.content}>
            <div className={styles.patientInfo}>
                Patient Info
            </div>
            <div className={styles.viewport} ref={viewportRef}>
                {image && (
                    <img src={image.preview} alt="image" height="100%" width="100%"/>
                )}
            </div>
            <div className={styles.studyInfo}>
                Study Info
            </div>
            <div className={styles.imageInfo}>
                Image Info
            </div>
            <div className={styles.toolInfo}>
                Tool Info
            </div>
        </div>
    )
}

export default memo(Content)