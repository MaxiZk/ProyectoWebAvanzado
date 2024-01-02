// app/index.mjs
export class Ingreso {
    constructor(monto) {
        this.monto = monto;
    }

    agregarIngreso() {
        // Implement your logic here to update the database
        const ingresoActual = parseFloat(document.getElementById('ingreso').textContent);
        const nuevoIngreso = ingresoActual + this.monto;
        document.getElementById('ingreso').textContent = nuevoIngreso.toFixed(2);
        document.getElementById('disponible').textContent = nuevoIngreso.toFixed(2);
    }
}

export class Inversion {
    constructor(monto) {
        this.monto = monto;
    }

    agregarInversion() {
        // Implement your logic here to update the database
        const inversionActual = parseFloat(document.getElementById('inversiones').textContent);
        const nuevaInversion = inversionActual + this.monto;
        document.getElementById('inversiones').textContent = nuevaInversion.toFixed(2);
    }
}