function handleSubmit(event) {
    event.preventDefault();
    var form = event.target;
    var amount = form.elements['ingreso'].value;
    var balance = document.getElementById('balance');
    var updatedBalance = parseFloat(balance.textContent.substring(1)) + parseFloat(amount);
    balance.textContent = '$' + updatedBalance.toFixed(2);
    form.reset();
}

function hideNavs() {
    navs.forEach(function(nav) {
        nav.style.display = 'none';
    });
}

// Función para mostrar el nav correspondiente a un ID
function showNav(id) {
    var nav = document.querySelector('nav a[href="#' + id + '"]').parentElement.parentElement;
    nav.style.display = 'block';
}

// Muestra el nav correspondiente a la ID en la URL actual
if (window.location.hash) {
    showNav(window.location.hash.slice(1));
}

