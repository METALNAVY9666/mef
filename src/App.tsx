import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TransparentSidebar from "./components/TransparentSideBar";
import Biographie from "./components/Biographie";
import GifBackground from "./components/GifBackground";

function App() {
  const [scene, setScene] = useState("home");

  return (
    <div className="d-flex flex-column min-vh-100">
      <GifBackground scene={scene} />

      <div className="d-flex flex-md-row flex-column w-100">
        <TransparentSidebar scene={scene} setScene={setScene} />

        <div className="flex-grow-1">
          {scene === "biographie" && <Biographie />}
        </div>
      </div>
    </div>
  );
}

export default App;
