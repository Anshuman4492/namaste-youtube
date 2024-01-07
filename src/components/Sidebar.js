import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="text-lg px-3 shadow-md w-auto bg-gray-100">
      <div className="grid grid-flow-row pt-5">
        <ul>
          <li>
            <Link to="/" className="flex hover:bg-slate-100 rounded-lg">
              {/* <img
                className="h-6 w-6"
                alt="home-icon"
                src="https://w7.pngwing.com/pngs/848/762/png-transparent-computer-icons-home-house-home-angle-building-rectangle-thumbnail.png"
              /> */}
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className="flex hover:bg-slate-100 rounded-lg">
              {/* <img
                className="h-6 w-6"
                alt="shorts-icon"
                src="https://qph.cf2.quoracdn.net/main-qimg-c74aff21c115bb4fec316d43686321f2"
              /> */}
              Shorts
            </Link>
          </li>
          <li>
            <Link to="/" className="flex hover:bg-slate-100 rounded-lg">
              {/* <img
                className="h-6 w-6"
                alt="subscriptions-icon"
                src="https://cdn.icon-icons.com/icons2/3237/PNG/512/menu_youtube_social_media_subs_subscription_icon_197393.png"
              /> */}
              Subscriptions
            </Link>
          </li>
        </ul>
      </div>
      <div className="grid grid-flow-row pt-5 pr-4">
        <Link to="/" className="flex hover:bg-slate-100 rounded-lg">
          You
          {/* <img
            className="my-2 h-3 w-2"
            alt="you"
            src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
          /> */}
        </Link>
        <ul className="p-2">
          <li>
            <Link to="/" className="flex hover:bg-slate-100 rounded-lg">
              {/* <img
                className="h-6 w-8"
                alt="your-channel"
                src="https://cdn.icon-icons.com/icons2/3237/PNG/512/channel_user_channel_user_youtube_video_media_social_media_icon_197285.png"
              /> */}
              Your Channel
            </Link>
          </li>
          <li>
            <Link to="/" className="flex hover:bg-slate-100 rounded-lg">
              {/* <img
                className="h-6 w-8"
                alt="history"
                src="https://w7.pngwing.com/pngs/988/206/png-transparent-computer-icons-history-icon-design-time-angle-text-logo-thumbnail.png"
              /> */}
              History
            </Link>
          </li>
          <li>
            <Link to="/" className="flex hover:bg-slate-100 rounded-lg">
              {/* <img
                className="h-6 w-6"
                alt="your-videos"
                src="https://static.thenounproject.com/png/3680569-200.png"
              /> */}
              Your Videos
            </Link>
          </li>
          <li>
            <Link to="/" className="flex hover:bg-slate-100 rounded-lg">
              {/* <img
                className="h-6 w-6"
                alt="watch-later"
                src="https://cdn0.iconfinder.com/data/icons/time-date/24/clock-4pm-512.png"
              /> */}
              Watch Later
            </Link>
          </li>
          <li>
            <Link to="/" className="flex hover:bg-slate-100 rounded-lg">
              {/* <img
                className="h-6 w-6"
                alt="downloads"
                src="https://cdn-icons-png.flaticon.com/512/62/62055.png"
              /> */}
              Downloads
            </Link>
          </li>
        </ul>
      </div>
      <div className="grid grid-flow-row pt-5 pr-4">
        <h1 className="hover:bg-slate-100">Subscriptions</h1>
        <ul className="p-2">
          <li>
            <Link to="/" className="flex hover:bg-slate-100 rounded-lg">
              Music
            </Link>
          </li>
          <li>
            <Link to="/" className="flex hover:bg-slate-100 rounded-lg">
              Sports
            </Link>
          </li>
          <li>
            <Link to="/" className="flex hover:bg-slate-300 rounded-lg">
              Gaming
            </Link>
          </li>
          <li>
            <Link to="/" className="flex hover:bg-slate-100 rounded-lg">
              Movies
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
