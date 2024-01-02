import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const NavLink = () => (
 <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/dashboard">Dashboard</Link>
    </li>
    <li>
      <Link to="/inversiones">Inversiones</Link>
    </li>
    <li>
      <Link to="/contacto">Contacto</Link>
    </li>
 </ul>
);

const Inicio = () => <h2>Inicio</h2>;
const AcercaDe = () => <h2>Acerca de</h2>;
const Invertir = () => <h2>Invertir</h2>;
const Contacto = () => <h2>Contacto</h2>;

function App() {
 return (
    <Router>
      <div>
        <NavLink />

        <hr />

        <Route exact path="/" component={Inicio} />
        <Route path="/acerca-de" component={AcercaDe} />
        <Route path="/invertir" component={Invertir} />
        <Route path="/contacto" component={Contacto} />
      </div>
    </Router>
 );
}

app.listen(3000, () => {
    console.log('Aplicación escuchando en el puerto 3000');
});

export default App;