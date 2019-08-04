import React, { Component } from 'react'
import './Consumir_productos.scss';
import Consumirproductos from './Consumir_productos';


export default class vista extends Component {
    state = {
        urlApi: 'https://api.mercadolibre.com/sites/MCO/search?q=',
        productoName: '',
        titulo: [],
        imagen: [],
        precio: []
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
        try {
            for (let index = 0; index < data.results.length; index++) {
                this.setState({
                    titulo: this.state.titulo.concat(data.results[index].title),
                    imagen: this.state.imagen.concat(data.results[index].thumbnail),
                    precio: this.state.precio.concat(data.results[index].price)
                });

            }

        } catch (error) {
            console.log('Campo vacio');
        }
    }

    handleEdit = (event) => {
        this.setState({
            titulo: [],
            imagen: [],
            precio: []
        });
        this.setState({ productoName: event.target.value })
        this.render()
    }
    mostrarProductos(index) {
        return <Consumirproductos key={index} index={index} titulo={this.state.titulo[index]} precio={this.state.precio[index]} imagen={this.state.imagen[index]}></Consumirproductos>
    }

    render() {
        return (
            <div>
                <div className="demo">
                    <div>
                        <form className="form-search">
                            <input type="text" className="form-control form-text" placeholder="Buscar" value={this.state.palabraClave} onChange={this.handleEdit} size="15" />
                            {/* <input className="form-control form-text" placeholder="Buscar" onChange={this.Consumirproductos.handleEdit} value={this.Consumirproductos.state.productoName} size="15" type="text" /> */}
                            <span className="input-group-btn">
                                <button className="btn btn-primary">Buscar</button>
                                <i className></i>
                            </span>

                        </form>

                    </div>

                </div>
                <div>
                    {this.state.titulo.map((producto, index) => (
                        this.mostrarProductos(index)
                    ))}
                </div>
                )
            </div>



        )
    }
}