import React from "react";
import './TodoApp.css'
import AssignmentIcon from "@mui/icons-material/Assignment";
function Header() {
  return (
    <header className="headerApp">
      <h1>
        <AssignmentIcon/>
        To Do App
      </h1>
    </header>
  );
}

export default Header;
