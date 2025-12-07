// quiz.js

function checkAnswer() {
    // 1. Identify the correct answer
    const correctAnswer = "4";

    // 2. Retrieve the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    
    // Get the feedback paragraph element
    const feedback = document.getElementById('feedback');

    // If no option is selected
    if (!selectedOption) {
        feedback.textContent = "Please select an answer!";
        return;
    }

    // Get the value of the selected radio button
    const userAnswer = selectedOption.value;

    // 3. Compare user's answer with correct answer
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red";
    }
}

// 4. Add event listener to the Submit Answer button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);