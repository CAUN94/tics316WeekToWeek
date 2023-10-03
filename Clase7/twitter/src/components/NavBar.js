import React from 'react';

function NavBar(){
    // Podemos poner codigo JS aca
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="#">Twitter</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                <a class="nav-link" href="#">Inicio</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Explorar</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Notificaciones</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Mensajes</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    );
}

export default NavBar;