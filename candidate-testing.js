const input = require('readline-sync');
let candidateName;
let question;
let correctAnswer;
let candidateAnswer;
let questions = ["1) Who was the first American woman in space? ", "2) True or false: 5000 meters = 5 kilometers. ", "3) (5 + 3)/2 * 10 = ? ","4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ","5) What is the minimum crew size for the ISS? "]
let correctAnswers = ["Sally Ride", "True", "40", "Trajectory", "3"];
let candidateAnswers = [];

function askForName() {
 let candidateName = input.question("Candidate Name: ");
}

function askQuestion() {
  for (let i = 0; i < questions.length; i++) {
  candidateAnswers[i] = [input.question(questions[i])];
console.log(`Your Answer: ${candidateAnswers[i]}`);
console.log(`Correct Answer: ${correctAnswers[i]}`);
  }
  return candidateAnswers
}

function gradeQuiz(candidateAnswers) {
let numberCorrect = 0
for (let i = 0; i < questions.length; i++) {
if (candidateAnswers[i].toString().toLowerCase() === correctAnswers[i].toString().toLowerCase()) {
    numberCorrect++
  }
}

let grade = (numberCorrect/questions.length)*100;
  console.log(`>>> Overall Grade: ${grade}% (${numberCorrect} of ${questions.length} responses correct) <<<`)
  if (grade >= 80) {
    console.log('>>> Status: PASSED <<<');
  }
  else {
    console.log('>>> Status: FAILED<<< ');
  }
  return grade;
}

function runProgram() {
  askForName();
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
