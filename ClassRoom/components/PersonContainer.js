import React from "react";
import HeadingH2 from "./HeadingH2";
import PersonPic from "./PersonPic";

class PersonContainer extends React.Component {
  render() {
    return (
      <div className="personcontainer">
        <HeadingH2 />
        <PersonPic />
      </div>
    );
  }
}

export default PersonContainer;
