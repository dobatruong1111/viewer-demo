import {
    useEffect,
    useRef,
    useState,
    useContext
} from "react";
import {
    Enums,
    RenderingEngine,
    imageLoader,
    metaData,
    volumeLoader,
} from "@cornerstonejs/core";
import {
    Enums as csToolsEnums,
    addTool,
    ToolGroupManager,
    StackScrollMouseWheelTool,
    ZoomTool,
    WindowLevelTool,
    PanTool,
    LengthTool,
    AngleTool
} from "@cornerstonejs/tools";
import {
    hardcodedMetaDataProvider,
    initDemo,
    registerWebImageLoader,
    createImageIdsAndCacheMetaData
} from "../../utils";
import styles from "./Content.module.css";
import { ViewerToolContext } from "../../App";

const renderingEngineId = "myRenderingEngine";
const viewportId = "myViewport";
const volumeId = "myVolume";
const toolGroupId = "myToolGroup";
const toolGroup = ToolGroupManager.createToolGroup(toolGroupId);
const toolList = [
    ZoomTool,
    WindowLevelTool,
    PanTool,
    LengthTool,
    AngleTool
]

interface MetaData {
    patientID: string,
    patientName: string,
    patientSex: string,
    patientBirthDate: string,
    studyDescription: string,
    studyDate: string,
    studyTime: string,
    imageSize: string,
    imageType: string,
    modalityType: string
}

registerWebImageLoader(imageLoader);

async function run(container: HTMLDivElement, setMetadata: Function) {
    let {imageIds, displayMetadata}: any = await createImageIdsAndCacheMetaData({
        StudyInstanceUID:
            '1.3.6.1.4.1.14519.5.2.1.7009.2403.334240657131972136850343327463',
        SeriesInstanceUID:
            '1.3.6.1.4.1.14519.5.2.1.7009.2403.226151125820845824875394858561',
        wadoRsRoot: 'https://d3t6nz73ql33tx.cloudfront.net/dicomweb'
    });
    
    // metaData.addProvider(
    //     (type, imageId) => hardcodedMetaDataProvider(type, imageId, imageIds),
    //     10000
    // );

    try {
        await initDemo();
        const renderingEngine = new RenderingEngine(renderingEngineId);
        const volume = await volumeLoader.createAndCacheVolume(volumeId, { imageIds });
        const viewportInput: {
            viewportId: string,
            element: HTMLDivElement,
            type: Enums.ViewportType
        }[] = [
            {
                viewportId: viewportId,
                element: container,
                type: Enums.ViewportType.STACK
            }
        ]
        renderingEngine.setViewports(viewportInput);
        const viewport = renderingEngine.getStackViewports()[0];
        volume.load();
        await viewport.setStack(imageIds);
        await viewport.setImageIdIndex(0);
        renderingEngine.render();

        // Default tool: scroll tool
        addTool(StackScrollMouseWheelTool);
        toolGroup?.addTool(StackScrollMouseWheelTool.toolName);

        toolList.map((tool) => {
            addTool(tool);
            toolGroup?.addTool(tool.toolName);
        });

        toolGroup?.addViewport(viewportId, renderingEngineId);

        toolGroup?.setToolActive(StackScrollMouseWheelTool.toolName);

        setMetadata(displayMetadata);
    } catch (error) {
        console.error(error);
    }
}

function Content() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [metadata, setMetadata] = useState<MetaData>();
    const {clickedViewerTool, handleClickedViewerTool} = useContext(ViewerToolContext);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        run(container, setMetadata);
    }, []);

    useEffect(() => {
        if (clickedViewerTool.toolId != 0) {
            toolList.map((tool) => {
                if (tool.toolName === clickedViewerTool.fullToolName) {
                    toolGroup?.setToolActive(tool.toolName, {
                        bindings: [
                            {
                                mouseButton: csToolsEnums.MouseBindings.Primary // Left mouse
                            }
                        ]
                    });
                } else {
                    toolGroup?.setToolDisabled(tool.toolName);
                }
            })
        }
    }, [clickedViewerTool])

    return (
        <div className={styles.content}>
            <div className={styles.container} ref={containerRef}></div>
            {metadata && (
                <>
                    <div className={styles.patientInfo}>
                        {metadata.patientID && (<>Patient Id: {metadata.patientID}</>)} <br/>
                        {metadata.patientSex && (<>Patient sex: {metadata.patientSex}</>)} <br/>
                        {metadata.patientBirthDate && (<>Patient birthdate: {metadata.patientBirthDate}</>)}
                    </div>
                    <div className={styles.studyInfo}>
                        {metadata.studyDescription && (<>Study description: {metadata.studyDescription}</>)} <br/>
                        {metadata.studyDate && (<>Study date: {metadata.studyDate}</>)} <br/>
                        {metadata.studyTime && (<>Study time: {metadata.studyTime}</>)}
                    </div>
                    <div className={styles.imageInfo}>
                        {metadata.imageType && (<>Image type: {metadata.imageType}</>)} <br/>
                        {metadata.modalityType && (<>Modality: {metadata.modalityType}</>)} <br/>
                        {metadata.imageSize && (<>Size: {metadata.imageSize}</>)}
                    </div>
                    <div className={styles.toolInfo}>
                        {clickedViewerTool.toolName}
                    </div>
                </>
            )}
        </div>
    );
}

export default Content;