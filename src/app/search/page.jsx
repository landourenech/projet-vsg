import Image from 'next/image';
import styles from './search.module.css';
import {Header} from "./../composent/Header";

export const Search = () => {

  return (
    <>

     <div className="p-32 ">
     <Header />  
          <div className=
      {styles.Search}>
      <form className={styles.SearchForm} id="searchForm">
                  <input type="text" id="searchInput" placeholder="Rechercher un cours..." className={styles.Input} />
                  <select id="levelSelect" className={styles.Select}>
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
                  <input type="date" id="dateInput" className={styles.Input} />
                  <button type="submit" className={styles.Button}>Rechercher</button>
      </form>
      
 

        <div className="py-12 bg-gray-100" id="courses">
      <h1 className="text-4xl font-bold text-center mb-12">Resultat de la rechercher</h1>
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
    </div>
     </div>
    </>
  );
};

export default Search;









