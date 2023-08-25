import { useState } from "react";

const SinglePageImages = ({ image = [{ url: "" }] }) => {
  console.log(image);

  const [fullImg,setFullImg] = useState(image[0])

  return (
    <div className=' grid grid-cols-3 gap-5 section-p'>
      <div className="flex flex-col gap-5 items-start">
        {image.map((img, i) => {
          return (
            <figure key={i} className="">
              <img src={img.url} alt='' onClick={()=>setFullImg(img)} />
            </figure>
          );
        })}
       </div>

        <div className="flex justify-center items-center col-span-2">
       <img src={fullImg.url} alt={fullImg.filename}/>

        </div>
     
    </div>
  );
};

export default SinglePageImages;
