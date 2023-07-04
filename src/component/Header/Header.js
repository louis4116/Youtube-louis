import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { searchActions } from "../../store/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { FiX } from "react-icons/fi";
import HeaderDrop from "./HeaderDrop";
import List from "../icons/List";
import Search from "../icons/Search";
import YoutubeIcon from "../icons/YoutubeIcon";
import Video from "../icons/Video";
import Bell from "../icons/Bell";
import classes from "./header.module.scss";

const Header = () => {
  const [show, setShow] = useState(false);
  const inputRef = useRef(null);
  const dropRef = useRef(false);
  const dispatch = useDispatch();
  const searchHistory = useSelector((item) => item.searchResult?.history);
  const handleSubmit = (e) => {
    e.preventDefault();
    const result = inputRef.current.value;
    dispatch(searchActions.searchHistory(result));
    dispatch(searchActions.searchItems(result));
    inputRef.current.value = "";
  };
  const clean = () => {
    inputRef.current.value = "";
  };
  useEffect(() => {
    let handler = (e) => {
      if (
        !inputRef.current.contains(e.target) &&
        !dropRef.current.contains(e.target)
      ) {
        setShow(false);
      }
    };
    document.addEventListener("mouseup", handler);
    return () => {
      document.removeEventListener("mouseup", handler);
    };
  }, [show]);
  useEffect(() => {
    if (searchHistory.length > 10) dispatch(searchActions.delSearchHistory());
  }, [searchHistory]);
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
      <div className={classes["header-second"]}>
        <form onSubmit={handleSubmit}>
          <div className={classes["header-second-search"]}>
            <div className={classes["header-second-search-container"]}>
              <div className={classes["header-second-search-input"]}>
                <input
                  type="text"
                  placeholder="搜尋"
                  ref={inputRef}
                  onClick={() => setShow(true)}
                />
                {inputRef.current?.value && (
                  <span
                    className={classes["header-second-search-input-FiX"]}
                    onClick={clean}
                  >
                    <FiX />
                  </span>
                )}
                <div className={classes["header-second-drop"]} ref={dropRef}>
                  {show &&
                    searchHistory?.map((item) => {
                      const uuid = uuidv4();
                      return (
                        <HeaderDrop key={uuid} item={item} setShow={setShow} />
                      );
                    })}
                </div>
              </div>

              <button>
                <Search />
              </button>
            </div>
          </div>
        </form>
      </div>
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
