import { createContext, useEffect, useState } from "react";
import axios from 'axios';
export const ColorsContext = createContext(null);


    export const  ColorsProvider = ({children}) => {

        //     const [colors, setColors] = useState(null);
        //     const [type, setType] = useState(null);
        //     const [loading, setLoading] = useState(false);
       
        // useEffect(() => {
        //         const fetchColors = async () => {
        //             const response = await fetch('/api/randome-palette');
        //             const fetchedColors = await response.json();
        //             setType(fetchedColors.type);
        //             setColors(fetchedColors.data);
        //             setLoading(true);
        //     };
        //     fetchColors();
        
        // }, []);
        // console.log(colors);


    return (
        <ColorsContext.Provider
        value={{
            // colors,
            // setColors,
            // type, 
            // setType
            
            }}>
        {children}
        </ColorsContext.Provider>
    )

    }

    

