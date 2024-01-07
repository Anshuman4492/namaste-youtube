import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEOS_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
const VideoContainer = () => {
  const [videosList, setVideosList] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_URL);
    const res = await data.json();
    // console.log(res.items);
    setVideosList(res.items);
  };
  return (
    <div className="flex flex-wrap">
      {/* <VideoCard videoInfo={videosList[0]} /> */}
      {videosList.map((videoInfo, id) => (
        <Link to={"/watch?v=" + videoInfo.id} key={id}>
          <VideoCard key={id} videoData={videoInfo} />
        </Link>
      ))}
    </div>
  );
};
export default VideoContainer;
