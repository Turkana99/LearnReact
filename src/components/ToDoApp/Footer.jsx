import React from "react";
import './TodoApp.css'
export default function Footer() {
  const date = new Date();
  return (
    <footer className="todoFooter">
      <p>Copyright {date.getFullYear()} | Turkana Mammadova</p>
    </footer>
  );
}
