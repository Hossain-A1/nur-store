const SinglePageImages = ({image}) => {
  console.log(image);
    return (
    <div>
      {
       image && image.map((img,i)=>(
      
          <figure key={i}>
          <img src={img.url} alt="" />

          </figure>
        ))
      }
    </div>
  )
}

export default SinglePageImages