import styled from "styled-components"
import { useContext, useEffect, useState } from "react";
import { UsersContext } from "../Context/UsersContext";
import { ColorsContext } from "../Context/ColorsContext";
import { useParams } from "react-router-dom";

const UserFeed = () => {
    const [paletttesLikedByUser, setPaletttesLikedByUser] = useState([])
    const {currentUser} = useContext(UsersContext);
    const id = useParams();
  
    const savedPalettes = currentUser.savedPalettes;
    console.log(savedPalettes);
    
    useEffect(() =>{
   
        fetch(`/api/fetch-my-palettes/${id.userID}`, {
            headers: { "Content-Type": "application/json" },
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data.data);
            setPaletttesLikedByUser(data.data)
        });
    
    },[])
    
   
    return (
    <Container>
        {paletttesLikedByUser?.map((obj,index)=> {
            return <PaletteWrap key={index}>{obj.palette.map((color, index) => {
                return <Color color={color} key={color+index}></Color>
            })}</PaletteWrap>
            
        })}
    </Container>

    )
}

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
`

const PaletteWrap = styled.div`
width: 250px;
height: 100px;
display: flex;
border-radius: 12px;
overflow:hidden;
margin: 10px 35px 10px 35px;

`;
const Color = styled.div`
background-color: ${props => props.color ? props.color : "none"};
width: calc(100%/5);
height:100%;
`;
export default UserFeed;