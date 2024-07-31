import styles from "./tp.module.css";

export default function Physique() {
  return (
    <div className={styles.physique}>
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

      <div className={styles.r}>
        <div className={styles.index}>
          <div className={styles.content}>
            <h1 className={styles.titre}>
              Bienvenu ASSEKO sur Vision science Gabon
            </h1>
            <p className={styles.para}>
              Votre tableau de bord a été personnalisé en fonction de vos préférence. Fixez-vous un nouvel objectif d appretissage pour cette semaine!
            </p>
          </div>

          <div className={styles.image}></div>
        </div>
        <div className={styles.cours}>
          <div className={styles.topCour}>
            <h1 className={styles.titre2}>La matiere et ses propriété</h1>
            <video
              src="../../../public/video.mp4"
              className={styles.video}
              autoPlay
            ></video>
          </div>
          <div className={styles.bottomCour}>
            <div className={styles.titre2}>Introduction à l électricité</div>
            <p className={styles.parag}>
            1.1 Qu est-ce que l électricité ?
            L électricité est une forme d énergie résultant de la présence et du flux de charges électriques. Elle peut se manifester sous forme de charge statique, de courant électrique et de champ électromagnétique.
            </p>
            <p className={styles.parag}>
            2. Les charges électriques
              Les charges électriques sont une propriété fondamentale de la matière. Il existe deux types de charges : positive et négative. <br />

            2.1 Attraction et répulsion
              Les charges de même signe se repoussent, tandis que les charges de signes opposés s attirent.


            </p>
            <p className={styles.parag}>
            3. Le courant électrique
Le courant électrique est le flux ordonné de charges électriques, généralement des électrons, à travers un conducteur. <br />

3.1 Intensité du courant
L intensité du courant électrique, mesurée en ampères (A), représente la quantité de charges électriques qui traversent une section du conducteur par unité de temps.
            </p>
            <p className={styles.parag}>
            Formule :

I = Q / t <br />

Où : <br />

I est l intensité du courant en ampères (A) <br />
Q est la charge électrique en coulombs (C) <br />
t est le temps en secondes (s)! <br />
            </p>

            <div className={styles.titre2}> A retenir</div>
            <p className={styles.parag}>
       
            </p>
            <p className={styles.parag}>
            L électricité est une forme d énergie qui nous entoure et que nous utilisons quotidiennement. Elle alimente nos appareils électroniques, éclaire nos maisons et fait fonctionner de nombreux mécanismes.
            </p>
          </div>
        </div>
        <div className={styles.commentaire}>
          <div className={styles.contentCom}>
            <h1 className={styles.titre2}>COMMENTAIRES</h1>

            <div className={styles.message}>
              <div className={styles.photo}></div>
              <div className={styles.messages}>
                <div className={styles.nom}>ASSEKO</div>
                <div className={styles.tex}>
                  Je n arrives pas a regarder la video
                </div>
              </div>
            </div>

            <div className={styles.message}>
              <div className={styles.photo}></div>
              <div className={styles.messages}>
                <div className={styles.nom}>Administrateur</div>
                
                <div className={styles.tex}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
                </div>
              </div>
            </div>
            <input
              className={styles.input}
              type="text"
              placeholder="    Laisser un commentaire"
            />
            <button className={styles.btn}>soumettre</button>
          </div>
        </div>
      </div>
    </div>
  );
}
