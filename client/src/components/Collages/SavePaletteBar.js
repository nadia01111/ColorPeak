import { IoMdHeartEmpty,IoMdHeart } from "react-icons/io";
import styled from "styled-components";
import { useContext, useState } from "react";
import { UsersContext } from "../Context/UsersContext";

const SavePaletteBar = () => {
    const {currentUser, savePalette, isSaved, setIsSaved} = useContext(UsersContext);
    const [isLiked,setIsLiked] = useState(false);
    let randomN = Math.floor(Math.random() * 200);
    const [x, setX]= useState(randomN);
    const likeBntFunc = () => {
        setIsLiked(!isLiked);
        if (isLiked===true) {
            setX(x-1)
        } else {
            setX(x+1)
        }
    }
    return (<Wrapper>
    {isLiked ?
    <LikeWrap onClick={likeBntFunc}><IoMdHeart/>{x}</LikeWrap>:
    <LikeWrap onClick={likeBntFunc}><IoMdHeartEmpty/>{x}</LikeWrap>}
    </Wrapper>)

}

const Wrapper = styled.div``;
const LikeWrap = styled.div`
width:100px;
`;

export default SavePaletteBar;