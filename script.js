const exchangeRates = {
    "USD": { "INR": 74.57, "EUR": 0.85, "JPY": 110.07, "AUD": 1.35 },
    "EUR": { "INR": 87.79, "USD": 1.18, "JPY": 129.92, "AUD": 1.59 },
    "INR": { "USD": 0.013, "EUR": 0.011, "JPY": 1.48, "AUD": 0.018 },
    "JPY": { "INR": 0.68, "USD": 0.0091, "EUR": 0.0077, "AUD": 0.012 },
    "AUD": { "INR": 74.18, "USD": 0.74, "EUR": 0.63, "JPY": 83.26 }
};

function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (amount === '' || isNaN(amount)) {
        alert('Please enter a valid amount');
        return;
    }

    const convertedAmount = (amount * exchangeRates[fromCurrency][toCurrency]).toFixed(2);
    document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
}


/*Built the js part of the quiz part*/ 


// Toggle the visibility of the quiz container
document.getElementById("quiz-toggle").addEventListener("click", function() {
    const quizContainer = document.getElementById("quiz-container");
    if (quizContainer.style.display === "none") {
        quizContainer.style.display = "block"; // Show the quiz
    } else {
        quizContainer.style.display = "none"; // Hide the quiz
    }
});

// Handle quiz submission
document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Define the correct answers
    const correctAnswers = {
        q1: "A",
        q2: "B",
        q3: "A",
        q4: "B",
        q5: "A",
        q6: "A",
        q7: "B",
        q8: "B",
        q9: "B",
        q10: "B"
    };

    // Get user answers
    const userAnswers = {};
    for (let i = 1; i <= 10; i++) {
        userAnswers[`q${i}`] = document.querySelector(`input[name="q${i}"]:checked`)?.value;
    }

    // Calculate the score
    let score = 0;
    for (let question in correctAnswers) {
        if (userAnswers[question] === correctAnswers[question]) {
            score++;
        }
    }

    // Display the result
    const resultElement = document.getElementById("quiz-result");
    resultElement.textContent = `You scored ${score} out of 10`;
});
