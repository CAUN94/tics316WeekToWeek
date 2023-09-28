import React from 'react';

class Saludo extends React.Component {
    render() {
        return (
            <div className="saludo">
                <h1>Hola, {this.props.nombre}!</h1>
                <p>Bienvenido a mi primer sitio react.</p>
            </div>
        );
    }
}

export default Saludo;