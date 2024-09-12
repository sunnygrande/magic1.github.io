document.getElementById('add-text-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const text = document.getElementById('text-input').value;

    const response = await fetch('http://127.0.0.1:5000.repl.co/add-text',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text })
    });

    const result = await response.json();
    alert(result.message);
    document.getElementById('text-input').value = '';
});

document.getElementById('search-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const query = document.getElementById('search-input').value;

    const response = await fetch(`https://<YOUR_REPLIT_BACKEND>.repl.co/search?query=${encodeURIComponent(query)}`); // Replace with your Replit URL
    const results = await response.json();

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    results.forEach(result => {
        const p = document.createElement('p');
        p.textContent = result;
        resultsDiv.appendChild(p);
    });
});
