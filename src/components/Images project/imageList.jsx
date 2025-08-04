import ImageItem from "./imageItem";
import './imageList.css';
function imageList({ imagePlacholder }) {
  return (
    <div className="imageList">
      {imagePlacholder.map((image, index) => {
        return <ImageItem image={image}  key={index}/>;
      })}
    </div>
  );
}

export default imageList;
