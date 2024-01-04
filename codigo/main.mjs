import {
    formatNumber,
    addToDataList,
    addInvestment,
    getAverage,
    getTotalInvestments,
    getInvestmentTable
} from "/ProyectoWebAvanzado/app/index.mjs";

   // DOM elements
   const ingresoInput = document.getElementById("ingresoInput");
   const inversionForm = document.getElementById("inversionForm");
   const investmentTable = document.getElementById("investmentTable");
   
   // Function to handle form submissions
   function handleSubmit(event) {
    event.preventDefault();
   
    // Calculate average
    const totalInvestments = getTotalInvestments();
    const average = getAverage(totalInvestments);
   
    // Update average display
    document.getElementById("averageDisplay").textContent = formatNumber(average);
   
    // Clear form input
    inversionForm.reset();
   }
   
   // Event listeners
   inversionForm.addEventListener("submit", handleSubmit);

   // Seleccionar el formulario
const contactForm = document.getElementById('contact-form');

// Validar el formulario y enviar el correo electrónico
contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);

    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    if (name === '' || email === '' || message === '') {
        alert('Por favor, complete todos los campos.');
        return;
    }

    // Aquí puede agregar su lógica para enviar el correo electrónico.
    // Por ejemplo, utilizando una API de correo electrónico como Mailgun, SendGrid o una API personalizada.

    alert('Mensaje enviado. Gracias por contactarnos.');
});