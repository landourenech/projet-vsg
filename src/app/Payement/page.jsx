import Image from 'next/image';
import Header from './../composent/Header'; // Assurez-vous que le chemin est correct

export const Payement = () => {
  return (
    <>
      <Header /> 
      
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Méthodes de Paiement</h1>
        
        <div className="space-y-6">
          {/* Option Mobile */}
          <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Paiement Mobile</h2>
            <button className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">
              Payer avec Mobile
            </button>
          </div>
          
          {/* Option Banque */}
          <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Paiement Bancaire</h2>
            <button className="w-full py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600">
              Payer avec Banque
            </button>
          </div>
          
         
          
          {/* Option Code */}
          <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Code de paiement</h2>
            <input 
              type="text" 
              placeholder="Entrez votre code" 
              className="w-full p-2 border border-gray-300 rounded mb-2"
            />
            <button className="w-full py-2 px-4 bg-purple-500 text-white rounded hover:bg-purple-600">
              Valider le Code
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payement;
