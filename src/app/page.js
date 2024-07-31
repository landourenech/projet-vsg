
import Image from "next/image";
import styles from './styles/Home.module.css'; // Assurez-vous que le fichier Home.module.css existe
import {Header} from "./composent/Header"; // Assurez-vous que le chemin est correct
import Search from "./search/page"
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Header />


  <div className="max-w-1200 flex gap-10 justify-center items-center flex-col">
   <div className={styles.Home}>
      <div className={styles.HomeCon}>
        <div className="w-1/2 flex flex-col  items-center justify-text-center">
        <h3 className={styles.H3}>Réussis tes études avec notre plateforme de cours en ligne!</h3>
          <p className={styles.P}> Des cours interactifs et adaptés au programme scolaire gabonais pour t'aider à exceller en classe et aux examens.</p>
          <a href="#" className={styles.Btn}>
                      <span className={styles.Text}>Inscris-toi maintenant</span>
                      <span  className={styles.Text} >Commence l'aventure</span>
                  </a> 
      
        </div>
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
                  <button type="submit" className={styles.Button}> <Link href="./search">sRechercher</Link> </button>
      </form>


      <button type="submit" className={styles.Button}> <Link href="./Payement">sRechercher</Link> </button>

    </div>
    <div className=" max-w-1200 flex justify-center items-center flex-wrap gap-4 ">
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



{/* cours */}

<div className="py-12 bg-gray-100" id="courses">
      <h1 className="text-4xl font-bold text-center mb-12">Nos cours préférés</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="relative bg-white border border-primary rounded-lg overflow-hidden shadow-lg">
            <div className="relative">
              <Image 
                src={`/image${i}.png`} 
                alt={`Course ${i}`} 
                height={500} 
                width={800} 
                className="w-full h-64 object-cover transition-transform transform hover:scale-110" 
              />
              <h3 className="absolute top-4 left-4 bg-white text-gray-800 px-4 py-2 text-xl font-semibold">Lycée </h3>
            </div>
            <div className="p-6">
              <h4 className="absolute top-[-2.5rem] right-4 bg-primary text-white w-16 h-16 flex items-center justify-center text-xl font-bold rounded-full">Tle D</h4>
              <p className="text-gray-600 mb-4">Date de publication 10/08/2024</p>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Science physique</h3>
              <div className="flex items-center mb-4">
                <i className="fas fa-star text-primary text-xl"></i>
                <i className="fas fa-star text-primary text-xl"></i>
                <i className="fas fa-star text-primary text-xl"></i>
                <i className="fas fa-star text-primary text-xl"></i>
                <i className="fas fa-star-half-alt text-primary text-xl"></i>
                <span className="ml-2 text-gray-600">(785)</span>
              </div>
              <div className="flex justify-between items-center border-t border-primary pt-4">
                <span className="text-gray-700 text-lg"><i className="far fa-bookmark text-primary pr-2"></i> 8 Leçon</span>
                <span className="text-gray-700 text-lg"><i className="far fa-clock text-primary pr-2"></i> 8h 25m 9s</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>


{/* a propos de nous  */}

<div className="p-8 max-w-1200 flex items-center flex-col m-20">
  <h1 className="text-3xl text-primary text-center mb-8">A propos de nous</h1>
  <div className="flex flex-wrap gap-8 items-center ">
    <figure className="relative flex-1 min-w-[10rem]">
      <Image src="/photo.jpg" alt="About Us" height={50} max-height={150} max-width={350}  width={150} className="w-96 h-96" />
      
    </figure>
    <div className="flex-1 min-w-[50rem] pl-24 pt-32">
      <h3 className="text-3xl text-primary">M. Steci MEBA
Enseignant de Physique-Chimie
Libreville – Gabon</h3>
      <p className="text-lg text-gray-700 py-4 leading-relaxed">Le blog que je vous propose est né d'une passion profonde que je souhaite partager non seulement avec mes collègues, mais aussi avec les apprenants du Gabon et d'ailleurs.

.</p>
      <p className="text-lg text-gray-700 py-4 leading-relaxed">L'idée de ce blog découle d'un constat fait durant mes années de lycéen et de mes premières années en tant qu'éducateur : la difficulté d'accéder à des ressources en Physique-Chimie conformes au programme en vigueur au Gabon, en dehors des cours</p>
      <a href="#" className="inline-block py-2 px-4 border-2 border-primary rounded relative overflow-hidden text-primary font-medium group">
        <span className="relative z-10">read more</span>
        <span className="absolute inset-0 text-secondary transform -translate-x-full group-hover:translate-x-0 transition-transform">read more</span>
      </a>
    </div>
  </div>
</div>


{/* nous contacter */}
    <div className="contact p-10 bg-gray-100 w-full max-w-1200 justify-center gap-8" id="contact">
    <h1 className="heading text-3xl font-bold text-center mb-8">Nous contacter</h1>

    <div className="row flex flex-col md:flex-row items-center justify-around gap-8">
        <div className="image mb-8 md:mb-0">
        <Image src="/contact.png" alt="Contact" width={700} height={700} className="w-full h-auto max-w-md mx-auto" />        </div>
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
   </>
  );
}
