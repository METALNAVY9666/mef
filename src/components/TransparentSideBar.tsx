import { BrowserView, MobileView } from "react-device-detect";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface MenuButtonProps {
  scene: string;
  bigText: string;
  setScene: Dispatch<SetStateAction<string>>;
  setBigText: Dispatch<SetStateAction<string>>;
  getScene: string; // != scene : ceci est la variable scene
}

interface TransparentSidebarProps {
  scene: string; // variable correspondante à setScene
  setScene: Dispatch<SetStateAction<string>>;
}

function MenuButton({
  scene,
  bigText,
  setScene,
  setBigText,
  getScene,
}: MenuButtonProps) {
  const getButtonClassName = (color: string) => {
    return "btn btn-lg bg-transparent text-" + color + " rounded glitch fw-4";
  };

  const [buttonClassName, setButtonClassName] = useState(
    getButtonClassName("secondary")
  );

  useEffect(() => {
    if (scene === getScene) setButtonClassName(getButtonClassName("white"));
    else setButtonClassName(getButtonClassName("secondary"));
  }, [getScene]);

  return (
    <button
      className={buttonClassName}
      onClick={() => {
        setScene(scene);
        setBigText(bigText);
      }}
    >
      <div className="h3" style={{ fontWeight: 800 }}>
        {scene.toUpperCase()}
      </div>
    </button>
  );
}

function TransparentSidebar({ scene, setScene }: TransparentSidebarProps) {
  const [bigText, setBigText] = useState("");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <>
      <BrowserView>
        <div
          className="position-fixed top-0 start-0 h-100 ps-5"
          style={{
            width: "20%", // Largeur de la sidebar
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Couleur blanche semi-transparente
            backdropFilter: "blur(10px)", // Effet de flou
            zIndex: 1030, // S'assurer que la sidebar est devant le contenu
          }}
        >
          <div
            className="container d-flex justify-content-center align-items-center"
            style={{ height: "100vh" }}
          >
            <ul className="list-unstyled  ">
              <li>
                <MenuButton
                  scene="albums"
                  bigText="Découvrez les albums de M.E.F"
                  setScene={setScene}
                  setBigText={setBigText}
                  getScene={scene}
                />
              </li>
              <li>
                <MenuButton
                  scene="biographie"
                  bigText="Biographie du rappeur Underground"
                  setScene={setScene}
                  setBigText={setBigText}
                  getScene={scene}
                />
              </li>
              <li>
                <h2
                  className="mt-5 border border-danger text-white"
                  style={{ fontWeight: 700 }}
                >
                  {bigText}
                </h2>
              </li>
            </ul>
          </div>
        </div>
      </BrowserView>
      <MobileView>
        {showMobileMenu ? null : (
          <button
            className="btn btn-lg position-fixed top-0 start-0 h-100 ps-5 glitch"
            onClick={() => {
              setShowMobileMenu(!showMobileMenu);
            }}
          >
            BTN
          </button>
        )}
      </MobileView>
    </>
  );
}

export default TransparentSidebar;
