import Course from "../Course/Course";
import Angular from "../../assets/images/angular.jpg";
import Bootstrap from "../../assets/images/bootstrap5.png";
import GeneralWeb from "../../assets/images/kompleweb.jpg";
import Csharp from "../../assets/images/ccsharp.png";

function frsExample() {
  return <>
        <section className="hero is-link">
        <div className="hero-body">
          <p className="title">My courses</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Course
                image={Angular}
                title="Angular"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              />
            </div>
            <div className="column">
              <Course
                image={Bootstrap}
                title="Bootstrap 5"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              />
            </div>
            <div className="column">
              <Course
                image={GeneralWeb}
                title="General Web"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              />
            </div>
            <div className="column">
              <Course
                image={Csharp}
                title="Frontend"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              />
            </div>
          </div>
        </section>
      </div>
  </>;
}

export default frsExample;
