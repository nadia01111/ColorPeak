import styled from "styled-components"
import { useEffect, useState } from "react";

const PaletteFromPicture = () => {
    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);
    const [palette, setPalette] =useState(null);


    useEffect(() => {
        if (images.length<1) return;
        const newImageUrls =[];
        images.forEach((image) => {
            newImageUrls.push(URL.createObjectURL(image));
            setImageURLs(newImageUrls);
        })
    },[images]);

    const onImageChange = (e) => {
        setImages([...e.target.files]);
    }
console.log("imagesurl", imageURLs)
    return (
        <Wrapper>
        <input type="file" multiple accept="image/*" onChange={onImageChange}/>
        <Btn>Generate Palette</Btn>
        <CollageWrap>
        {imageURLs?.map(imageSrc => <ImgWrap><Img src={imageSrc}/></ImgWrap>)}
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

export default PaletteFromPicture;