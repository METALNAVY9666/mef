import { isBrowser } from "react-device-detect";
import "./Albums.css";
import blousesBlanches from "../assets/covers/blouses_blanches.jpg";
import espritsConnectes2 from "../assets/covers/esprits_connectes_2.jpg";
import espritsConnectes1 from "../assets/covers/esprits_connectes_1.jpg";
import war_tape from "../assets/covers/war_tape.jpg";
import respect from "../assets/covers/respect.jpg";
import cetait_ecrit from "../assets/covers/cetait_ecrit.jpg";
import { useState } from "react";

const playlists = [
  [
    "https://www.youtube.com/watch?v=D65WO8CTo6U&list=PLemKURMG_MkMMDSoTOlfMRSPpNoFKNzTo",
    "War Tape Volume II - 2021",
    war_tape,
  ],
  [
    "https://www.youtube.com/watch?v=tKdkZlMosUw&list=PLemKURMG_MkPKvDEXuPL6aCYaL4M-SaE-",
    "War Tape Volume I - 2020",
    war_tape,
  ],
  [
    "https://www.youtube.com/watch?v=DB35kmGIuxE&list=PLemKURMG_MkMa_XLENshiO7Ggd235tGIY",
    "Respect - 2019",
    respect,
  ],
  [
    "https://www.youtube.com/watch?v=QJd4lqjNWBo&list=PLemKURMG_MkMV6BTem_rfi3t4BkJ5rsUQ",
    "Esprits Connectés II - 2017",
    espritsConnectes2,
  ],
  [
    "https://www.youtube.com/watch?v=LdxpujVgZlU&list=PLemKURMG_MkMDS-8y44OL20_GE0YFV8IQ",
    "Esprits Connectés I - 2014",
    espritsConnectes1,
  ],
  [
    "https://youtube.com/playlist?list=PLemKURMG_MkOmpmfiwMLzeb_gkhobDNwp",
    "Les anges aux blouses blanches - 2013",
    blousesBlanches,
  ],
  [
    "https://www.youtube.com/watch?v=LWRxDPeLSqs&list=PLemKURMG_MkO2Iq6rbKFoZ6llitp41tfm",
    "C'était écrit - 2009",
    cetait_ecrit,
  ],
];

interface AlbumCoverProps {
  url: string;
  title: string;
  src: string;
}

const AlbumCover = ({ url, title, src }: AlbumCoverProps) => {
  const [hover, setHover] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <div style={{}}>
        <h1
          style={{
            fontWeight: isBrowser ? 800 : 600,
            textAlign: "center",
            color: "white",
            WebkitTextStroke: isBrowser ? "2px black" : "1px black",
            marginTop: "5vh",
          }}
        >
          {title}
        </h1>
        <img
          src={src}
          style={{
            borderRadius: "10px",
            marginTop: "1vh",
            marginLeft: isBrowser ? "17vw" : "17vw",
            width: "20vw",
            height: "20vw",
            objectFit: "cover",
            transform: `${hover ? "scale(1.1)" : "scale(1)"} ${
              loaded ? "translateX(0)" : "translateX(-50px)"
            }`,
            transition: `transform 0.2s ease-in-out, opacity 0.5s ease-in-out`,
            opacity: loaded ? 1 : 0,
            cursor: "pointer",
            boxShadow: "0 8px 8px rgba(0, 0, 0, 0.8)",
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onLoad={() => setLoaded(true)}
          onClick={() => window.open(url, "_blank")}
        />
      </div>
    </>
  );
};

export function Albums() {
  return (
    <div
      className="albums-grid mt-5"
      style={{ marginLeft: isBrowser ? "42vw" : "40vw" }}
    >
      <h1
        style={{
          marginLeft: "6vw",
          fontWeight: 800,
          fontSize: isBrowser ? 80 : 30,
          color: "white",
          WebkitTextStroke: isBrowser ? "3px black" : "1px black",
        }}
        className="my-5"
      >
        Discographie
      </h1>
      {playlists.map(([url, title, src]) => (
        <AlbumCover url={url} title={title} src={src} />
      ))}
      <button
        className="btn btn-lg my-5 bg-dark text-white border"
        style={{
          marginLeft: isBrowser ? "13vw" : "8vw",
          fontWeight: isBrowser ? 800 : 600,
          fontSize: isBrowser ? 50 : 30,
        }}
        onClick={() =>
          window.open("https://www.youtube.com/@serrure100", "_blank")
        }
      >
        Voir plus
      </button>
    </div>
  );
}
