document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `Nom: ${name} <br> Email: ${email}`;
});
