import { useContext } from "react";
import ColorPalette from "./ColorPalette";

const HomePage = () => {


    return (
    <div>
        <div>Presse space bar to generate new palette</div>
        <ColorPalette/>
    </div>
    )
}

export default HomePage;