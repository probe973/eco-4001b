// assets/js/scripts.js

/**
 * ACCESSIBLE SOLUTION TOGGLE
 * Updated to be compatible with all question types.
 */
function toggleSolution(solutionId, btnElement) {
    var solutionDiv = document.getElementById(solutionId);
    
    if (!solutionDiv) return;

    // Check visibility (handles inline styles, classes, and computed styles)
    var isHidden = (solutionDiv.style.display === "none" || solutionDiv.style.display === "" || !solutionDiv.classList.contains('visible'));

    if (isHidden) {
        // --- SHOW ---
        solutionDiv.style.display = "block";
        solutionDiv.classList.add('visible'); // Keeps your old CSS happy
        
        // Only try to update the button if the button was actually passed to the function
        if (btnElement) {
            btnElement.textContent = "Hide Solution";
            btnElement.setAttribute("aria-expanded", "true");
        }
    } else {
        // --- HIDE ---
        solutionDiv.style.display = "none";
        solutionDiv.classList.remove('visible');
        
        // Only try to update the button if the button was actually passed to the function
        if (btnElement) {
            btnElement.textContent = "Show Solution";
            btnElement.setAttribute("aria-expanded", "false");
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

