import { useContext } from "react";
import { ColorsContext } from "../ColorsContext";

const HomePage = () => {
    const {colors, setColors} = useContext(ColorsContext);

    return (
    <div>
     <h1>Random color palette</h1>   
        {colors?.map((color) => {
            return <div>{color}</div>
        })}
    </div>

    
    )
}

export default HomePage;