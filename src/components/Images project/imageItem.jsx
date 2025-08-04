import './imageList.css';
function imageItem({ image }) {
  return <div>
    <img className="imageListImg" src={image.urls.small} alt={image.alt_description} />
  </div>;
}

export default imageItem;
