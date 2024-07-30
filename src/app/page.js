
import Image from "next/image";
import styles from './styles/Home.module.css';
// import styles from `./styles/Search.modele.css`;
// import { Header } from "./composent/Header";

export default function Home() {
  return (
  <div className={styles.contenu}>
    <div className={styles.Home}>
      <div className={styles.HomeCon}>
        <h3 className={styles.H3}>Réussis tes études avec notre plateforme de cours en ligne!</h3>
          <p className={styles.P}> Des cours interactifs et adaptés au programme scolaire gabonais pour t'aider à exceller en classe et aux examens.</p>
          <a href="#" className={styles.Btn}>
                      <span className={styles.Text}>Inscris-toi maintenant</span>
                      <span  className={styles.Text} >Commence l'aventure</span>
                  </a> 
      
      </div>
        <div className={styles.image}>
        <img src="../../public/home.jpg" alt="About Us" height={500} width={800} />

        </div>
    
    </div>

    {/* bare de rechercher */}

    <div className={styles.Search}>
      <form className={styles.SearchForm} id="searchForm">
                  <input type="text" id="searchInput" placeholder="Rechercher un cours..." className={styles.Input} />
                  {/* <select id="levelSelect" className={styles.Select}>
                    <option value="">Tous les niveaux</option>
                    <option value="6ème">6ème</option>
                    <option value="5ème">5ème</option>
                    <option value="4ème">4ème</option>
                    <option value="3ème">3ème</option>
                    <option value="2nde">2nde</option>
                    <option value="1ère">1ère</option>
                    <option value="Terminale">Terminale</option>
                  </select>
                  <select id="contentTypeSelect" className={styles.Select}>
                    <option value="">Tous les types de contenu</option>
                    <option value="cours">Cours</option>
                    <option value="exercice">Exercices</option>
                    <option value="devoir">Devoirs</option>
                    <option value="td">TD</option>
                    <option value="examen">Examens</option>
                  </select>
                  <input type="date" id="dateInput" className={styles.Input} /> */}
                  <button type="submit" className={styles.Button}>Rechercher</button>
      </form>


      
    </div>
    <div className="flex justify-center items-center flex-wrap gap-4 ">
    <button className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center transition-transform transform hover:scale-105 hover:bg-green-500 hover:shadow-lg">
        6ème
    </button>
    <button className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center transition-transform transform hover:scale-105 hover:bg-green-500 hover:shadow-lg">
        5ème
    </button>
    <button className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center transition-transform transform hover:scale-105 hover:bg-green-500 hover:shadow-lg">
        4ème
    </button>
    <button className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center transition-transform transform hover:scale-105 hover:bg-green-500 hover:shadow-lg">
        3ème
    </button>
    <button className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center transition-transform transform hover:scale-105 hover:bg-green-500 hover:shadow-lg">
        2nde
    </button>
    <button className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center transition-transform transform hover:scale-105 hover:bg-green-500 hover:shadow-lg">
        1ère
    </button>
    <button className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center transition-transform transform hover:scale-105 hover:bg-green-500 hover:shadow-lg">
        Tle C
    </button>
    <button className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center transition-transform transform hover:scale-105 hover:bg-green-500 hover:shadow-lg">
        Tle D
    </button>
</div>





{/* a propos de nous  */}

    <div className={styles.about}>
    <h1 className={styles.heading}>A propos de nous</h1>
      <div className={styles.container}>
        <figure className={styles.aboutImage}>
          <Image src="/images/about.jpg" alt="About Us" height={500} width={800} />
          <Image src="/images/about-1.jpg" alt="About Us Secondary" className={styles.aboutImg} height={250} width={400} />
        </figure>
        <div className={styles.aboutContent}>
          <h3>18 years of experience</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus aut impedit expedita aliquam provident quod excepturi minus. Similique eveniet fugiat doloribus nisi saepe cupiditate iusto itaque totam! Officia, enim qui.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptatum ipsa quod dolores officia at excepturi quas numquam vero dolorem vitae veritatis quisquam fugit voluptates doloribus, id pariatur in ipsam?</p>
          <a href="#" className={styles.btn}>
            <span className={styles.text}>read more</span>
            <span className={`${styles.text} ${styles.text2}`} aria-hidden="true">read more</span>
          </a>
        </div>
      </div>
    </div>



    <div className="contact py-12 bg-gray-100" id="contact">
    <h1 className="heading text-3xl font-bold text-center mb-8">Nous contacter</h1>

    <div className="row flex flex-col md:flex-row items-center justify-around">
        <div className="image mb-8 md:mb-0">
            <img src="../../public/contact.png" alt="" className="w-full h-auto max-w-md mx-auto"/>
        </div>
        <form action="" className="w-full max-w-lg bg-white p-8 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">Envoyer nous un message</h3>
            <input type="text" placeholder="Nom" className="box w-full p-3 mb-4 border border-gray-300 rounded-lg"/>
            <input type="email" placeholder="Email" className="box w-full p-3 mb-4 border border-gray-300 rounded-lg"/>
            <input type="number" placeholder="Numero de téléphone" className="box w-full p-3 mb-4 border border-gray-300 rounded-lg"/>
            <textarea placeholder="Message" className="box w-full p-3 mb-4 border border-gray-300 rounded-lg" cols="30" rows="10"></textarea>
            <a href="#" className="btn inline-block bg-green-500 text-white px-6 py-3 rounded-lg text-center font-semibold transition hover:bg-blue-500 hover:text-white">
                <span className="text text-1">Envoyer le message</span>
                <span className="text text-2 hidden">Envoyer le message</span>
            </a>
        </form>
    </div>
</div>


  </div>
  );
}
