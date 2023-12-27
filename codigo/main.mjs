let balance = 0;
let income = 0;
let investments = 0;

// Simular una llamada a la API para obtener los datos actuales
function getCurrentData() {
    balance = 5000;
    income = 2000;
    investments = 3000;
}

// Actualizar la interfaz de usuario con los datos actuales
function updateUI() {
    document.getElementById('balance').innerText = '$' + balance;
    document.getElementById('income').innerText = '$' + income;
    document.getElementById('investments').innerText = '$' + investments;
}

// Manejar el envío del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Aquí puede agregar su propia lógica para manejar el envío del formulario de contacto
    // Por ejemplo, enviar un correo electrónico utilizando la API de correo electrónico o almacenar los datos en una base de datos

    alert('Formulario de contacto enviado');
});

// Obtener los datos actuales y actualizar la interfaz de usuario
getCurrentData();
updateUI();