import React, { Component } from 'react'
import './Consumir_productos.scss';


export default class Consumir_productos extends Component {
    state = {
        urlApi: 'https://api.mercadolibre.com/sites/MLU/search?q=',
        productoName: 'iphone',
        titulo: ''
    }

    componentDidMount() {
        this.getConsumir();
    }
    componentDidUpdate(prevProps, prevState) {
        const { productoName: prevProductoName } = prevState;
        const { productoName } = this.state;
        if (prevProductoName !== productoName) this.getConsumir();
    }

    getConsumir = async () => {
        const { urlApi, productoName } = this.state;
        const resp = await fetch(urlApi + productoName);
        const data = await resp.json();
        this.setState({
            titulo: data.results[0].title
        });

    }

    handleEdit = (event) => {
        const eventValue = event.target.value;
        if (eventValue !== null) {
            this.setState({ productoName: event.target.value })
        }
    }



    render() {
        return (
            <div>
                <input type="text" value={this.state.productoName} onChange={this.handleEdit} />
                <div>{this.state.titulo}</div>
            </div>
        )
    }
}