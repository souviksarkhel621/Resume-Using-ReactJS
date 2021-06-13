import React from "react";
import Footer from "./Footer";
import Heading from "./Heading";
import Academics from "./Academics";
import educations from "./Education";
import Skillset from "./Skillset";
import Projects from "./projects";
import Codingprofile from "./codingprofiles";
import codinghandles from "./codinghandles";
import Acheivement from "./Acheivement";
function App() {
  return (
    <div>
      <Heading />
      {educations.map((education) => (
        <Academics
          key={education.key}
          course={education.course}
          school={education.school}
          university={education.university}
          marks={education.marks}
        />
      ))}
      <Skillset />
      <hr className="upperhr" />

      <Projects />

      <hr />

      <hr className="lowerhr" />
      {codinghandles.map((value) => (
        <Codingprofile
          key={value.key}
          sitename={value.sitename}
          userhandle={value.userhandle}
          link={value.link}
          image={value.image}
          problemsolved={value.problemsolved}
        />
      ))}
      <Acheivement />
      <Footer />
    </div>
  );
}
export default App;
