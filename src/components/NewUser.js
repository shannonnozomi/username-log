import React from "react";
import "./NewUser.css";
const NewUser = (props) => {
  return (
    <li>
      {props.username} ({props.age} years old)
    </li>
  );
};

export default NewUser;
