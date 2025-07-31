import React from "react";

function Course({ image, title, description }) {
  //   console.log(props);
  //   const { title, description } = props;
  return (
    <div>
      {/* <div>{props.title}</div>
      <div>{props.description}</div> */}
      <img src={image} alt="" />
      <div>{title}</div>
      <div>{description}</div>
    </div>
  );
}

export default Course;
