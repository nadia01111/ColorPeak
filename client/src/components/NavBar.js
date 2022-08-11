import styled from "styled-components"
import { FcLikePlaceholder, FcLike, FcBookmark, FcLock, FcUnlock, FcAddImage,FcPicture} from "react-icons/fc";
import { useContext } from "react";
import { ColorsContext } from "./Context/ColorsContext";
const NavBar = () => {
    const {colors, setColors,
        type, setType,
        loading, setLoading,
        isLiked, setIsLiked,
        isLocked, setIsLocked,
        iconSize,
        btnRef,fetchColors

         } = useContext(ColorsContext)

        //press the space bar and see new palette
        const generateNewPalette =()=> {
            fetchColors()
        }

    return (
    <Wrapper>
        <Btn ref={btnRef} onKeyDown={generateNewPalette}><h2>Presse space bar to generate new palette</h2></Btn>
        <FcLike size={iconSize}/>
        <FcPicture size={iconSize}/>
        <FcBookmark size={iconSize}/>
        <FcAddImage size={iconSize}/>
    </Wrapper>

    )
}

const Btn =styled.button`
background-color: transparent;
border: none;
text-align: center;
:focus {
    border: none;
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