import React, { useState, useRef, useEffect } from "react";
import { useGetAllDatasQuery } from "../../../api/FetchData";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { videoActions } from "../../../store/videoSlice";
import RightDetail from "./RightDetail";
import classes from "./right.module.scss";

const Right = () => {
  const [currentPage, setCurrentPage] = useState("1");
  const [pageNumber, setPageNumber] = useState([]);
  const [currentData, setCurentData] = useState([]);
  const elementRef = useRef(null);
  const dispatch = useDispatch();
  const searchItems = useSelector((state) => state.searchResult.items);
  const { data } = useGetAllDatasQuery(searchItems);
  const dataLength = data?.items?.length;
  const perPage = 7;
  const lastPage = currentPage * perPage;
  const firstPage = lastPage - perPage;

  const testScroll = (element, speed, distance, step) => {
    let temp = 0;
    const sliderTimer = setInterval(() => {
      element.scrollLeft += step;
      temp += Math.abs(step);

      if (temp >= distance) {
        clearInterval(sliderTimer);
      }
    }, speed);
  };
  const navVideo = (e) => {
    dispatch(videoActions.actionhVideos(e));
  };
  useEffect(() => {}, [testScroll]);

  useEffect(() => {
    if (data) {
      setCurentData(data?.items);
      const temp = [];
      for (let i = 1; i <= Math.ceil(dataLength / perPage); i++) {
        temp.push(i);
      }
      setPageNumber(temp);
    }
  }, [data]);

  return (
    <div className={classes.top}>
      <div className={classes["right-top"]}>
        <div
          className={classes["right-arrow"]}
          onClick={() => {
            testScroll(elementRef.current, 25, 100, -25);
          }}
        >
          <FaArrowLeft style={{ userSelect: "none" }} />
        </div>

        <div className={classes["right-top-container"]} ref={elementRef}>
          <div className={classes.test2}>
            {pageNumber?.map((i) => (
              <div
                className={
                  currentPage === i
                    ? classes["right-top-content-selected"]
                    : classes["right-top-content"]
                }
                key={Math.random()}
                onClick={() => setCurrentPage(i)}
              >
                頁數{i}
              </div>
            ))}
          </div>
        </div>

        <div
          className={classes["right-arrow"]}
          onClick={() => {
            testScroll(elementRef.current, 25, 100, 25);
          }}
        >
          <FaArrowRight style={{ userSelect: "none" }} />
        </div>
      </div>
      {currentData?.slice(firstPage, lastPage).map((item) => (
        <RightDetail
          key={Math.random()}
          title={item.snippet.title}
          channel={item.snippet.channelTitle}
          imgur={item.snippet.thumbnails.medium.url}
          videoId={item.id.videoId}
          des={item.snippet.description}
          navVideo={navVideo}
        />
      ))}
    </div>
  );
};

export default Right;
