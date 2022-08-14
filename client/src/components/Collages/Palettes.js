import { useState, useEffect } from "react";
import styled from "styled-components"

const Palettes = () => {

    const [palettes, setPalettes] = useState(null);
    const [status, setStatus] = useState("loading");
    

    useEffect(() => {
        fetch(`/api/palettes`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data.data);
            setPalettes(data.data);
            setStatus("loaded");
          });
      }, []);

    if (status === "loading") {
      return <>{status}</>
    }
    return (
    <Container>
      <h1>Trending color palettes</h1>
      <h3>Get inspired! </h3>
      <Wrapper>
        {palettes?.map((palette) => {
          return (
          <PaletteWrap key={palette._id}>
            {palette?.colors?.splice(0,5).map((color) => {
              return <ColorWrap color={color}></ColorWrap>
            })}
          </PaletteWrap>)
        })}
      </Wrapper>
    </Container>
    )
}

const ColorWrap = styled.div`
background-color: ${props => props.color ? props.color : "none"};
width: calc(100%/5);
height: 100%;
overflow:none;
`;
const PaletteWrap =styled.div`
box-sizing: border-box;
display: flex;
width: 45%;
height: 100px;
/* border: 1px solid red; */
border-radius: 15px;
margin: 5px;
overflow:hidden;
`;

const Container = styled.div`
width:100vw;

`;
const Wrapper = styled.div`
padding: 10px;;
width:inherit ;
display: flex;
flex-wrap:wrap;
`;

export default Palettes;