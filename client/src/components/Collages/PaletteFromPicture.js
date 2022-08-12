import styled from "styled-components"
import { useEffect, useState } from "react";
import body from '/Users/nadi/Documents/concordia-bootcamps/Final-Project/client/src/assets/test.json';
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

    const myFunc = (ev) => {
        ev.preventDefault();
        // getBase64(images).then(result => {
        //     images["base64"] = result;
        //     console.log("File Is", images);
        //     this.setState({
        //       base64URL: result,
        //       images
        //     });
        //   })
        //   .catch(err => {
        //     console.log(err);
        //   });
        let reader = new FileReader();
        console.log(images[0])
        let blob = new Blob([images[0]], { type: "image/jpg" });
        // const [imageObject, setImageObject] = useState(null);
        let imageObject;
        console.log(blob)
        reader.onload = function (e) {
            imageObject = reader.result;
            //callback(imageObject)
            console.log("1: ",reader.result);
            //console.log(reader.result);
        };
        reader.readAsDataURL(blob);
       
        
        console.log("2: ",imageObject)
         fetch("/api/color-recognize", {
             method: "POST",
             headers: {
            "Content-Type": "application/json",},
            body:JSON.stringify({imageObject}),
           
           
 
     })
     .then((res) => res.json())
     .then((data) => {
         console.log(data.data);
        
     })  
    }

    useEffect(() => {
        if (images.length<1) return;
        const newImageUrls =[];
        const newImageEncodedUrls =[];
        images.forEach((image) => {
            newImageUrls.push(URL.createObjectURL(image));
            //newImageUrls.push(image);
            setImageURLs(newImageUrls);
            const encodedURI = btoa(URL.createObjectURL(image));
            newImageEncodedUrls.push(encodedURI)
            setEncodedURLs(newImageEncodedUrls);
        })
    },[images]);

   
    const onImageChange = (e) => {
        setImages([...e.target.files]);
    }
console.log("imagesurl", imageURLs)
    return (
        <Wrapper>
        <input type="file" multiple accept="image/*" onChange={onImageChange}/>
        
        <Btn onClick={myFunc}>Generate Palette</Btn>
        <CollageWrap>
        {imageURLs?.map((imageSrc) => {
        return <ImgWrap><Img src={imageSrc}/></ImgWrap>})}
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