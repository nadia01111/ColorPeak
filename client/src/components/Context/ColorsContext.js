import { createContext, useEffect, useState } from "react";
import axios from 'axios';
export const ColorsContext = createContext(null);


    export const  ColorsContextProvider = ({children}) => {

            const [colors, setColors] = useState(null);
            const [type, setType] = useState(null);
            const [loading, setLoading] = useState(false);
            const [isLiked, setIsLiked] = useState(false);
            const [isLocked, setIsLocked] = useState(false);
            const [iconSize, setIconSize] = useState("24px")
 
            useEffect(() => {
                const fetchColors = async () => {
                    const response = await fetch('/api/randome-palette');
                    const fetchedColors = await response.json();
                    setType(fetchedColors.type);
                    setColors(fetchedColors.data);
                    setLoading(true);
            };
            fetchColors();
            
            }, []);
            console.log(colors);

    return (
        <ColorsContext.Provider
        value={{
            colors,setColors,
            type, setType,
            loading, setLoading,
            isLiked, setIsLiked,
            isLocked, setIsLocked,
            iconSize, setIconSize,
            
            }}>
        {children}
        </ColorsContext.Provider>
    )

    }

    

