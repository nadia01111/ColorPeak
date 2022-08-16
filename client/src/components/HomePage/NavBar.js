import styled from "styled-components"
import { FcLikePlaceholder, FcLike, FcBookmark, FcLock, FcUnlock, FcAddImage,FcPicture, FcGrid} from "react-icons/fc";
import { useContext, useState } from "react";
import { ColorsContext } from "../Context/ColorsContext";
import { Link } from "react-router-dom";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 
import { UsersContext } from "../Context/UsersContext";

const NavBar = () => {
    const {colors, setColors,
        isLiked, setIsLiked,
        iconSize,
        fetchColors,
        btnRef

         } = useContext(ColorsContext);

        const {currentUserId} = useContext(UsersContext);
        const [isSaved, setIsSaved] = useState(false);
         const currentPalette = JSON.parse(localStorage.getItem(`currentPalette`));

        //press the space bar and see new palette
        const generateNewPalette =()=> {
            fetchColors()
        }

        const savePalette = () => {
            setIsSaved(!isSaved);
            
            // fetch("/api/save-palettte", {
            //     method: "PATCH",
            //     headers: { "Content-Type": "application/json" },
            //     body: JSON.stringify({currentPalette, currentUserId
            //     })
            //     })
            //     .then((res) => res.json())
            //     .then((data) => {
            //         console.log(data.data);
            //     });
        }
        console.log(isSaved);
    return (
    <Wrapper>
        <NewPaletteBtn ref={btnRef} onKeyDown={generateNewPalette}>
            <h2>Presse space bar to generate new palette</h2></NewPaletteBtn>

        {isSaved? <SaveBtn onClick={savePalette}><FcLike  size={iconSize}/><span>Palette saved</span></SaveBtn>:
        <SaveBtn onClick={savePalette}><FcLikePlaceholder size={iconSize}/><span>Save palette</span></SaveBtn>
        }
        
        <Tippy content="create palette from picture"><Lnk to="/palettes/create"><FcAddImage size={iconSize}/></Lnk></Tippy>
        <Lnk to="/palettes"><FcGrid size={iconSize}/></Lnk>
        
    </Wrapper>

    )
}

const SaveBtn =styled.button`
border: none;
background-color: transparent;
display: flex;
padding:5px;
align-items:center;
justify-content:space-around;
border-radius: 5px;
:hover{
cursor: pointer;
background-color: lightgray;
}
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