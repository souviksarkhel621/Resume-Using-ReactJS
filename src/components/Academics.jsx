import React from "react";
function Academics(props) {
  return (
    <div id="Education">
      <div className="Course">
        <h2>{props.course}</h2>
      </div>
      <div className="CourseDetails">
        <h2>{props.school}</h2>
        <p>{props.university}</p>
        <p>{props.marks}</p>
      </div>
    </div>
  );
}
export default Academics;
