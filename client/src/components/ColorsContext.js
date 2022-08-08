import { createContext, useEffect, useState } from "react";
import axios from 'axios';
export const ColorsContext = createContext(null);


    export const  ColorsProvider = ({children}) => {

            const [colors, setColors] = useState(null);
            const [loading, setLoading] = useState(false);

        //     const getColors = async () => {
        //         try {
        //             setLoading(true);
        //             const res = await axios.get('/api/randome-palette');
        //             console.log(res.data);
        //             console.log("hello");
        //             console.log(res. data)
        //             // setColors(res.data.data[0].palette);
                    
        //             setLoading(false);
        //         } catch (error) {
        //             setLoading(false);
        //         }
        //     };
        //     console.log(loading)
        // // Get a color palette whenever page loads.
        //     useEffect(() => {
        //         getColors();
        //     }, []);

        console.log("hello");
            useEffect(() => {
                const fetchColors = async () => {
                const response = await fetch('/api/randome-palette');
                const fetchedColors = await response.json();
                setColors(fetchedColors.data);
            };
            fetchColors();
        }, []);
        console.log(colors);
//         useEffect(() => {
//             fetch("/api/randome-palette")
//             .then ((res) => {res.json()
//                 console.log(res.json());
//             }).then((data)=> {
//                 console.log(data);
//                 setLoading(true);
//                 // setColors(data.data);
//         }).catch((err) => {
//                 throw new Error (err.stack)
//             })
//         },[])

// console.log(loading);

    return (
        <ColorsContext.Provider
        value={{
            colors,
            setColors
            
            
            }}>
        {children}
        </ColorsContext.Provider>
    )

    }

    

