// assets/js/scripts.js

// Function to toggle visibility of solution content
function toggleSolution(solutionId) {
    const solutionElement = document.getElementById(solutionId);
    if (solutionElement) {
        solutionElement.classList.toggle('visible');
        const button = solutionElement.previousElementSibling; // Get the button element (assuming it's right before the solution div)
        if (button && button.tagName === 'BUTTON' && button.textContent.includes('Solution')) {
            if (solutionElement.classList.contains('visible')) {
                button.textContent = 'Hide Solution';
            } else {
                button.textContent = 'Show Solution';
            }
        }
    }
}

// Function to check numerical answers
function checkNumericalAnswer(id, correctAnswer, toleranceStr) {
    const inputElement = document.getElementById(`input-${id}`);
    const feedbackElement = document.getElementById(`feedback-${id}`);
    const userAnswer = parseFloat(inputElement.value);
    const correct = parseFloat(correctAnswer);
    const tolerance = parseFloat(toleranceStr);

    feedbackElement.classList.remove('feedback-correct', 'feedback-incorrect');
    feedbackElement.textContent = ''; // Clear previous feedback

    if (isNaN(userAnswer)) {
        feedbackElement.textContent = 'Please enter a number.';
        feedbackElement.classList.add('feedback-incorrect');
        return;
    }

    if (Math.abs(userAnswer - correct) <= tolerance) {
        feedbackElement.textContent = 'Correct!';
        feedbackElement.classList.add('feedback-correct');
    } else {
        feedbackElement.textContent = 'Incorrect. Try again!';
        feedbackElement.classList.add('feedback-incorrect');
    }
}

// Function to check multiple choice answers
function checkMultipleChoice(id, correctAnswer) {
    const formElement = document.getElementById(`form-${id}`);
    const feedbackElement = document.getElementById(`feedback-${id}`);
    const selectedOption = formElement.querySelector(`input[name="choice-${id}"]:checked`);

    feedbackElement.classList.remove('feedback-correct', 'feedback-incorrect');
    feedbackElement.textContent = ''; // Clear previous feedback

    if (!selectedOption) {
        feedbackElement.textContent = 'Please select an option.';
        feedbackElement.classList.add('feedback-incorrect');
        return;
    }

    if (selectedOption.value === correctAnswer) {
        feedbackElement.textContent = 'Correct!';
        feedbackElement.classList.add('feedback-correct');
    } else {
        feedbackElement.textContent = 'Incorrect. Try again!';
        feedbackElement.classList.add('feedback-incorrect');
    }
}

// Function to check Fill in the Blanks Table (Numerical Version)
function checkTableFill(id, answersString, toleranceStr) {
    const container = document.getElementById(`table-container-${id}`);
    const feedbackElement = document.getElementById(`feedback-${id}`);
    const inputs = container.querySelectorAll('input');
    
    // Split answers by '||'
    const answers = answersString.split('||').map(s => parseFloat(s.trim()));
    const tolerance = parseFloat(toleranceStr || 0); // Default to 0 if not provided

    feedbackElement.classList.remove('feedback-correct', 'feedback-incorrect');
    feedbackElement.textContent = '';
    
    let allCorrect = true;

    inputs.forEach((input, index) => {
        if (index >= answers.length) return;

        const userVal = parseFloat(input.value);
        const correctVal = answers[index];

        // Remove previous styling
        input.classList.remove('input-correct', 'input-incorrect');

        // Check if input is a valid number AND within tolerance
        if (!isNaN(userVal) && Math.abs(userVal - correctVal) <= tolerance) {
            input.classList.add('input-correct');
        } else {
            input.classList.add('input-incorrect');
            allCorrect = false;
        }
    });

    if (allCorrect) {
        feedbackElement.textContent = 'Great job! All answers are correct.';
        feedbackElement.classList.add('feedback-correct');
    } else {
        feedbackElement.textContent = 'Some answers are incorrect. Check the red fields.';
        feedbackElement.classList.add('feedback-incorrect');
    }
}

