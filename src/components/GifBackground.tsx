import { useEffect, useState } from "react";
import communion_musicale from "../assets/communion_musicale.mp4";
import decor_fade from "../assets/decor_fade.mp4";
import profit_image from "../assets/profit_image.mp4";
import trou_noir from "../assets/trou_noir.mp4";

const scenes: Record<string, string> = {
  albums: communion_musicale,
  biographie: decor_fade,
  bio: decor_fade,
  shop: profit_image,
  boutique: profit_image,
  contact: trou_noir,
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
        playsInline
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
        <source src={src} type="video/mp4" />
      </video>
    </>
  );
}
