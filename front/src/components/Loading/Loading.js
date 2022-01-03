import loading from "../../assets/imgs/loadingGif.gif";

const Loading = () => {
  const heightScreen =
    Number(document.querySelector(".loadingGif")?.offsetTop) * 0.1067;
  return (
    <div
      className="loadingGif"
      style={{ height: `${Number(100 - heightScreen)}vh` }}
    >
      <img src={loading} alt="loading" />
    </div>
  );
};

export default Loading;
