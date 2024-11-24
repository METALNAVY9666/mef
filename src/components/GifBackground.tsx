import { useEffect, useState } from "react";
import communion_musicale from "../assets/communion_musicale.webm";
import decor_fade from "../assets/decor_fade.webm";
// import profit_image from "../assets/profit_image.webm";
// import trou_noir from "../assets/trou_noir.webm";

const scenes: Record<string, string> = {
  albums: communion_musicale,
  biographie: decor_fade,
};

interface GifBackgroundProps {
  scene: string;
}

export default function GifBackground({ scene }: GifBackgroundProps) {
  const [src, setSrc] = useState(scenes[scene]);

  useEffect(() => {
    setSrc(scenes[scene]);
  }, [scene]);

  return (
    <>
      <video
        autoPlay
        muted
        loop
        style={{
          position: "fixed",
          right: 0,
          bottom: 0,
          minHeight: "100%",
          minWidth: "100%",
          zIndex: 0,
        }}
        key={src}
      >
        <source src={src} type="video/webm" />
      </video>
    </>
  );
}