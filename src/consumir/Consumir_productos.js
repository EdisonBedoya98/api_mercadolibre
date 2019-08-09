import React, { Component } from 'react'
import './Consumir_productos.scss';
import './consumir_productosCards.scss';


export default class Consumir_productos extends Component {
    state = {
        titulo: this.props.titulo,
        imagen: this.props.imagen,
        precio: this.props.precio,
        sellerName: this.props.sellerName
    }


    render() {
        return (
            <div >
                
                <n class="product">
                    <div class="product__photo">
                        <div class="photo-container">
                            <div class="photo-main">
                               
                                <img src={this.state.imagen} alt="green apple slice" width="250" height="220"/>
                            </div>
                         
                        </div>
                    </div>
                    <div class="product__info">
                        <div class="title">
                            <h5>{this.state.titulo}</h5>
                            <span>{this.state.sellerName}</span>
                        </div>
                        <div class="price">
                            $ <span>{this.state.precio}</span>
                        </div>
                      
                        
                        <button class="buy--btn">COMPRAR</button>
                    </div>
                </n>

                <footer>
                    <p></p>
                </footer>
            </div>
        )
    }
}

