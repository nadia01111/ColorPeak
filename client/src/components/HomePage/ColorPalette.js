import { useContext, useState , useEffect} from "react";
import { ColorsContext } from "../Context/ColorsContext";
import styled from "styled-components";


const ColorPalette = () => {
// const {colors, setColors} = useContext(ColorsContext);

    const [colors, setColors] = useState(null);
    const [type, setType] = useState(null);
    const [loading, setLoading] = useState(false);

    const onKeyDown = () => {
        
    }
       
    useEffect(() => {
        const fetchColors = async () => {
            console.log("first");
            const response = await fetch('/api/randome-palette');
            const fetchedColors = await response.json();
            setType(fetchedColors.type);
            setColors(fetchedColors.data);
            console.log(fetchedColors.data);
            setLoading(true);
    };
    fetchColors();

}, []);

if (loading === false) {
    <div>loading</div>
}

    return (<Wrapper>
    
        <Wrap>
        {colors?.splice(0,5).map((color)=> {
            return <Color color={color}>
                <ColorName color={color}>{color.substr(1)}</ColorName>
                </Color>
        })}
        </Wrap>
    </Wrapper>)
}

const Wrapper = styled.div`
width: 100%;

`;
const Wrap = styled.div`
display: flex;
height: calc(100vh - 50px);
`;
const ColorName = styled.div`
text-transform: uppercase;
letter-spacing: 0.03em;
padding: 5 px 10 px;
border-radius: 10px;
:hover{

    border: 1px solid ${props => props.color ? props.color : "none"};
    background-color: ${props => props.color ? props.color : "none"};
  b
    opacity: 50%;
}
`;

const Color = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: ${props => props.color ? props.color : "none"};
width: 20%;
height: 100%;
top: 0px;
left: 0%;
transform: translate3d(0px, 0px, 0px);
`;


export default ColorPalette;