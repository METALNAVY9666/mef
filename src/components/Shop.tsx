import constructionIcon from "../assets/construction.png";

function Shop() {
  return (
    <div>
      <h1
        className="slide btn btn-lg bg-black text-white rounded"
        style={{
          fontWeight: 800,
          marginTop: "10vh",
          marginLeft: "45vw",
          fontSize: 90,
        }}
      >
        En construction
      </h1>
      <style>
        {`
        @keyframes slideFadeIn {
        0% {
          opacity: 0;
          transform: translateX(-10%);
        }
        100% {
          opacity: 1;
          transform: translateX(0);
        }
        }

        .slide {
        animation: slideFadeIn 1s ease-in-out;
        }
      `}
      </style>
      <img
        className="slide"
        src={constructionIcon}
        alt="En construction"
        style={{
          marginLeft: "50vw",
          backgroundColor: "white",
          marginTop: "5vh",
          borderRadius: "5%",
        }}
      />
    </div>
  );
}

export default Shop;
