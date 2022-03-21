import EntryForm from "./components/EntryForm";
import "./App.css";
import { useState } from "react";
import NewEntry from "./components/NewEntry";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [ageModal, setAgeModal] = useState(false);
  const [emptyModal, setEmptyModal] = useState(false);

  const [userNames, setUserNames] = useState([]);
  const addUserHandler = (enteredText) => {
    console.log(enteredText);
    if (enteredText.username === "") {
      setShowModal(true);
      setEmptyModal(true);
      setAgeModal(false);
    } else if (enteredText.age === "") {
      setShowModal(true);
      setEmptyModal(true);
      setAgeModal(false);
    } else if (parseInt(enteredText.age) < 0) {
      let newNumber = parseInt(enteredText.age);
      if (newNumber < 0) {
        console.log(newNumber);
        setShowModal(true);
        setAgeModal(true);
        setEmptyModal(false);
      }
    } else {
      setUserNames((prevarray) => [
        ...prevarray,
        {
          id: Math.random().toString(),
          ...enteredText,
        },
      ]);
    }
  };

  return (
    <div>
      <EntryForm onAddUsername={addUserHandler} />
      <NewEntry items={userNames} />
      <>
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          ageModal={ageModal}
          setAgeModal={setAgeModal}
          emptyModal={emptyModal}
          setEmptyModal={setEmptyModal}
        />
      </>
    </div>
  );
}

export default App;
