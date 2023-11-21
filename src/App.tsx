import './App.css';
import Header from './components/header/Header';
import ToolsMenu from './components/toolsMenu/ToolsMenu';
import Content from './components/content/Content';
import { useState, createContext } from 'react';

interface Option {
  optionId: number
  optionName: string
  icon: string
}
interface CurrentOptionContextType {
  options: Option[]
  clickedOptionId: number
  setClickedOptionId: (clickedOptionId: number) => void
}
interface CurrentImageContextType {
  image: any,
  setImage: (image: any) => void
}

export const OptionContext = createContext<CurrentOptionContextType>({
  options: [],
  clickedOptionId: 0,
  setClickedOptionId: () => {}
})
export const ImageContext = createContext<CurrentImageContextType>({
  image: undefined,
  setImage: () => {}
})

const options: Option[] = [
  {
    optionId: 1,
    optionName: "Home",
    icon: "fas fa-home"
  },
  {
    optionId: 2,
    optionName: "File",
    icon: "fas fa-file"
  }
]

function App() {
  const [clickedOptionId, setClickedOptionId] = useState<number>(1)
  const [image, setImage] = useState<any>()

  return (
    <OptionContext.Provider value={{options, clickedOptionId, setClickedOptionId}}>
      <div className="App">
        <Header/>
        <div className="body">
          <ImageContext.Provider value={{image, setImage}}>
            <ToolsMenu/>
            <Content/>
          </ImageContext.Provider>
        </div>
      </div>
    </OptionContext.Provider>
  );
}

export default App