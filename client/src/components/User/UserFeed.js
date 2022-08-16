import styled from "styled-components"
import { useContext } from "react";
import { UsersContext } from "../Context/UsersContext";
import { ColorsContext } from "../Context/ColorsContext";

const UserFeed = () => {
    const {currentUser} = useContext(UsersContext);
    const {allPalettes, setStatus, status} = useContext(ColorsContext);
    // console.log(currentUser?.savedPalettes);
    // console.log(allPalettes);


    //function tto filter matching palettes from user object vs all saved palettes
    const palettesToRender =[];
    allPalettes.map((paletteObj) => {
        if (currentUser?.savedPalettes?.includes(paletteObj._id)) {
            palettesToRender.push(paletteObj.colors);
            return palettesToRender;
        }
    })
   

    return (
    <Container>
        {palettesToRender.map((palette)=> {
            return <PaletteWrap>{palette.splice(0,5).map((color) => {
                return <Color color={color}></Color>
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