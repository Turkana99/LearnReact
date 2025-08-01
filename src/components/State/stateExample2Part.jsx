import Angular from "../../assets/images/angular.jpg";
import Bootstrap from "../../assets/images/bootstrap5.png";
import GeneralWeb from "../../assets/images/kompleweb.jpg";
import Csharp from "../../assets/images/ccsharp.png";

const courseMap={
    Angular,
    Bootstrap,
    GeneralWeb,
    Csharp
}

function StateExample2Part({ courseName }) {
  return (
    <>
      <img src={courseMap[courseName]} alt="" />
    </>
  );
}

export default StateExample2Part;
