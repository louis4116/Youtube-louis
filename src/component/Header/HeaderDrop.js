import React, { useState } from "react";
import { FiRotateCcw, FiDelete } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { searchActions } from "../../store/searchSlice";
import classes from "./headerdrop.module.scss";
const HeaderDrop = ({ item, setShow }) => {
  const dispatch = useDispatch();
  const searchHistory = (e) => {
    dispatch(searchActions.searchItems(item));
    setShow(false);
    console.log("test");
  };
  return (
    <div className={classes["headerdrop"]} onClick={searchHistory}>
      <span className={classes["headerdrop-before"]}>
        <FiRotateCcw />
      </span>
      <span className={classes["headerdrop-content"]}>{item}</span>
    </div>
  );
};

export default HeaderDrop;
