import CourseShow from "./CourseShow";
import "./Course.css";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
function CourseList({ courses }) {
  const [index, setIndex] = useState(0);
  const { title, description, price } = courses[index];
  const getRandomCourses = () => {
    let randomNumber = Math.fllor(Math.random() * courses.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkIndex(randomNumber));
  };
  const checkIndex = (index) => {
    if (index < 0) {
      return courses.length - 1;
    }
    if (index > courses.length - 1) {
      return 0;
    }
    return index;
  };
  const prevCourse = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };
  const nextCourse = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };
  return (
    <div className="courseMainDiv">
      <div className="courseTit">
        <h2>My Courses</h2>
        <button className="cardDeleteBtn" onClick={getRandomCourses}>
          Show Random Courses
        </button>
      </div>
      <div className="cardDiv">
        {/* {courses.map((course) => {
          return <CourseShow {...course} key={course.id} removeCourse={removeCourse} />;
        })} */}
        <button className="prevNext" onClick={prevCourse}>
          <FaChevronLeft />
        </button>
        <div className="card">
          <div className="cardTitlePrice">
            <h2 className="cardTitle">{title}</h2>
            <h4 className="cardPrice">{price} $</h4>
            <p className="cardDescription">{description}</p>
          </div>
          {/* <button className="cardDeleteBtn" onClick={() => removeCourse(id)}>
            Delete
          </button> */}
        </div>
        <button className="prevNext" onClick={nextCourse}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default CourseList;
