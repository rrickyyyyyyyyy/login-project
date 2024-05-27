const users = {};

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (users[username] && users[username] === password) {
        document.getElementById('loginMessage').textContent = "Accesso effettuato con successo!";
        document.getElementById('loginMessage').style.color = "green";
    } else {
        document.getElementById('loginMessage').textContent = "Username o password errati!";
    }
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    if (users[username]) {
        document.getElementById('registerMessage').textContent = "Utente già registrato!";
    } else {
        users[username] = password;
        document.getElementById('registerMessage').textContent = "Registrazione avvenuta con successo!";
        document.getElementById('registerMessage').style.color = "green";
    }
});