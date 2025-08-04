import StateExample2Part from "./stateExample2Part";
import { useState } from "react";
import './stateExample2.css';

function getRandomCourse() {
  const courseArray = ["Angular", "Bootstrap", "GeneralWeb", "Csharp"];
  return courseArray[Math.floor(Math.random() * courseArray.length)];
}
function StateExample2() {
  const [courses, setCourses] = useState([]);
  const handleClick = () => {
    setCourses([...courses, getRandomCourse()]);
  };
  const courseList = courses.map((course, index) => {
    return <StateExample2Part key={index} courseName={course} />;
  });

  return (
    <div className="App">
      <button className="appButton" onClick={handleClick}>Add Course</button>
      <div className="courseList">{courseList}</div>
    </div>
  );
}

export default StateExample2;
