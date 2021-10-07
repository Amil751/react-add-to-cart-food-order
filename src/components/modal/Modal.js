import React, { Fragment } from "react";
import classes from "./Modal.module.css";
import { useDispatch } from "react-redux";
import { uiAction } from "../../store/ui-slice";

const ModalOverlay = (props) => {
  return <div className={classes.backdrop}>{props.children}</div>;
};
const Backdrop = (props) => {
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(uiAction.toggle());
    console.log("amil");
  };
  return <div className={classes.modal} onClick={toggle}></div>;
};
const Modal = (props) => {
  return (
    <Fragment>
      <Backdrop />
      <ModalOverlay>{props.children}</ModalOverlay>
    </Fragment>
  );
};

export default Modal;
