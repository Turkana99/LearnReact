import Angular from "../../../assets/images/angular.jpg";
import Bootstrap from "../../../assets/images/bootstrap5.png";
import GeneralWeb from "../../../assets/images/kompleweb.jpg";
import Csharp from "../../../assets/images/ccsharp.png";
import "./stateExample2Part.css";

const courseMap = {
  Angular,
  Bootstrap,
  GeneralWeb,
  Csharp,
};

function StateExample2Part({ courseName }) {
  return (
    <div className="courseDiv">
      <img className="course" src={courseMap[courseName]} alt="course" />
    </div>
  );
}

export default StateExample2Part;
