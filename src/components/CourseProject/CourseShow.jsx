import "./Course.css";
function CourseShow({id, description, title, price, removeCourse}) {
  return (
    <div className="card">
      <div className="cardTitlePrice">
        <h2 className="cardTitle">{title}</h2>
        <h4 className="cardPrice">{price} $</h4>
        <p className="cardDescription">{description}</p>
      </div>
      <button className="cardDeleteBtn" onClick={()=>removeCourse(id)}>Delete</button>
    </div>
  );
}

export default CourseShow;
