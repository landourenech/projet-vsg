import Image from "next/image";

export default function Cours({checkQuiz}){
    function checkQuiz() {
        const correctAnswers = ['c', 'a', 'a'];
        const quizForm = document.querySelector('#quiz-form'); // Supposons un formulaire avec l'id "quiz-form"
      
        const userAnswers = getAnswers(quizForm);
        const score = calculateScore(userAnswers, correctAnswers);
        const feedback = getFeedback(score);
      
        const resultElement = document.getElementById('quiz-result');
        resultElement.textContent = feedback; // Utiliser textContent pour éviter les problèmes d'injection de code
      
        function getAnswers(form) {
          const answers = [];
          for (let i = 1; i <= 3; i++) {
            const selectedAnswer = form.querySelector(`input[name="q${i}"]:checked`);
            answers.push(selectedAnswer ? selectedAnswer.value : null);
          }
          return answers;
        }
      
        function calculateScore(userAnswers, correctAnswers) {
          return userAnswers.reduce((acc, answer, index) => {
            return answer === correctAnswers[index] ? acc + 1 : acc;
          }, 0);
        }
      
        function getFeedback(score) {
          // ... votre logique de feedback ici
        }
      }

return(
    


<div>



  <div class="container mx-auto px-4 py-8 bg-green-600">
    <div class="flex flex-col lg:flex-row gap-8">
      <main class="lg:w-3/4 bg-white rounded-lg shadow-lg p-8">
        <h1 class="text-3xl font-bold text-primary mb-10" >Cours de Mathématiques - 4ème</h1>
        <h2 class="text-2xl font-bold text-primary mb-4">Les Puissances</h2>
        
        <p class="mb-6">En mathématiques, une puissance représente le produit d&aposun nombre (appelé la base) multiplié par lui-même un certain nombre de fois (appelé l&). Ce concept est fondamental et a de nombreuses applications dans divers domaines.</p>
        
        <h3 class="text-xl font-bold text-primary mb-4">Définition</h3>
        <p class="mb-4">Pour un nombre réel <span class="italic text-primary font-bold">a</span> et un entier naturel <span class="italic text-primary font-bold">n</span>, onaposexposant définit <span class="italic text-primary font-bold">a^n</span> comme le produit de <span class="italic text-primary font-bold">n</span> facteurs égaux à <span class="italic text-primary font-bold">a</span>.</p>

        <div class="bg-gray-100 p-6 rounded-lg mb-6 border-l-4 border-secondary">
          <p class="font-bold mb-2">Exemple :</p>
          <p>2³ = 2 × 2 × 2 = 8</p>
          <p>Ici, 2 est la base et 3 est l&apos exposant.</p>
        </div>

        <div class="relative pb-9/16 h-0 overflow-hidden rounded-lg shadow-lg mb-8">
          <iframe class="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/EXAMPLE_VIDEO_ID" title="Explication des puissances en mathématiques" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <h3 class="text-xl font-bold text-primary mb-4">Propriétés des puissances</h3>
        <ol class="list-decimal pl-6 mb-6">
          <li class="mb-2"><strong>Produit de puissances de même base :</strong> <span class="italic text-primary font-bold">a^m × a^n = a^(m+n)</span></li>
          <li class="mb-2"><strong>Quotient de puissances de même base :</strong> <span class="italic text-primary font-bold">a^m ÷ a^n = a^(m-n)</span></li>
          <li class="mb-2"><strong>Puissance d&aposune puissance :</strong> <span class="italic text-primary font-bold">(a^m)^n = a^(m×n)</span></li>
        </ol>

        <div class="bg-gray-100 p-6 rounded-lg mb-6 border-l-4 border-secondary">
          <p class="font-bold mb-2">Note :</p>
          <p>Ces propriétés sont essentielles pour simplifier les calculs impliquant des puissances.</p>
        </div>

        <h3 class="text-xl font-bold text-primary mb-4">Applications concrètes</h3>
        <p class="mb-4">Les puissances sont utilisées dans de nombreux domaines :</p>
        <ul class="list-disc pl-6 mb-6">
          <li>En informatique pour représenter les capacités de stockage (kilo-octets, méga-octets, etc.)</li>
          <li>En physique pour exprimer de très grandes ou très petites valeurs</li>
          <li>En biologie pour modéliser la croissance des populations</li>
        </ul>

        <div id="quiz" class="bg-gray-50 p-6 rounded-lg shadow-inner">
          <h3 class="text-xl font-bold text-accent mb-4">Quiz : Testons vos connaissances</h3>
          <div class="space-y-6">
            <div class="flex flex-col md:flex-row items-center gap-4">
              <div class="md:w-2/3">
                <p class="font-bold mb-2">1. Quel est le résultat de 2⁴ ?</p>
                <div class="space-y-2">
                  <div><input type="radio" name="q1" value="a" id="q1a" class="mr-2"/><label for="q1a">a 6</label></div>
                  <div><input type="radio" name="q1" value="b" id="q1b" class="mr-2"/><label for="q1b">b 8</label></div>
                  <div><input type="radio" name="q1" value="c" id="q1c" class="mr-2"/><label for="q1c">c 16</label></div>
                </div>
              </div>
              <div class="md:w-1/3">
                {/* <img src="https://example.com/power-of-2.jpg" alt="Représentation visuelle de 2 à la puissance 4" class="rounded-lg shadow-md w-full"> */}
              </div>
            </div>
            <div class="flex flex-col md:flex-row items-center gap-4">
              <div class="md:w-2/3">
                <p class="font-bold mb-2">2. Si a^3 = 27, quelle est la valeur de a ?</p>
                <div class="space-y-2">
                  <div><input type="radio" name="q2" value="a" id="q2a" class="mr-2"/><label for="q2a">a) 3</label></div>
                  <div><input type="radio" name="q2" value="b" id="q2b" class="mr-2"/><label for="q2b">b) 9</label></div>
                  <div><input type="radio" name="q2" value="c" id="q2c" class="mr-2"/><label for="q2c">c) 27</label></div>
                </div>
              </div>
              <div class="md:w-1/3">
              <Image src=""></Image>
                {/* <img src="https://example.com/cube-root.jpg" alt="Cube avec volume 27" class="rounded-lg shadow-md w-full"> */}
              </div>
            </div>
            <div class="flex flex-col md:flex-row items-center gap-4">
              <div class="md:w-2/3">
                <p class="font-bold mb-2">3. Quel est le résultat de 5² × 5³ ?</p>
                <div class="space-y-2">
                  <div><input type="radio" name="q3" value="a" id="q3a" class="mr-2"/><label for="q3a">a) 5⁵</label></div>
                  <div><input type="radio" name="q3" value="b" id="q3b" class="mr-2"/><label for="q3b">b) 5⁶</label></div>
                  <div><input type="radio" name="q3" value="c" id="q3c" class="mr-2"/><label for="q3c">c) 25 × 125</label></div>
                </div>
              </div>
              <div class="md:w-1/3">
                {/* <img src="https://example.com/multiply-powers.jpg" alt="Multiplication de puissances" class="rounded-lg shadow-md w-full"> */}
              </div>
            </div>
          </div>
          <button onclick="checkQuiz()" class="mt-6 bg-secondary text-white bg-zinc-950 font-bold py-2 px-4 rounded hover:bg-green-600 transition-colors">Vérifier mes réponses</button>
          <p id="quiz-result" class="mt-4 font-bold p-4 rounded-lg bg-blue-100 hidden"></p>
        </div>
      </main>

      <aside class="lg:w-1/4 bg-white rounded-lg shadow-lg p-6 h-fit sticky top-4">
        <h3 class="text-xl font-bold text-primary mb-4">Ressources supplémentaires</h3>
        <ul class="space-y-2 mb-6">
          <li><a href="#" class="text-primary hover:text-accent transition-colors">Fiche résumé sur les puissances</a></li>
          <li><a href="#" class="text-primary hover:text-accent transition-colors">Exercices supplémentaires</a></li>
          <li><a href="#" class="text-primary hover:text-accent transition-colors">Vidéo explicative</a></li>
        </ul>
        <h3 class="text-xl font-bold text-primary mb-4">Prochains cours</h3>
        <ul class="space-y-2">
          <li><a href="#" class="text-primary hover:text-accent transition-colors">Les racines carrées</a></li>
          <li><a href="#" class="text-primary hover:text-accent transition-colors">Les équations</a></li>
          <li><a href="#" class="text-primary hover:text-accent transition-colors">La géométrie dans l&aposespace</a></li>
        </ul>
      </aside>
    </div>
  </div>
</div>

  

  

)
}