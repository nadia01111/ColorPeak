import { IoMdHeartEmpty,IoMdHeart } from "react-icons/io";
import styled from "styled-components";

const SavePalette = ({numLikes, setNumLikes, isLiked, setIsLiked}) => {

    const likeFunc = () => {
        setIsLiked(!isLiked);
        setIsLiked(numLikes+1)
        
    };

    const unLikeFunc = () => {
        setIsLiked(!isLiked);
        setIsLiked(numLikes-1)
    };

    return (<Wrapper>
    {isLiked? 
    <LikeWrap onClick={unLikeFunc}><IoMdHeart/>{numLikes}</LikeWrap>:
    <LikeWrap onClick={likeFunc}><IoMdHeartEmpty/>{numLikes}</LikeWrap>}
    </Wrapper>)

}

const Wrapper = styled.div``;
const LikeWrap = styled.div`
width:100px;
`;

export default SavePalette;