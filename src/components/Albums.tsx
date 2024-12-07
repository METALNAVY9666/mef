import { isBrowser } from "react-device-detect";
import "./Albums.css";

const playlists = [
  [
    "https://youtube.com/playlist?list=PLemKURMG_MkOmpmfiwMLzeb_gkhobDNwp",
    "Les anges aux blouses blanches - 2013",
  ],
];

export function Albums() {
  return (
    <div
      className="albums-grid"
      style={isBrowser ? { marginLeft: "50vw" } : {}}
    >
      {playlists.map(([url, title]) => (
        <a href={url} target="_blank" rel="noopener noreferrer" key={url}>
          <div className="playlist-thumbnail">
            <img
              src={`https://img.youtube.com/vi/${url.split("list=")[1]}/0.jpg`}
              alt={title}
            />
            <p>{title}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
