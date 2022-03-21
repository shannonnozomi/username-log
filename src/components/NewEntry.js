import React from "react";
import "./NewEntry.css";
import NewUser from "./NewUser";

const NewEntry = (props) => {
  return (
    <div className={props.items.length > 0 ? "newUserEntry" : ""}>
      <ul>
        {props.items.map((newUser) => (
          <NewUser
            key={newUser.id}
            id={newUser.id}
            username={newUser.username}
            age={newUser.age}
          ></NewUser>
        ))}
      </ul>
    </div>
  );
};

export default NewEntry;
