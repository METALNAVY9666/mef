import { isBrowser } from "react-device-detect";
import constructionIcon from "../assets/construction.png";

function Shop() {
  return (
    <div>
      <h1
        className="slide btn btn-lg bg-black text-white rounded"
        style={{
          fontWeight: isBrowser ? 800 : 600,
          marginTop: "10vh",
          marginLeft: "40vw",
          width: "60vw",

          fontSize: isBrowser ? 90 : 30,
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
          width: "40vw",
          backgroundColor: "white",
          marginTop: "5vh",
          borderRadius: "5%",
        }}
      />
    </div>
  );
}

export default Shop;
