import Button from "./Button";
const ButtonList = () => {
  const list = [
    "All",
    "Mixes",
    "News",
    "Comedy",
    "Movie",
    "Sports",
    "Cricket",
    "Music",
    "Motivation",
    "Stocks",
    "Live",
    "Computer Science",
    "Soccer",
    "ISRO",
  ];
  return (
    <>
      {list.map((item, index) => (
        <Button key={index} name={item} />
      ))}
    </>
  );
};
export default ButtonList;
