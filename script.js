document.addEventListener('DOMContentLoaded', () => {
    const minInput = document.getElementById('min');
    const maxInput = document.getElementById('max');
    const generateBtn = document.getElementById('generate');
    const resultNumber = document.querySelector('.number');

    // Function to generate random number
    const generateRandomNumber = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    // Function to validate input
    const validateInput = () => {
        const min = parseInt(minInput.value);
        const max = parseInt(maxInput.value);

        if (isNaN(min) || isNaN(max)) {
            alert('Please enter valid numbers');
            return false;
        }

        if (min >= max) {
            alert('Maximum number must be greater than minimum number');
            return false;
        }

        return true;
    };

    // Handle generate button click
    generateBtn.addEventListener('click', () => {
        if (validateInput()) {
            const min = parseInt(minInput.value);
            const max = parseInt(maxInput.value);
            const randomNumber = generateRandomNumber(min, max);

            // Animate the number change
            resultNumber.style.animation = 'none';
            resultNumber.offsetHeight; // Trigger reflow
            resultNumber.style.animation = 'pulse 1s ease-in-out infinite';
            resultNumber.textContent = randomNumber;
        }
    });

    // Handle Enter key press
    [minInput, maxInput].forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                generateBtn.click();
            }
        });
    });
});