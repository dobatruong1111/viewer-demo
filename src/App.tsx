import "./App.css";
import Header from "./components/header/Header";
import ToolsMenu from "./components/toolsMenu/ToolsMenu";
import Content from "./components/content/Content";
import {
    useState,
    createContext,
    useCallback
} from "react";
import { StackScrollMouseWheelTool } from "@cornerstonejs/tools";

export interface ViewerTool {
    toolId: number
    toolName: string
    fullToolName: string
}

interface CurrentViewerToolContextType {
    clickedViewerTool: ViewerTool
    handleClickedViewerTool: (viewerTool: ViewerTool) => void
}
interface CurrentOptionContextType {
    clickedOptionId: number
    handleClickedOptionId: (id: number) => void
}

// Default tool
const scrollTool: ViewerTool = {
    toolId: 0,
    toolName: "Scroll",
    fullToolName: StackScrollMouseWheelTool.toolName
}

export const OptionContext = createContext<CurrentOptionContextType>({
    clickedOptionId: 1,
    handleClickedOptionId: (id: number) => {}
});
export const ViewerToolContext = createContext<CurrentViewerToolContextType>({
    clickedViewerTool: scrollTool,
    handleClickedViewerTool: (viewerTool: ViewerTool) => {}
});

function App() {
    const [clickedOptionId, setClickedOptionId] = useState<number>(1);
    const [clickedViewerTool, setClickedViewerTool] = useState<ViewerTool>(scrollTool);

    const handleClickedOptionId = useCallback((id: number) => {
        setClickedOptionId(id);
    }, []);

    const handleClickedViewerTool = useCallback((viewerTool: ViewerTool) => {
        setClickedViewerTool(viewerTool);
    }, []);

    return (
        <OptionContext.Provider value={{clickedOptionId, handleClickedOptionId}}>
            <div className="App">
                <Header/>
                <div className="body">
                    <ViewerToolContext.Provider value={{clickedViewerTool, handleClickedViewerTool}}>
                        <ToolsMenu/>
                        <Content/>
                    </ViewerToolContext.Provider>
                </div>
            </div>
        </OptionContext.Provider>
    );
}

export default App;