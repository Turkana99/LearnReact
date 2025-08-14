import React from "react";
import { useSearchParams } from "react-router-dom";
function Members() {
  const [searchParams, setSearchParams] = useSearchParams();
  const isActive= searchParams.get('filter')==='active';
  return (
    <>
      <div>Members</div>
      <button
        onClick={() => {
          setSearchParams({ filter: "active" });
        }} // http://localhost:5173/members?filter=active
      >
        Active Member
      </button>
         <button
        onClick={() => {
          setSearchParams();
        }}
      >
        All Member
      </button>
      {isActive ? <h2>Active member</h2>: <h2> All Member</h2>}
    </>
  );
}

export default Members;
