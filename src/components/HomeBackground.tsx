import { Dispatch, SetStateAction, useState } from "react";
import decor_fade from "../assets/decor_fade.mp4";
import "./HomeBackground.css";
import { isBrowser } from "react-device-detect";

interface HomeBackgroundProps {
  setScene: Dispatch<SetStateAction<string>>;
}

export default function HomeBackground({ setScene }: HomeBackgroundProps) {
  const [homeTitleClass, setHomeTitleClass] = useState("home-title");
  const [homeBtnClass, setHomeBtnClass] = useState(
    "btn btn-lg bg-white text-back slide-top"
  );

  const handleDiscoverClick = () => {
    setTimeout(() => {
      isBrowser ? setScene("biographie") : setScene("bio");
    }, 1500);
    setHomeTitleClass("home-title scale-up-center");
    setHomeBtnClass("btn btn-lg bg-white text-back slide-bottom");
  };
  return (
    <div className="home-body">
      <video autoPlay muted loop playsInline className="home-video ">
        <source src={decor_fade} type="video/mp4" />
      </video>
      <h2 className={homeTitleClass}>M.E.F</h2>
      <div className="btn-container">
        <div className="reset ">
          <button className={homeBtnClass} onClick={handleDiscoverClick}>
            DÉCOUVRIR
          </button>
        </div>
      </div>
    </div>
  );
}
