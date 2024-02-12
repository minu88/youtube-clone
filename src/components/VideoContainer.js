import React from "react";
import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    getVideos();


    async function getVideos() {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json = await data.json();
      // console.log(json.items);
      setVideoData(json.items);
    }
  }, []);

  

  return (
    <div className="flex flex-wrap">
      {videoData.map(( video ) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard  info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
