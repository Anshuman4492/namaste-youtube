import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_URL } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  const getSuggestions = async () => {
    // console.log("API- Call " + searchQuery);
    const data = await fetch("https://proxy.cors.sh/"+YOUTUBE_SEARCH_URL + searchQuery,{
        headers: {
        'x-cors-api-key': 'temp_2a3badd82f280d29fad3d3b63a46e0ce'
        }
      })
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };
  // console.log(searchQuery);
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 h-18 shadow-md">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="Hamburger"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
        />
        <img
          className="h-8 mx-3"
          alt="Youtube-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png"
        />
      </div>
      <div className="col-span-10 px-40">
        <div>
          <input
            className="w-1/2 p-1 px-2 border border-gray-400 rounded-l-xl "
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className=" px-4 py-1 border border-gray-400 rounded-r-xl bg-gray-2 00">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white w-[23rem] px-3 border border-gray-200 shadow-lg rounded-lg">
            <ul>
              {suggestions.map((suggestion, index) => (
                <li key={index} className="py-2 shadow-sm hover:bg-slate-100">
                  🔍 {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <img
          className="h-8 col-span-1 border border-black rounded-full"
          alt="user"
          src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
        />
      </div>
    </div>
  );
};
export default Head;
