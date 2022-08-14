import { createContext, useEffect, useState, useRef } from "react";
import axios from 'axios';
export const ColorsContext = createContext(null);


    export const  ColorsContextProvider = ({children}) => {

            const [colors, setColors] = useState(null);
            const [type, setType] = useState(null);
            const [loading, setLoading] = useState(false);
            const [iconSize, setIconSize] = useState("24px");
            const [isErr, setIsErr] = useState(false);
            // const [palette, setPalette] = useState([]);
 
            const btnRef = useRef(null);

            const fetchColors = async function getColors () {
                console.log("in fetch");
                const response = await fetch('/api/randome-palette');
                const fetchedColors = await response.json();
                const check = fetchedColors.data.every(color => typeof color === 'string');
                if (check && fetchedColors.data.length>0) {
                    console.log("pass")
                    setType(fetchedColors.type);
                    setColors(fetchedColors.data);
                    localStorage.setItem("currentPalette", JSON.stringify(fetchedColors.data));
                    setLoading(true);
                } else {
                    console.log("error");
                    getColors();
                } };
     useEffect(() => {
        fetchColors();
        btnRef.current.focus();
        
     
        }, []);
 
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

    

