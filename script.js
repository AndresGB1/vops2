function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const data = {
        username: username,
        password: password
    };

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('message').textContent = 'Login successful';
        } else {
            document.getElementById('message').textContent = 'Invalid credentials';
        }
    })
    .catch(error => console.error('Error:', error));
}
