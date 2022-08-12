import styled from "styled-components"
import { useEffect, useState } from "react";
import { FcCallback } from "react-icons/fc";



const PaletteFromURL = () => {
    const [imageURL, setImageURL] = useState([]);
    const [palette, setPalette] =useState(null);

    const addURL = (e) => {
        setImageURL(e.target.value)
    }
    console.log(imageURL);

    useEffect(() => {
        if (imageURL.length<1) return;
        const newImageUrls =[];
     
    },[imageURL])

    return (
        <Wrapper>
        <input onChange={addURL} placeholder="insert link here"/>
        {/* <input onSubmit={addURL} type="submit" value="Add URL"></input>
        <Btn>Generate Palette</Btn> */}
        <CollageWrap>
        {imageURL.map((url) => {
        return <ImgWrap><Img src={url}/></ImgWrap>})}
        <PaletteWrap>

        </PaletteWrap>
        </CollageWrap>
        </Wrapper>)
}
const CollageWrap = styled.div``;
const PaletteWrap = styled.div``;
const ImgWrap = styled.div`
height: 300px;
`;
const Img = styled.img`
height: inherit;
`;
const Btn = styled.button`
`;
const Wrapper = styled.div`
`

export default PaletteFromURL
;