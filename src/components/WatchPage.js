import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const searchedParam = searchParams.get( "v" );

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="m-5 p-2">
      <iframe
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/" + searchedParam}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
