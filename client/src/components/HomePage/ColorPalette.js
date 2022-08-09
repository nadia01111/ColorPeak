import { useContext, useState } from "react";
import { ColorsContext } from "../ColorsContext";
import styled from "styled-components";


const ColorPalette = () => {
const {colors, setColors} = useContext(ColorsContext);

    return (<Wrapper>
        <Main/>
        <Wrap>
        {colors?.splice(0,5).map((color)=> {
            return <Color color={color}>{color}</Color>
        })}
        </Wrap>
    </Wrapper>)
}

const Wrapper = styled.div`
width: 100%;

`;
const Wrap = styled.div`
display: flex;
height: 400px;

`;

const Main = styled.div`

`;

const Color = styled.div`
background-color: ${props => props.color ? props.color : "none"};
width: 20%;
height: 100%;
top: 0px;
left: 0%;
transform: translate3d(0px, 0px, 0px);
`;


export default ColorPalette;