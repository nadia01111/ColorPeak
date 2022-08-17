import { useState, useEffect,useContext } from "react";
import styled from "styled-components"
import SavePaletteBar from "./SavePaletteBar";
import { UsersContext } from "../Context/UsersContext";
// import { palettes } from "../../assets/palettes";


const Palettes = () => {
  const {currentUser, savePalette, isSaved, setIsSaved} = useContext(UsersContext);

    const [isLiked, setIsLiked] = useState(false);
    const [palettes, setPalettes] = useState(null);
    const [status, setStatus] = useState("loading");
    
    let randomN = Math.floor(Math.random() * 200);
    useEffect(() => {
        fetch("/api/palettes")
          .then((res) => res.json())
          .then((data) => {
            console.log("inside palettes useEff", data.data);
            setPalettes(data.data);
            setStatus("loaded");
          });
      }, []);

 

    if (status === "loading") {
      return <>{status}</>
    }
    return (
    <Container>
      <h2>Trending color palettes</h2>
      <h3>Get inspired! </h3>
      <Wrapper>
        {palettes?.map((palette) => {
          return (
          <Wrap>
          <PaletteWrap key={palette._id}>
            {palette?.palette?.map((color,index) => {
              return <ColorWrap color={color} key={color+index}><ColorName>{color.substring(1)}</ColorName></ColorWrap>
            })}
          </PaletteWrap>
         
          <SavePaletteBar/>
          </Wrap>
          )
        })}
       
        
      </Wrapper>
    </Container>
    )
}

const LikeBtn = styled.button`
font-size: 12px;
filter: grayscale(80%);
display: flex;
align-items: center;
width: 100px;
height: 20px;
border: none;
background-color: transparent;
margin-bottom:5px;
position: relative;
left:85%;
`;

const ColorWrap = styled.div`
background-color: ${props => props.color ? props.color : "none"};
box-shadow: inset rgb(0 0 0 / 5%) 0 1px, inset rgb(0 0 0 / 5%) 0 -1px;
width: calc(100%/5);
height: 100%;
overflow:none;
flex-grow: 1;
display:flex;
align-items: center;
justify-content: center;
text-align: center;

`;



const ColorName = styled.div`
overflow:none;
font-size:18px;
font-weight: bold;
text-transform: uppercase;
letter-spacing: 0.03em;
    transform: translate3d(-50%, -50%, 0) scale(0);
    opacity: 1;
    /* transition: none; */
:hover{
  flex-grow: 1;
}
`;
const PaletteWrap =styled.div`
width: 300px;
display: flex;
height: 100px;
width: ;
border-radius: 15px;
margin: 5px;
overflow:hidden;
`;

const Container = styled.div`
padding:20px;
display: flex;
flex-direction: column;
width:100vw;
align-items: center;

`;
const Wrap = styled.div`


`;
const Wrapper = styled.div`
padding: 10px;
width:inherit ;
display: flex;
flex-wrap:wrap;
align-items: center;
justify-content: center;
`;

export default Palettes;