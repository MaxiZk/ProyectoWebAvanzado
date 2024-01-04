function handleSubmit(event) {
    event.preventDefault();
    const monto = parseInt(event.target.elements[0].value);
    if (event.target.id === "ingresoForm") {
      const ingreso = parseInt(document.getElementById("ingreso").textContent);
      document.getElementById("ingreso").textContent = ingreso + monto;
    } else if (event.target.id === "inversionForm") {
      const inversion = parseInt(document.getElementById("inversiones").textContent);
      document.getElementById("inversiones").textContent = inversion + monto;
    }
    const disponible = parseInt(document.getElementById("disponible").textContent);
    document.getElementById("disponible").textContent = disponible + monto;
  }

  document.getElementById("ingresoForm").addEventListener("submit", handleSubmit);
  document.getElementById("inversionForm").addEventListener("submit", handleSubmit);
  