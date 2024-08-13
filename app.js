document.addEventListener('DOMContentLoaded', () => {
    const authForms = document.getElementById('authForms');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const userArea = document.getElementById('userArea');
    const usernameDisplay = document.getElementById('username');
    const logoutButton = document.getElementById('logoutButton');
    const calculatorSection = document.getElementById('calculator');
    const tipsSection = document.getElementById('tips');

    const calculatorForm = document.getElementById('calculatorForm');
    const result = document.getElementById('result');
    const tipsList = document.getElementById('tipsList');

    // Authentication
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

        // Dummy authentication logic
        if (username === 'user' && password === 'password') {
            localStorage.setItem('username', username);
            displayUserArea(username);
        } else {
            alert('Invalid login credentials');
        }
    });

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('registerUsername').value;
        const password = document.getElementById('registerPassword').value;

        // Dummy registration logic
        localStorage.setItem('username', username);
        displayUserArea(username);
    });

    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('username');
        displayAuthForms();
    });

    function displayUserArea(username) {
        authForms.style.display = 'none';
        userArea.style.display = 'block';
        calculatorSection.style.display = 'block';
        tipsSection.style.display = 'block';
        usernameDisplay.textContent = username;
    }

    function displayAuthForms() {
        authForms.style.display = 'block';
        userArea.style.display = 'none';
        calculatorSection.style.display = 'none';
        tipsSection.style.display = 'none';
    }

    // Check if user is already logged in
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
        displayUserArea(storedUsername);
    } else {
        displayAuthForms();
    }

    // Carbon Footprint Calculator
    calculatorForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const transportation = parseFloat(document.getElementById('transportation').value);
        const energy = parseFloat(document.getElementById('energy').value);
        const waste = parseFloat(document.getElementById('waste').value);

        const carbonFootprint = calculateCarbonFootprint(transportation, energy, waste);
        result.textContent = `Your daily carbon footprint is ${carbonFootprint} kg CO2`;

        displayTips(tipsList);
    });

    function calculateCarbonFootprint(transportation, energy, waste) {
        const transportationFactor = 0.21; // Example factor for km of transportation
        const energyFactor = 0.5; // Example factor for kWh of energy consumption
        const wasteFactor = 2.5; // Example factor for kg of waste

        return (transportation * transportationFactor) + (energy * energyFactor) + (waste * wasteFactor);
    }

    function displayTips(tipsList) {
        const tips = [
            'Reduce your energy consumption by turning off lights when not in use.',
            'Use public transportation or carpool to reduce your transportation footprint.',
            'Recycle and compost to minimize waste production.',
        ];

        tipsList.innerHTML = '';
        tips.forEach(tip => {
            const li = document.createElement('li');
            li.textContent = tip;
            tipsList.appendChild(li);
        });
    }
});
