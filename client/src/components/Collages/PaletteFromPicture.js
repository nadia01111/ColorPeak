import styled from "styled-components"
import { useEffect, useState } from "react";

const PaletteFromPicture = () => {
    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);

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

    return (
        <Wrapper>
            <input type="file" multiple accept="image/*" onChange={onImageChange}/>
            {imageURLs?.map(imageSrc => <ImgWrap><Img src={imageSrc}/></ImgWrap>)}

        </Wrapper>)
}

const ImgWrap = styled.div`
height: 300px;
`;
const Img = styled.img`
height: inherit;
`;

const Wrapper = styled.div`
`

export default PaletteFromPicture;