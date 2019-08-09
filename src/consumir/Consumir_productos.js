import React, { Component } from 'react'
import './Consumir_productos.scss';

export default class Consumir_productos extends Component {
    state = {
        titulo: this.props.titulo,
        imagen: this.props.imagen,
        precio: this.props.precio,
        sellerName: this.props.sellerName
    }


    render() {
        return (
            <div className="padre">
                <div>
                    <div >
                        <div id="titulo">{this.state.titulo}</div>
                        <img id="img" className="img" src={this.state.imagen} alt="producto" width="150" height="400" />
                        <div>precio: {this.state.precio}</div>
                        <div>Vendedor: {this.state.sellerName}</div>
                        <button class="button button2">Comprar</button>
                        
                    </div>
                </div>

            </div>
        )
    }
}

