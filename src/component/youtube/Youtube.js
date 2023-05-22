import React from "react";
import Header from "./Header";
import Left from "./Left";
import Right from "./Right/Right";
import classes from "./youtube.module.scss";
const Youtube = () => {
  return (
    <div className={classes.youtube}>
      <div>
        <Header />
      </div>
      <div className={classes["youtube-container"]}>
        <div className={classes["youtube-content"]}>
          <div className={classes["youtube-left"]}>
            <Left />
          </div>
          <div className={classes["youtube-right"]}>
            <Right />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Youtube;
