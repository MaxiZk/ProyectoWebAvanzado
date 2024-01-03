function handleSubmit(event) {
    event.preventDefault();
    var form = event.target;
    var amount = form.elements['ingreso'].value;
    var balance = document.getElementById('balance');
    var updatedBalance = updateBalance(parseFloat(amount));
    balance.textContent = '$' + updatedBalance.toFixed(2);
    form.reset();

    // Dispara un evento personalizado para informar a otros elementos que el saldo ha cambiado
    var event = new CustomEvent('balanceChanged', {
        detail: {
            balance: updatedBalance
        }
    });
    document.dispatchEvent(event);
}

// Función para actualizar el saldo en función de un ingreso
function updateBalance(amount) {
    var balance = parseFloat(document.getElementById('balance').textContent.substring(1));
    return balance + amount;
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

// Escucha el evento 'balanceChanged' para realizar acciones adicionales cuando el saldo cambie
document.addEventListener('balanceChanged', function(event) {
    console.log('Nuevo saldo: ', event.detail.balance);
});