import Image from 'next/image';
import styles from './header.module.css';

export const Header = () => {

  return (
    <>
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md flex justify-between items-center p-8">
      <a href="#" className="text-2xl font-bold text-black">
        <i className="fas fa-book text-primary mr-2"></i>Vision Science Gabon
      </a>
      <img className={styles.menude} src="/public/menu.svg" alt="" />
      <nav className="flex space-x-8">
        {['Accueil', 'A propos', 'courses', 'teacher', 'contact'].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className="text-lg text-black hover:text-primary relative"
          >
            {section}
            <span className="absolute left-0 bottom-0 w-full h-1 bg-primary scale-x-0 origin-bottom-right transition-transform duration-500 hover:scale-x-100"></span>
          </a>
        ))}
      </nav>

      <div className="flex items-center space-x-6">
        <div
          id="login-btn"
          className="text-2xl text-black cursor-pointer"
        >
          <i className="fas fa-user"></i>
        </div>
        <div id="menu-btn" className="text-2xl text-black cursor-pointer">
          <i className="fas fa-bars"></i>
        </div>
      </div>
      <img  src="./profile.svg" alt="" className="w-10 " />

        <form className="top-full right-8 bg-white shadow-lg w-80 p-8 ">
          <h3 className="text-2xl text-black text-center mb-4">Se connecter</h3>
          <input
            type="email"
            placeholder="Entez votre email"
            className="w-full text-lg border border-gray-200 p-2 mb-4"
          />
          <input
            type="password"
            placeholder="Entez votre mots de passe"
            className="w-full text-lg border border-gray-200 p-2 mb-4"
          />
          <div className="flex items-center space-x-2 mb-4">
            <input type="checkbox" id="remember" className="form-checkbox" />
            <label htmlFor="remember" className="text-lg text-black">
            me reconnaître
            </label>
          </div>
          <button
            type="submit"
            className="relative inline-block text-lg font-semibold text-primary border border-primary bg-secondary py-3 px-8 rounded overflow-hidden"
          >
            <span className="relative z-10">Se connecter</span>
            <span
              className="absolute inset-0 bg-primary text-white transform -translate-y-full transition-transform duration-500 ease-in-out hover:translate-y-0"
              aria-hidden="true"
            ></span>
          </button>
        </form>
      
    </header>
    </>
  );
};

export default Header;
