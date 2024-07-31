

 import {Header} from"../composant/header";

export default function connexion(){
    return (
        <>
        <Header/> 
         <body className=" font-sans bg-gray-200 flex justify-center items-center min-h-screen m-0 p-5 ms:flex ms:justify-center ms:items-center">
            
        
             <form id="inscriptionForm" className="bg-white p-5 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-center text-gray-800 text-[30px] font-bold">Formulaire d'Inscription</h1>
        
        <label for="nom" className="block mt-2">Nom:</label>
        <input type="text" id="nom" name="nom" required className="w-full p-2 mt-1 border border-gray-300 rounded-md box-border"/>
        
        <label for="prenom" className="block mt-2">Prénom:</label>
        <input type="text" id="prenom" name="prenom" required className="w-full p-2 mt-1 border border-gray-300 rounded-md box-border"/>
        
        <label for="email" className="block mt-2">Adresse Email:</label>
        <input type="email" id="email" name="email" required className="w-full p-2 mt-1 border border-gray-300 rounded-md box-border"/>
        
        <label for="niveau">Niveau Scolaire:</label>
        <select id="niveau" name="niveau" required className="w-full p-2 mt-1 border border-gray-300 rounded-md box-border">
            <option value="">Choisissez votre niveau</option>
            <option value="6eme">6ème</option>
            <option value="5eme">5ème</option>
            <option value="4eme">4ème</option>
            <option value="3eme">3ème</option>
            <option value="2nde">2nde</option>
            <option value="1ere">1ère</option>
            <option value="terminale">Terminale</option>
        </select>
        
        <label for="password" className="block mt-2">Mot de passe:</label>
        <input type="password" id="password" name="password" required className="w-full p-2 mt-1 border border-gray-300 rounded-md box-border"/>
        
        <label for="confirmPassword" className="block mt-2">Confirmer le mot de passe:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" required className="w-full p-2 mt-1 border border-gray-300 rounded-md box-border"/>
        
        <label for="dateNaissance" className="block mt-2">Date de naissance:</label>
        <input type="date" id="dateNaissance" name="dateNaissance" required className="w-full p-2 mt-1 border border-gray-300 rounded-md box-border"/>
        
        <label for="lieuNaissance" className="block mt-2">Lieu de naissance:</label>
        <input type="text" id="lieuNaissance" name="lieuNaissance" required className="w-full p-2 mt-1 border border-gray-300 rounded-md box-border"/>
        
        <h2 className="text-center text-gray-800 mt-8 text-lg">Informations de Paiement</h2>
        
        <label for="paiement" className="block mt-2">Mode de paiement:</label>
        <select id="paiement" name="paiement" required className="w-full p-2 mt-1 border border-gray-300 rounded-md box-border">
            <option value="">Choisissez votre mode de paiement</option>
            <option value="cb">Carte Bancaire</option>
            <option value="paypal">PayPal</option>
            <option value="virement">Virement bancaire</option>
            <option value="AirtelMoney">Airtel-Money</option>
            <option value="MobilCach">Mobil-cash</option>
        </select>
        
        <div id="cbInfo" className="hidden">
            <label for="cardNumber">Numéro de carte:</label>
            <input type="text" id="cardNumber" name="cardNumber" placeholder="1234 5678 9012 3456" className="w-full p-2 mt-1 border border-gray-300 rounded-md box-border"/>
            
            <label for="expiryDate">Date d'expiration:</label>
            <input type="text" id="expiryDate" name="expiryDate" placeholder="MM/AA" className="w-full p-2 mt-1 border border-gray-300 rounded-md box-border"/>
            
            <label for="cvv">CVV:</label>
            <input type="text" id="cvv" name="cvv" placeholder="123" className="w-full p-2 mt-1 border border-gray-300 rounded-md box-border"/>
        </div>
        
        <div id="paypalInfo" className="hidden">
            <label for="paypalEmail">Email PayPal:</label>
            <input type="email" id="paypalEmail" name="paypalEmail" className="w-full p-2 mt-1 border border-gray-300 rounded-md box-border"/>
        </div>
        
        <div id="virementInfo" className="hidden">
            <label for="iban">IBAN:</label>
            <input type="text" id="iban" name="iban" placeholder="FR76 1234 5678 9012 3456 7890 123" className="w-full p-2 mt-1 border border-gray-300 rounded-md box-border"/>
            
            <label for="bic">BIC:</label>
            <input type="text" id="bic" name="bic" placeholder="ABCDEFGHIJK" className="w-full p-2 mt-1 border border-gray-300 rounded-md box-border"/>
        </div>

        <div id="virementInfo" className="hidden">
            <label for="iban" className="block mt-2">Nom et Prenom:</label>
            <input type="text" id="iban" name="iban" placeholder=" Nom & Prenom" className="w-full p-2 mt-1 border border-gray-300 rounded-md box-border"/>
            
            <label for="bic" className="block mt-2">Numero de telephone:</label>
            <input type="text" id="bic" name="bic" placeholder="Numero" className="w-full p-2 mt-1 border border-gray-300 rounded-md box-border"/>
        </div>

        <div id="virementInfo" className="hidden">
            <label for="iban" className="block mt-2">Nom et Prenom:</label>
            <input type="text" id="iban" name="iban" placeholder=" Nom & Prenom" className="w-full p-2 mt-1 border border-gray-300 rounded-md box-border"/>
            
            <label for="bic" className="block mt-2">Numero de telephone:</label>
            <input type="text" id="bic" name="bic" placeholder="Numero" className="w-full p-2 mt-1 border border-gray-300 rounded-md box-border"/>
        </div>

    

        
        <button type="submit" className="w-full p-2.5 bg-green-500 text-white border-none rounded cursor-pointer mt-5 hover:bg-green-600">S'inscrire</button>
    </form>
    </body>

    
        </>
    );
}