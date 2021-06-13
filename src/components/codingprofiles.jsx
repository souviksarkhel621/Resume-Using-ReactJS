import React from "react";
function Codingprofile(props) {
  return (
    <div class="cphandles">
      <div class="cphandle">
        <a href={props.link} target="_blank">
          <img class="cpimg" src={props.image} alt={props.sitename} />
          <p>{props.userhandle}</p>
          <p>{props.problemsolved}</p>
        </a>
      </div>
    </div>
  );
}
export default Codingprofile;
