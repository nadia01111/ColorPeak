import { useContext } from "react";
import { ColorsContext } from "../ColorsContext";
import ColorPalette from "./ColorPalette";

const HomePage = () => {
    const {colors, setColors} = useContext(ColorsContext);

    return (
    <div>
     <h1>Random color palette</h1>   
        <ColorPalette/>
    </div>
    )
}

export default HomePage;