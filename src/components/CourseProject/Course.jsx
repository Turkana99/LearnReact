import axios from "axios";
import "./Course.css";
import { useEffect, useState } from "react";
import CourseList from "./CourseList";
import Loading from "./Loading";
function Course() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const deleteCourse = (id) => {
    const afterDeletingCourses = courses.filter((course) => course.id !== id);
    setCourses(afterDeletingCourses);
  };
  const fetchCourses = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3002/courses");
      setCourses(response.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, []);
  return (
    <div className="mainDiv">
      {loading ? (
        <Loading />
      ) : courses.length === 0 ? (
        <div className="refreshDiv">
            <h2>Deleted All Courses</h2>
            <button className="cardDeleteBtn" onClick={()=> fetchCourses()}>Update</button>
        </div>
      ) : (
        <CourseList courses={courses} removeCourse={deleteCourse} />
      )}
    </div>
  );
}

export default Course;
