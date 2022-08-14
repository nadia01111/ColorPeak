import styled from "styled-components"
import { FcLikePlaceholder, FcLike, FcBookmark, FcLock, FcUnlock, FcAddImage,FcPicture} from "react-icons/fc";
import { useContext, useState } from "react";
import { ColorsContext } from "./Context/ColorsContext";
import { Link } from "react-router-dom";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 

const NavBar = () => {
    const {colors, setColors,
        type, setType,
        loading, setLoading,
        isLiked, setIsLiked,
        isLocked, setIsLocked,
        iconSize,
        fetchColors,
        btnRef

         } = useContext(ColorsContext);

        const [savedPalette, setSavedPalette] = useState([]);
         const currentPalette = JSON.parse(localStorage.getItem(`currentPalette`));

        //press the space bar and see new palette
        const generateNewPalette =()=> {
            fetchColors()
        }

        const savePalette = () => {
            fetch("/api/save-palettte", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({currentPalette})
                })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data.data);
                    // setSavedPalette(data.data);
                });
        }

    return (
    <Wrapper>
        <NewPaletteBtn ref={btnRef} onKeyDown={generateNewPalette}><h2>Presse space bar to generate new palette</h2></NewPaletteBtn>
        <SaveBtn onClick={savePalette}><FcLike size={iconSize}/> Save </SaveBtn>
        <Tippy content="create palette from picture"><Lnk to="/collages/create"><FcAddImage size={iconSize}/></Lnk></Tippy>
        
        
        <FcBookmark size={iconSize}/>
        <FcPicture size={iconSize}/>
    </Wrapper>

    )
}

const SaveBtn =styled.button`

padding:5px;
align-items:center;
justify-content: center;
`;


const Lnk = styled(Link)`
text-decoration:none;
`;
const NewPaletteBtn =styled.button`
background-color: transparent;
border: none;
text-align: center;
:focus {
    outline: none;
}
`;

const Wrapper = styled.div`
border-top:1px solid lightgray;
border-bottom:1px solid lightgray;
height: 40px;
display: flex;
align-items: center;

justify-content: space-around;
`

export default NavBar;