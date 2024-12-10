import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TransparentSidebar from "./components/TransparentSideBar";
import Biographie from "./components/Biographie";
import GifBackground from "./components/GifBackground";
import HomeBackground from "./components/HomeBackground";
import { Albums } from "./components/Albums";
import Shop from "./components/Shop";

function App() {
  const [scene, setScene] = useState("home");

  if (scene === "home")
    return (
      <>
        <HomeBackground setScene={setScene} />
      </>
    );
  return (
    <div className="d-flex flex-column min-vh-100">
      <GifBackground scene={scene} />

      <div
        className="d-flex flex-md-row flex-column w-100"
        style={{ zIndex: 1 }}
      >
        <TransparentSidebar scene={scene} setScene={setScene} />

        <div className="flex-grow-1">
          {["biographie", "bio"].includes(scene) && <Biographie />}
          {["shop", "boutique"].includes(scene) && <Shop />}
          {scene === "albums" && <Albums />}
        </div>
      </div>
    </div>
  );
}

export default App;
