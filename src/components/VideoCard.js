import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;
  return (
    <div className="w-64 p-2 m-2 shadow-md">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul className="list-none">
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount / 1000}k views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
