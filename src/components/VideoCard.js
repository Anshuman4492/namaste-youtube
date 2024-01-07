const VideoCard = ({ videoData }) => {
  const { snippet, statistics } = videoData;
  const { channelId, channelTitle, publishedAt, title, thumbnails } = snippet;
  const { viewCount } = statistics;
  function nFormatter(num, digits) {
    const lookup = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "k" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "G" },
      { value: 1e12, symbol: "T" },
      { value: 1e15, symbol: "P" },
      { value: 1e18, symbol: "E" }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup.slice().reverse().find(function(item) {
      return num >= item.value;
    });
    return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
  }
  return (
    <div className="m-3 p-3 shadow-lg w-72 h-80" onClick={() => {}}>
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold">{title}</li>
        <li>{channelTitle}</li>
        <li>{nFormatter(viewCount,2)} views</li>
      </ul>
    </div>
  );
};
export default VideoCard;
