import styled from "styled-components"
import { useEffect, useState } from "react";

const PaletteFromPicture = () => {
    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);
    const [palette, setPalette] =useState(null);

    const myFunc = (ev) => {
        ev.preventDefault();
         fetch("/api/color-recognize", {
             method: "POST",
             headers: {
            "Content-Type": "application/json",},
            body: JSON.stringify({imageURLs}),
 
     })
     .then((res) => res.json())
     .then((data) => {
         console.log(data.data);
        
     })  
    }

    useEffect(() => {
        if (images.length<1) return;
        const newImageUrls =[];
        images.forEach((image) => {
            newImageUrls.push(URL.createObjectURL(image));
            setImageURLs(newImageUrls);
        })
    },[images]);

    const test ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoghCA2OVcSJkItUA-O9-o44NKQncoD7vmzRSw4UKhqUmLNUox6W_4_3FUBS4fjb7xJxg&usqp=CAU";
    const onImageChange = (e) => {
        setImages([...e.target.files]);
    }
console.log("imagesurl", imageURLs)
    return (
        <Wrapper>
        <input type="file" multiple accept="image/*" onChange={onImageChange}/>
        
        <Btn onClick={myFunc}>Generate Palette</Btn>
        <CollageWrap>
        {imageURLs?.map(imageSrc => <ImgWrap><Img src={test}/></ImgWrap>)}
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