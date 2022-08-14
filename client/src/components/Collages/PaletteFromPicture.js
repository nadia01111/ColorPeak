import styled from "styled-components"
import { useEffect, useState } from "react";
import { FcCallback } from "react-icons/fc";

const getBase64 = file => {
    return new Promise(resolve => {
      let fileInfo;
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        console.log("Called", reader);
        baseURL = reader.result;
        console.log(baseURL);
        resolve(baseURL);
      };
      console.log(fileInfo);
    });
  };

const PaletteFromPicture = () => {
    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);
    const [encodedURLs, setEncodedURLs] = useState([]);
    const [palette, setPalette] =useState(null);
    const [status, setStatus] = useState("loading")

    const myFunc = (ev) => {
        ev.preventDefault();
        let reader = new FileReader();

        let blob = new Blob([images[0]], { type: "image/jpg" });

        let ImageBase64;

        reader.onload = function (e) {

            ImageBase64 = reader.result;
            let image = {
                ImageBase64,
                
              };
              fetch("/api/color-recognize", {
                  method: "POST",
                  headers: {
                 "Content-Type": "application/json",},
                 body:JSON.stringify(image),
                
          })
          .then((res) => res.json())
          .then((data) => {
              console.log(data.data);
              setPalette(data.data);
              setStatus("loaded")
          })  

        };
        reader.readAsDataURL(blob);
       
    }

    useEffect(() => {
        if (images.length<1) return;
        const newImageUrls =[];
        const newImageEncodedUrls =[];
        images.forEach((image) => {
            newImageUrls.push(URL.createObjectURL(image));
            setImageURLs(newImageUrls);
            const encodedURI = btoa(URL.createObjectURL(image));
            newImageEncodedUrls.push(encodedURI)
            setEncodedURLs(newImageEncodedUrls);
        })
    },[images]);

   
    const onImageChange = (e) => {
        setImages([...e.target.files]);
    }
// console.log("imagesurl", imageURLs)

// if (status ==="loading") {return <div>loading</div>}
    return (
        <Wrapper>
        <input type="file" multiple accept="image/*" onChange={onImageChange}/>
        
        <Btn onClick={myFunc}>Generate Palette</Btn>
        <CollageWrap>
        {imageURLs?.map((imageSrc) => {
        return (<div>
            <ImgWrap><Img src={imageSrc}/></ImgWrap>
        <PaletteWrap>
            {status === "loading" ? <>loading</> :
            palette.splice(0,5).map((element) => {
               const {red, green, blue} = element.color;
               const rgb = "rgb("+red + "," + green+","+ blue+")";
               return <OneColor color={rgb} />
          
            })}
        </PaletteWrap>
        </div>)
        
        })}
        
        </CollageWrap>
        </Wrapper>)
}
const CollageWrap = styled.div``;
const PaletteWrap = styled.div`
width: 500px;
display: flex;
`;
const OneColor = styled.div`
width: calc(100%/5);
height: 100px ;
background-color: ${props => props.color ? props.color : "none"};
`;
const ImgWrap = styled.div`
width: 500px;
`;
const Img = styled.img`
width: inherit;
`;
const Btn = styled.button`
`;
const Wrapper = styled.div`
`

export default PaletteFromPicture;