import { useState } from "react";
import "./EntryForm.css";

const EntryForm = (props) => {
  const [username, setUsername] = useState({ username: "", age: "" });

  const handleOnChangeUser = (e) => {
    setUsername((prev) => ({ ...prev, username: e.target.value }));
  };
  const handleOnChangeAge = (e) => {
    setUsername((prev) => ({ ...prev, age: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    {
      const newUser = {
        ...username,
      };
      props.onAddUsername(newUser);
    }
    setUsername({ username: "", age: "" });
  };
  return (
    <>
      <div className="entryFormDiv">
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            value={username.username}
            type="text"
            onChange={handleOnChangeUser}
          ></input>
          <label>Age (Years)</label>
          <input
            value={username.age}
            onChange={handleOnChangeAge}
            type="number"
          ></input>
          <button type="submit">Add User</button>
        </form>
      </div>
    </>
  );
};

export default EntryForm;
