import React, { useState, useEffect } from "react";
import Youtube from "./component/youtube/Youtube";
import axios from "axios";
import "./App.css";

function App() {
  // const [test, setTest] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await axios("https://www.googleapis.com/youtube/v3/search", {
  //       params: {
  //         part: "id,snippet",
  //         type: "video",
  //         q: "為這美好的世界獻上祝福",
  //         maxResults: 20,
  //         key: "AIzaSyCNLpmNmFCzyyI--IfVIqH4DGqMLERZFRg",
  //       },
  //     });
  //     const result = await data.data;
  //     const youtubeItems = await result.items;
  //     setTest(youtubeItems);
  //   };
  //   fetchData();
  // }, []);
  // console.log(test);
  return (
    <div className="App">
      <Youtube />
    </div>
  );
}

export default App;
