import React from "react";
import classes from "./rightdetail.module.scss";
const RightDetail = ({ title, channel, imgur, videoId, navVideo }) => {
  const handleClick = () => {
    navVideo({
      videoId: videoId,
    });
  };
  return (
    <div className={classes["right-little"]} onClick={handleClick}>
      <div className={classes["right-content"]}>
        <div>
          <div className={classes["right-video-pre"]}>
            <img src={imgur} alt="" />
          </div>
        </div>
        <div className={classes["right-content-pre"]}>
          <span className={classes["right-little-video-title"]}>{title}</span>
          <div>{channel}</div>
          <div>觀看次數：54次，10天前</div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default RightDetail;
