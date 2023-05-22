import React, { useState, useRef } from "react";
import List from "./icons/List";
import Search from "./icons/Search";
import YoutubeIcon from "./icons/YoutubeIcon";
import MicroPhone from "./icons/MicroPhone";
import Video from "./icons/Video";
import Bell from "./icons/Bell";
import { searchActions } from "../../store/searchSlice";
import { useDispatch } from "react-redux";
import classes from "./header.module.scss";

const Header = () => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const result = inputRef.current.value;
    dispatch(searchActions.searchItems(result));
  };
  return (
    <div className={classes["header-container"]}>
      <div className={classes["header-first"]}>
        <div>
          <List />
        </div>
        <div>
          <YoutubeIcon />
        </div>
      </div>
      <form onSubmit={handleSubmit} className={classes["header-second"]}>
        <div className={classes["header-second-search"]}>
          <div className={classes["header-second-search-container"]}>
            <div className={classes["header-second-search-input"]}>
              <input type="text" ref={inputRef} />
            </div>
            <button>
              <Search />
            </button>
            <div className={classes["header-second-microphone"]}>
              <MicroPhone />
            </div>
          </div>
        </div>
      </form>
      <div className={classes["header-third"]}>
        <div className={classes["header-third-video"]}>
          <Video />
        </div>
        <div className={classes["header-third-bell"]}>
          <Bell />
        </div>
        <div className={classes["header-third-user"]}></div>
      </div>
    </div>
  );
};

export default Header;
