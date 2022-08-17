import styled from "styled-components"
import { useContext, useEffect, useState } from "react";
import { UsersContext } from "../Context/UsersContext";

const { v4: uuidv4 } = require("uuid");


//encode image from user to B64 fromat (for Google vision API)
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
        // console.log("Called", reader);
        baseURL = reader.result;
        console.log(baseURL);
        resolve(baseURL);
      };
      console.log(fileInfo);
    });
  };

const PaletteFromPicture = () => {
    const {currentUser, savePalette, isSaved, setIsSaved} = useContext(UsersContext);
    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);
    const [encodedURLs, setEncodedURLs] = useState([]);
    const [palette, setPalette] =useState(null);
    const [status, setStatus] = useState("loading")


    ///getPaletteFromPicture 
    const getPaletteFromPicture = (ev) => {
        ev.preventDefault();
        let reader = new FileReader();
        let blob = new Blob([images[0]], { type: "image/jpg" });
        let ImageBase64;
        reader.onload = function () {
            ImageBase64 = reader.result;
            let image = {ImageBase64};
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
///useEffect tto render image from user`s source
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

    const paletteToSave = () => {
        setIsSaved(!isSaved);
        const palette = palette?.slice(0,5)?.map((element)=>{
            const {red, green, blue} = element.color;
            const rgb = "rgb("+red + "," + green+","+ blue+")";
            return rgb;
        });
        const _id = uuidv4()
        const isLikedBy = currentUser?._id;
        fetch("/api/save-palette", {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({_id:_id, currentPalette:palette, currentUser:isLikedBy, isSaved})
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data.data);
            });


    }
// if (status ==="loading") {return <div>loading</div>}
    return (
        <Wrapper>
        <BtnWrap>
        <input type="file" multiple accept="image/*" onChange={onImageChange}/>
        <Btn onClick={getPaletteFromPicture}>Generate Palette</Btn>

        </BtnWrap>
        <CollageWrap>
        {imageURLs?.map((imageSrc) => {
        return (<ReturnWrap>
            <Wrap1>
               <ImgWrap><Img src={imageSrc}/></ImgWrap>
               <Btn onClick={paletteToSave}>Save Palette</Btn> 
            </Wrap1>
            
            <PaletteWrap>
                    {status === "loading" ? null :
                    palette.slice(0,5).map((element) => {
                        const {red, green, blue} = element.color;
                        const rgb = "rgb("+red + "," + green+","+ blue+")";
                        return <OneColor color={rgb} key={rgb} />
                    })}
                </PaletteWrap>
                
        </ReturnWrap>)
        
        })}
        
        </CollageWrap>
        </Wrapper>)
}

const ReturnWrap =styled.div`
`;
const Wrap1 =styled.div`
display: flex;

`;
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
const BtnWrap =styled.div`
`;
const Wrapper = styled.div`
margin: 20px;
`

export default PaletteFromPicture;