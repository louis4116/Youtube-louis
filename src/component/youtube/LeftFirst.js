import React from "react";
import {
  FaRegThumbsUp,
  FaRegThumbsDown,
  FaShare,
  FaDownload,
  FaEllipsisH,
} from "react-icons/fa";
import { FiScissors, FiPlus, FiBell } from "react-icons/fi";
import classes from "./leftfirst.module.scss";
const LeftFirst = ({ title, channelTitle }) => {
  return (
    <div className={classes["left-title"]}>
      <div className={classes["left-title-top"]}>{title}</div>
      <div className={classes["left-little-small"]}>
        <div className={classes["left-little-content"]}>
          <div className={classes["photo"]}></div>
          <div className={classes["left-des"]}>
            <div style={{ fontWeight: "500" }}>{channelTitle}</div>
            <div style={{ color: "#606060", fontSize: "12px" }}>
              37.8萬位訂閱者
            </div>
          </div>
          <div className={classes["left-sub"]}>
            <FiBell />
            <span>已訂閱</span>
          </div>
        </div>
        <div className={classes["left-multipeicon"]}>
          <div className={classes["left-thumbs"]}>
            <div className={classes["left-FaRegThumbsUp"]}>
              <FaRegThumbsUp size={18} />
              <span>50</span>
            </div>
            <div className={classes["left-FaRegThumbsDown"]}>
              <FaRegThumbsDown size={18} />
              <span>50</span>
            </div>
          </div>
          <div className={classes["left-FaShare"]}>
            <FaShare />
            <span>分享</span>
          </div>
          <div className={classes["left-FaDownload"]}>
            <FaDownload />
            <span>下載</span>
          </div>
          <div className={classes["left-FiScissors"]}>
            <FiScissors />
            <span>剪輯片段</span>
          </div>
          <div className={classes["left-FiPlus"]}>
            <FiPlus />
            <span>儲存</span>
          </div>
          <div className={classes["left-FaEllipsisH"]}>
            <FaEllipsisH />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftFirst;
