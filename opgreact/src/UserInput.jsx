import React from "react";

const UserInput = (props) => {
  const ImpStyle = {
    width: "60%",
    padding: "16px",
    margin: "16px",
    border: "2px solid green",
    background: 'lightyellow'
  };
  return (
    <div>
<h5>Userinput herunder:</h5>
    <input
      type="text"
      style={ImpStyle}
      onChange={props.changed}
      value={props.currentfavAnimal}
    />
    </div>
  );
};

export default UserInput;
