import React from "react";
import { Link, Outlet } from "react-router-dom";
function History() {
  return (
    <>
      <div>History</div>
      <nav>
        <Link to="company">Our companies</Link>
        <Link to="team">team</Link>
      </nav>
      <Outlet/>
    </>
  );
}

export default History;
