fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.ok ? response.json() : console.error('Қате!'))
    .then(data => data && data.forEach(user => {
        const container = document.getElementById('user-container');
        const userBlock = document.createElement('div');
        userBlock.style.cssText = 'background:#f0f0f0; color:#000; padding:10px; border-radius:5px; margin-bottom:10px;';
        userBlock.innerHTML = `<p>Қолданушы аты: <strong>${user.name}</strong></p><p>Email: <strong>${user.email}</strong></p>`;
        container.appendChild(userBlock);
    }));
