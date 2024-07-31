import styles from "./dashboard.module.css";

export default function Dash() {
  return (
    <div className={styles.Main}>
      <div className={styles.mainL}>
        <div className={styles.topL}>
          <ul className={styles.liste}>
            <li className={styles.i}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-building"
                viewBox="0 0 16 16"
              >
                <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z" />
                <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3z" />
              </svg>{" "}
              <p>Dashbord</p>
            </li>
            <li className={styles.i}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-bell-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
              </svg>
              <p>Notification</p>
            </li>
            <li className={styles.i}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chat-right-fill"
                viewBox="0 0 16 16"
              >
                <path d="M14 0a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
              </svg>
              <p>Message</p>
            </li>
          </ul>
        </div>
        <div className={styles.bottomL}>
          <ul className={styles.liste}>
            <li className={styles.i}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-gear"
                viewBox="0 0 16 16"
              >
                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
              </svg>
              <p>Parametre</p>
            </li>
            <li className={styles.i}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-info-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
              </svg>
              <p>info</p>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.mainR}>
        <div className={styles.Rtop}>
          <div className={styles.contentT}>
            <div className={styles.cTt}>
              <h1 className={styles.titre}>
                Bienvenu ASSEKO sur Vision science Gabon
              </h1>
              <p className={styles.para}>
              Votre tableau de bord a été personnalisé en fonction de vos préférences.
              Fixez-vous un nouvel objectif d'apprentissage pour cette semaine!
                
              </p>
              <input
                className={styles.input}
                type="text"
                placeholder="  entrer votre recherche"
              />
              <button className={styles.btn}> SIGN UP</button>
            </div>
            <video
              src="../../../public/video.mp4"
              muted
              playsinline
              autoplay
              controls
              className={styles.video}
            ></video>
          </div>
        </div>
        <div className={styles.Rmiddle}>
          <div className={styles.card}>
            <div className={styles.img}></div>
            <p className={styles.tr}>
            De la théorie à l'expérience : explorons ensemble le monde physique.
            </p>
            <p className={styles.tre}>
            La physique est la science qui étudie les phénomènes naturels, de l'infiniment petit à l'infiniment grand
            </p>
            <button className={styles.btn2}>commencé</button>
          </div>
          <div className={styles.card}>
            <div className={styles.img2}></div>
            <p className={styles.tr}>
              L'analyse, une exploration en profondeur des concepts mathématiques
            </p>
            <p className={styles.tre}>
            Les mathématiques sont une science qui étudie les quantités, les structures, les espaces et les changements.
            </p>
            <button className={styles.btn2}>commencé</button>
          </div>
          <div className={styles.card}>
            <div className={styles.img3}></div>
            <p className={styles.tr}>
             
            De la graine au fruit, le cycle de la vie végétale
            </p>
            <p className={styles.tre}>
            La SVT est une discipline scientifique qui étudie le vivant et son environnement. Elle englobe un large spectre de domaines.
            </p>
            <button className={styles.btn2}>commencé</button>
          </div>
        </div>
        <div className={styles.Rbottom}>
          <div className={styles.head}>
            <h1 className={styles.titre}>Programme de TP</h1>
            <p className={styles.para}>
            Les travaux pratiques (TP) sont une composante essentielle de l'apprentissage,<br /> particulièrement dans les domaines scientifiques et techniques. Ils permettent <br /> de mettre en pratique les connaissances théoriques acquises en cours .
            </p>
          </div>
          <div className={styles.contentF}>
            <svg
              width="33"
              height="273"
              viewBox="0 0 33 273"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="15.5"
                y="0.5"
                width="2"
                height="23"
                fill="black"
                stroke="black"
              />
              <circle cx="16.5" cy="39.5" r="7.5" fill="black" />
              <rect
                x="15.5"
                y="55.5"
                width="2"
                height="217"
                fill="black"
                stroke="black"
              />
            </svg>
            <div className={styles.l}>
              <h1 className={styles.titre}>Premier ...trimestre </h1>
              <ul>
                <li className={styles.liste}>1/La matiere et ses propriété</li>
                <li className={styles.liste}>
                  2/les mélanges et les solutions
                </li>
                <li className={styles.liste}>
                  3/les matériaux et les propriétés
                </li>
              </ul>
              <button className={styles.btn}>commencé</button>
            </div>
          </div>
          <div className={styles.contentF}>
            <svg
              width="33"
              height="273"
              viewBox="0 0 33 273"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="15.5"
                y="0.5"
                width="2"
                height="23"
                fill="black"
                stroke="black"
              />
              <circle cx="16.5" cy="39.5" r="7.5" fill="black" />
              <rect
                x="15.5"
                y="55.5"
                width="2"
                height="217"
                fill="black"
                stroke="black"
              />
            </svg>
            <div className={styles.l}>
              <h1 className={styles.titre}>Deuxieme trimestre</h1>
              <ul>
                <li className={styles.liste}>1/La matiere et ses propriété</li>
                <li className={styles.liste}>
                  2/les mélanges et les solutions
                </li>
                <li className={styles.liste}>
                  3/les matériaux et les propriétés
                </li>
              </ul>
              <button className={styles.btn}>commencé</button>
            </div>
          </div>
          <div className={styles.contentF}>
            <svg
              width="33"
              height="273"
              viewBox="0 0 33 273"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="15.5"
                y="0.5"
                width="2"
                height="23"
                fill="black"
                stroke="black"
              />
              <circle cx="16.5" cy="39.5" r="7.5" fill="black" />
              <rect
                x="15.5"
                y="55.5"
                width="2"
                height="217"
                fill="black"
                stroke="black"
              />
            </svg>
            <div className={styles.l}>
              <h1 className={styles.titre}>Troisieme trimestre</h1>
              <ul>
                <li className={styles.liste}>1/La matiere et ses propriété</li>
                <li className={styles.liste}>
                  2/les mélanges et les solutions
                </li>
                <li className={styles.liste}>
                  3/les matériaux et les propriétés
                </li>
              </ul>
              <button className={styles.btn}>commencé</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
