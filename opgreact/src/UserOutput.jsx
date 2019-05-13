import React from 'react';
import './UserOutput.css'
const UserOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>
        (UserOutput-component)
        FavAnimal: {props.favAnimal}
      </p>
    </div>
  )
};

export default UserOutput;