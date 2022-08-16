import { createContext, useEffect, useState, useRef, useContext } from "react";
import axios from 'axios';
import { UsersContext } from "./UsersContext";
export const ColorsContext = createContext(null);


    export const  ColorsContextProvider = ({children}) => {
        // to make sure all icons are same size
            const [iconSize, setIconSize] = useState("24px");
        //variabels for generating random palette
            const [colors, setColors] = useState(null);
            const [loading, setLoading] = useState(false);
        //variabels for fetching existing palettes
            const [allPalettes, setAllPalettes] = useState(null);
            const [status, setStatus] = useState("loading");
        //hook for focusing on GeneratePalette button on load
            const btnRef = useRef(null);
        const {currentUser} = useContext(UsersContext);

        /// generates the random palette on HomePage using API
            const fetchColors = async function getColors () {
                console.log("in fetch");
                const response = await fetch('/api/randome-palette');
                const fetchedColors = await response.json();
                const check = fetchedColors.data.every(color => typeof color === 'string');
                if (check && fetchedColors.data.length>0) {
                    console.log("pass")
                    setColors(fetchedColors.data);
                    localStorage.setItem("currentPalette", JSON.stringify(fetchedColors.data));
                    setLoading(true);
                } else {
                    console.log("error");
                    getColors();
                } };
     useEffect(() => {
        fetchColors();
        // btnRef.current.focus();
        }, []);

///get all already created palettes to render 
        useEffect(() => {
        fetch(`/api/palettes`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data.data);
            setAllPalettes(data.data);
            setStatus("loaded");
          });
      }, []);
 
    return (
        <ColorsContext.Provider
        value={{
            colors,setColors,
            loading, setLoading,
            iconSize, setIconSize,
            btnRef,fetchColors,
            allPalettes, setStatus, status

            }}>
        {children}
        </ColorsContext.Provider>
    )

    }

    

