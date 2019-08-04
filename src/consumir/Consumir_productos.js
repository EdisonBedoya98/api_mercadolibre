import React, { Component } from 'react'
import './Consumir_productos.scss';


export default class Consumir_productos extends Component {
    state = {      
        // productoName: this.props.productoName,
        titulo: this.props.titulo,
        imagen: this.props.imagen,
        precio: this.props.precio
    }
    // handleEdit = (event) => {
    //     const eventValue = event.target.value;
    //     if (eventValue !== null) {
    //         this.setState({ productoName: event.target.value })
    //     }
    // }

    render() {       
        return (
            <div className="padre">
                <div>
                    <div >
                        {/* <input type="text" value={this.state.productoName} onChange={this.handleEdit} /> */}
                        <div id="titulo">{this.state.titulo}</div>
                        <img id="img" className="img" src={this.state.imagen} alt="producto" width="150" height="400" />
                        <div>El precio del producto es: {this.state.precio}</div>
                    </div>
                </div>
                
            </div>
        )
    }
}

