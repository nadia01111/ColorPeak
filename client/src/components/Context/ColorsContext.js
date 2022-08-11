import { createContext, useEffect, useState, useRef } from "react";
import axios from 'axios';
export const ColorsContext = createContext(null);


    export const  ColorsContextProvider = ({children}) => {

            const [colors, setColors] = useState(null);
            const [type, setType] = useState(null);
            const [loading, setLoading] = useState(false);
            const [iconSize, setIconSize] = useState("24px")
 
            const btnRef = useRef(null);

     const fetchColors = async () => {
        const response = await fetch('/api/randome-palette');
        const fetchedColors = await response.json();
        setType(fetchedColors.type);
        setColors(fetchedColors.data);
        setLoading(true);
};
     useEffect(() => {
        fetchColors();
        localStorage.setItem('currentPalette', JSON.stringify(colors));
        btnRef.current.focus();
        }, []);
    console.log(colors);

    return (
        <ColorsContext.Provider
        value={{
            colors,setColors,
            type, setType,
            loading, setLoading,
            iconSize, setIconSize,
            btnRef,fetchColors

            }}>
        {children}
        </ColorsContext.Provider>
    )

    }

    

