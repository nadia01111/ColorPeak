import { IoMdHeartEmpty,IoMdHeart } from "react-icons/io";
import styled from "styled-components";
import { useContext } from "react";
import { UsersContext } from "../Context/UsersContext";

const SavePaletteBar = ({numLikes,isLiked, setIsLiked}) => {
    const {currentUser, savePalette, isSaved, setIsSaved} = useContext(UsersContext);
 
    const likeBntFunc = () => {
        setIsLiked(!isLiked);
    }
    return (<Wrapper>
    {isLiked === false ?
    <LikeWrap onClick={likeBntFunc}><IoMdHeart/>{numLikes}</LikeWrap>:
    <LikeWrap onClick={likeBntFunc}><IoMdHeartEmpty/>{numLikes}</LikeWrap>}
    </Wrapper>)

}

const Wrapper = styled.div``;
const LikeWrap = styled.div`
width:100px;
`;

export default SavePaletteBar;