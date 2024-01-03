export const formatNumber = (number) => {
    return new Intl.NumberFormat("es-ES").format(number);
   };
   
   export const addToDataList = (id, value) => {
    const list = document.getElementById(id);
    const option = document.createElement("option");
    option.value = value;
    list.appendChild(option);
   };
   
   export const addInvestment = (value) => {
    const investments = JSON.parse(localStorage.getItem("investments")) || [];
    investments.push(value);
    localStorage.setItem("investments", JSON.stringify(investments));
   };
   
   export const getAverage = (totalInvestments) => {
    const investments = JSON.parse(localStorage.getItem("investments")) || [];
    const sum = investments.reduce((a, b) => a + b, 0);
    return sum / totalInvestments;
   };
   
   export const getTotalInvestments = () => {
    const investments = JSON.parse(localStorage.getItem("investments")) || [];
    return investments.length;
   };
   
   export const getInvestmentTable = () => {
    const investments = JSON.parse(localStorage.getItem("investments")) || [];
    let table = "<table><tr><th>Monto</th></tr>";
    investments.forEach((investment) => {
       table += `<tr><td>${formatNumber(investment)}</td></tr>`;
    });
    table += "</table>";
    return table;
   };