import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";
const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex flex-col ">
      <div className="flex">
        <iframe
          className="mx-5"
          width="1000"
          height="500"
          src={
            "https://www.youtube.com/embed/" +
            searchParams.get("v") +
            "?autoplay=1"
          }
          allow="autoplay"
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <LiveChat />
      </div>
      <CommentContainer />
    </div>
  );
};
export default WatchPage;
