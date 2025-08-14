import { Routes, Route } from "react-router-dom";
import Home from "./home";
// import AboutUs from "./aboutUs";
import Navbar from "./navbar";
import Mission from "./mission";
import History from "./history";
import WrongPath from "./wrongPath";
import Company from "./Company";
import Team from "./Team";
import Members from "./Members";
import MemberDetail from "./MemberDetail";
import React from "react";
const LazyAboutUs = React.lazy(() => import("./aboutUs"));
function Router() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/aboutUs"
          element={
            <React.Suspense>
              <LazyAboutUs />
            </React.Suspense>
          }
        />
        <Route path="/mission" element={<Mission />} />
        <Route path="/history" element={<History />}>
          <Route path="company" element={<Company />} />
          <Route path="team" element={<Team />} />
        </Route>
        <Route path="/members" element={<Members />} />
        <Route path="/members/:memberId" element={<MemberDetail />} />
        <Route path="*" element={<WrongPath />} />
      </Routes>
    </div>
  );
}



export default Router;















