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
         } = useContext(ColorsContext)
    return (
    <Wrapper>
        <FcLikePlaceholder size={iconSize}/>
        <FcLike size={iconSize}/>
        <FcBookmark size={iconSize}/>
        <FcLock size={iconSize}/>
        <FcAddImage size={iconSize}/>
        <FcPicture size={iconSize}/>
    </Wrapper>

    )
}

const Wrapper = styled.div`
height: 50px;
display: flex;
align-items: center;

justify-content: space-around;
`

export default NavBar;