 // Variables to reference our HTML elements
const quizContainer = document.getElementById('quiz-Container');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const username = document.getElementById( 'username');
const passcode = document.getElementById( 'passcode') ;
const Credentials = document.getElementById('Credentials');


 // Questions and answers
 const myQuestions = [
  {
    question: "In what year was Nnamdi Azikwe born in?",
    answers: {
      a: "1915",
      b: "1904",
      c: "1927"
    },
    correctAnswer: "c"
  },
  {
    question: "In what year was Shehu Shagari born in?",
    answers: {
      a: "1925",
      b: "1920",
      c: "1937"
    },
    correctAnswer: "a"
  },
  {
    question: "In what year was Yakubu Gowon born in?",
    answers: {
      a: "1934",
      b: "1940",
      c: "1937"
    },
    correctAnswer: "a"
  },
  {
    question: "In what year was Gen. Murtala Muhammed born in?",
    answers: {
      a: "1935",
      b: "1940",
      c: "1938"
    },
    correctAnswer: "c"
  },
  {
    question: "In what year was Gen. Ibrahim Babangida born in?",
    answers: {
      a: "1935",
      b: "1941",
      c: "1937"
    },
    correctAnswer: "b"
  },
  {
    question: "In what year was Gen. Sani Abacha born in?",
    answers: {
      a: "1935",
      b: "1943",
      c: "1937"
    },
    correctAnswer: "b"
  },
  {
    question: "In what year was Gen. Abdulsalami Abubakar born in?",
    answers: {
      a: "1935",
      b: "1942",
      c: "1937"
    },
    correctAnswer: "b"
  },
  {
    question: "In what year was Ernest Shonekan born in?",
    answers: {
      a: "1936",
      b: "1940",
      c: "1937"
    },
    correctAnswer: "a"
  },
  {
    question: "In what year was Chief Olusegun Obasanjo born in?",
    answers: {
      a: "1935",
      b: "1940",
      c: "1937"
    },
    correctAnswer: "c"
  },
  {
    question: "In what year was Alhaji Umaru Musa Yar'Adua born in?",
    answers: {
      a: "1950",
      b: "1952",
      c: "1951"
    },
    correctAnswer: "c"
  },
  {
    question: "In what year was Dr Goodluck Ebele Jonathan born in?",
    answers: {
      a: "1957",
      b: "1960",
      c: "1955"
    },
    correctAnswer: "a"
  },
  {
    question: "In what year was Muhammadu Buhari born in?",
    answers: {
      a: "1957",
      b: "1942",
      c: "1955"
    },
    correctAnswer: "b"
  },
  {
    question: "In what year was Bola Ahmaed Tinubu born in?",
    answers: {
      a: "1952",
      b: "1960",
      c: "1955"
    },
    correctAnswer: "a"
  },
  
];
// Prompt the user for their username and passcode
function getCredentials() {
  const username = prompt('Enter your username:');
  const passcode = prompt('Enter your passcode:');

  if (username && passcode) {
    Credentials.innerHTML = (`Username: ${username}\nPasscode: ${passcode}`);
    quizContainer.style.display = 'block';
    buildQuiz();
    
  }
  else {
    alert('Please enter both your username and passcode.');
    // hide quizContainer if username and passcode are not inputted
    quizContainer.style.display = 'none';
  };
};

// Prevent the quiz from displaying until the user inputs their credentials
getCredentials();
// Function to build the quiz
function buildQuiz() {
  // Variable to store the HTML output
  const output = [];

  // For each question...
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      // Variable to store the list of possible answers
      const answers = [];

      // And for each available answer...
      for(letter in currentQuestion.answers) {

        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // Add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  // Combine the output and display it on the page
  quizContainer.innerHTML = output.join('');
}

// Function to check the answers
function showResults() {

  // Gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll('.answers');

  // Keep track of user's answers
  let numCorrect = 0;

  // For each question...
  myQuestions.forEach( (currentQuestion, questionNumber) => {

    // Find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // If answer is correct
    if(userAnswer === currentQuestion.correctAnswer) {
        numCorrect++;
    }

  });
  // Calculate the percentage of correct answers
  const percentageCorrect = Math.round((numCorrect / myQuestions.length) * 100);
  
  // Display the percentage of correct answers
  resultsContainer.innerHTML = `Test Result: ${percentageCorrect}%`;
  
}

// Build the quiz
buildQuiz();

// Attach a click event listener to the submit button
submitButton.addEventListener('click', showResults);
