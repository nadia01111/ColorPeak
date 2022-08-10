import { useContext, useState , useEffect} from "react";
import styled from "styled-components";
import { ColorsContext } from "../Context/ColorsContext";

import { IoMdHeartEmpty,IoMdHeart } from "react-icons/io";
import { AiOutlineLock,AiOutlineUnlock , AiFillLock} from "react-icons/ai"
import { MdOutlineClear } from "react-icons/md";
import { UsersContext } from "../Context/UsersContext";


const ActionBar = ({color}) => {
    const {colors, setColors,
        type, setType,
        loading, setLoading,
        isLiked, setIsLiked,
        isLocked, setIsLocked,
        iconSize, setIconSize,
         } = useContext(ColorsContext);

    const { userData, setUserData} = useContext(UsersContext);
    
// lock color on tthe palette but change other colors
    const toggleLock = (ev) => {
        ev.preventDefault();
        setIsLocked(!isLocked);
    }
    
    //toggle liked color
     const toggleLike = (ev) => {
        ev.preventDefault();
        setIsLiked(!isLiked);
     }

    // save color to favorites (for registered users)
    const saveColor = () => {
        if (isLiked === true) {
            
        }
    }

    return (<Wrapper>
       

        <ColorNavBar>
                { isLiked ? 
                <IoMdHeart onClick={toggleLike} size={iconSize}/> 
                : 
                <IoMdHeartEmpty onClick={toggleLike} size={iconSize}/> }
                { isLocked ?
                <AiFillLock onClick={toggleLock}size={iconSize}/>
                :
                <AiOutlineLock onClick={toggleLock} size={iconSize}/>
                }
                <MdOutlineClear size={iconSize}/>

        </ColorNavBar>

    </Wrapper>)
}
const Wrapper = styled.div``;
const ColorNavBar = styled.div`
display: flex;
flex-direction: column;

`;
export default ActionBar;
