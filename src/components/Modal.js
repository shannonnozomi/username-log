import React, { useRef } from "react";
import { useSpring, animated } from "react-spring";
import styles from "./Modal.module.css";
const Modal = (props) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: props.showModal ? 1 : 0,
    transform: props.showModal ? `translateY(0%)` : `translateY(-100%)`,
  });
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      props.setShowModal(false);
    }
  };
  return (
    <>
      {props.showModal ? (
        <>
          <div
            ref={modalRef}
            onClick={closeModal}
            className={styles.darkBG}
          ></div>
          <animated.div
            style={animation}
            onClick={() => props.setShowModal(false)}
          >
            <div
              onClick={() => props.setShowModal(false)}
              className={styles.centered}
            >
              <div className={styles.modal}>
                <div className={styles.modalHeader}>
                  <header className={styles.heading}>Invalid Input</header>
                </div>
                <div className={styles.modalContent}>
                  <p>
                    {props.ageModal && "Please enter a valid age (> 0)"}
                    {props.emptyModal &&
                      "Please enter a valid name and age (non-empty values)."}
                  </p>
                  <div className={styles.actionsContainer}>
                    <button
                      className={styles.closeBtn}
                      onClick={() => props.setShowModal(false)}
                    >
                      Okay
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </animated.div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
