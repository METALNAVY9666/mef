import "./Biographie.css";
import { isBrowser } from "react-device-detect";

import { useEffect, useRef } from "react";
import "./Biographie.css";
export default function Biographie() {
  const titles = useRef<
    (HTMLHeadingElement | HTMLLIElement | HTMLButtonElement | null)[]
  >([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    titles.current.forEach((title) => {
      if (title) observer.observe(title);
    });

    return () => {
      titles.current.forEach((title) => {
        if (title) observer.unobserve(title);
      });
    };
  }, []);

  return (
    <div
      style={{
        marginLeft: "25vw",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
      className="w-75 h-100"
    >
      <div
        className={isBrowser ? "pe-5" : "pe-2"}
        style={{
          marginLeft: isBrowser ? "7vw" : "15vw",
          fontWeight: 800,
          width: isBrowser ? "68vw" : "60vw",
        }}
      >
        <div className="artist-profile text-white bio-text">
          <h1
            style={{
              fontWeight: isBrowser ? 1000 : 700,
              fontSize: isBrowser ? 200 : 75,
            }}
          >
            M.E.F
          </h1>
          <br />
          <div>
            <h4
              style={{ fontWeight: 800, fontSize: isBrowser ? 50 : 30 }}
              ref={(el) => (titles.current[0] = el)}
              className="fade-in mb-5"
            >
              Une voix
            </h4>
            <h4
              style={{ fontWeight: 800, fontSize: isBrowser ? 50 : 30 }}
              ref={(el) => (titles.current[1] = el)}
              className="fade-in mb-5"
            >
              Un flow hors pair
            </h4>
            <h4
              style={{ fontWeight: 800, fontSize: isBrowser ? 50 : 30 }}
              ref={(el) => (titles.current[2] = el)}
              className="fade-in mb-5"
            >
              Des textes poétiques et percutants
            </h4>
            <h4
              style={{ fontWeight: 800, fontSize: isBrowser ? 50 : 30 }}
              ref={(el) => (titles.current[3] = el)}
              className="fade-in"
            >
              Un personnage et un univers unique
            </h4>
          </div>
          <br />
          <br />
          <section>
            <h3
              className="mt-5 mb-3 fade-in"
              style={{ fontWeight: 800, fontSize: isBrowser ? 50 : 30 }}
              ref={(el) => (titles.current[4] = el)}
            >
              Parcours de l’artiste
            </h3>
            <p ref={(el) => (titles.current[18] = el)} className="fade-in my-5">
              M.E.F (de son vrai nom Méftah HADJAB) est né le 27 janvier 1984 et
              a grandi dans le quartier de Beauval à Meaux en Seine-et-Marne.
            </p>
            <p ref={(el) => (titles.current[19] = el)} className="fade-in my-5">
              Fils d’une famille de 8 enfants, d’un père ouvrier et d’une mère
              au foyer, il découvre très tôt son amour pour l’écriture et écrit
              ses premiers textes de rap dès l’âge de 10 ans. Alors que nombre
              de ses amis tombent dans la délinquance, il se bat pour honorer
              l’éducation de ses parents, qui lui enseignent le respect et
              l’importance de l’intégration en France.
            </p>
            <p ref={(el) => (titles.current[20] = el)} className="fade-in my-5">
              Il épouse des études de littérature à la Sorbonne en 2005 tout en
              continuant sa pratique quotidienne du rap (freestyles,
              enregistrements studio, quelques scènes et émissions radio). En
              2009, il perd son grand frère de manière subite et lui rendra
              hommage dans une chanson intitulée « N’attends pas ». En 2011, il
              est atteint d’une leucémie, qui lui vaudra de passer 14 mois à
              l’Hôpital Saint-Louis. Ces expériences humaines ont profondément
              marqué son art, comme en témoignent ses albums « Les anges aux
              blouses blanches » et « Une petite pilule de courage ».
            </p>
            <p ref={(el) => (titles.current[21] = el)} className="fade-in my-5">
              Aujourd’hui, M.E.F se consacre intégralement à sa famille et à sa
              passion : le Rap.
            </p>
          </section>
          <section>
            <h3
              className="mt-5 mb-3 fade-in"
              style={{ fontWeight: 800, fontSize: isBrowser ? 50 : 30 }}
              ref={(el) => (titles.current[5] = el)}
            >
              Savoir-faire
            </h3>
            <p ref={(el) => (titles.current[6] = el)} className="fade-in my-5">
              Avec 25 ans d’écriture et de pratique, M.E.F maîtrise une
              technicité inégalée dans le rap français. Son style allie le
              classique du rap des années d'or (1995-2000) avec une modernité de
              flow unique. Ses textes, à la fois profonds et poétiques,
              véhiculent un message d’unité et de respect.
            </p>
            <p ref={(el) => (titles.current[7] = el)} className="fade-in my-5">
              M.E.F crée aussi des univers riches autour de sa musique, comme en
              témoignent les morceaux « Bienvenue dans mon espace » et « Le M.
              pour le E. pour le F. ».
            </p>
          </section>
          <section>
            <h3
              className="mt-5 mb-3 fade-in"
              style={{ fontWeight: 800, fontSize: isBrowser ? 50 : 30 }}
              ref={(el) => (titles.current[8] = el)}
            >
              Le projet
            </h3>
            <p ref={(el) => (titles.current[9] = el)} className="fade-in my-5">
              M.E.F propose un rap digne des années d'or avec des décors
              cinématographiques uniques. Il s'adresse à deux publics principaux
              :
            </p>
            <ul>
              <li
                ref={(el) => (titles.current[10] = el)}
                className="fade-in my-5"
              >
                Les jeunes adultes (25-40 ans) nostalgiques de l’âge d’or du rap
                français.
              </li>
              <li
                ref={(el) => (titles.current[11] = el)}
                className="fade-in my-5"
              >
                Un public plus large, incluant des adultes (40-50 ans) attirés
                par un rap littéraire et des adolescents séduits par l’humour et
                les mises en scène.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
