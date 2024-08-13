document.addEventListener('DOMContentLoaded', () => {
    // Existing code...

    // Fetch external API data
    fetch('https://api.example.com/recycling-info')
        .then(response => response.json())
        .then(data => displayRecyclingInfo(data))
        .catch(error => console.error('Error fetching recycling info:', error));

    function displayRecyclingInfo(data) {
        const tipsList = document.getElementById('tipsList');
        data.tips.forEach(tip => {
            const li = document.createElement('li');
            li.textContent = tip;
            tipsList.appendChild(li);
        });
    }

    // Existing code...
});
