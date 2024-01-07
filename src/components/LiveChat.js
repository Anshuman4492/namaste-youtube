import { useState, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";
const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(20),
        })
      );
    }, 3000);
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className=" px-2 py-2 border border-slate-600 w-[350px] h-[500px] bg-slate-100 rounded-lg flex flex-col overflow-y-scroll">
        <div>
          {chatMessages.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))}
        </div>
        <form
          className="w-64 px-2 my-2"
          onSubmit={(e) => {
            e.preventDefault();
            // console.log(liveMessage);
            dispatch(
              addMessage({
                name: "Anshuman",
                message: liveMessage,
              })
            );
            setLiveMessage("");
          }}
        >
          <input
            className=" border border-pink-400 px-2 mx-2 rounded-lg"
            type="text"
            text={liveMessage}
            onChange={(e) => setLiveMessage(e.target.value)}
          />
          <button className="px-2 bg-green-200 rounded-lg">Send</button>
        </form>
      </div>
    </>
  );
};
export default LiveChat;
