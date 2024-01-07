const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center">
      <img
        className="py-2 h-10 col-span-1"
        alt="user"
        src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};
export default ChatMessage;
