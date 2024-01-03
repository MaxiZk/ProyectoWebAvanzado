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