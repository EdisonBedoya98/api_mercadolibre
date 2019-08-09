import React, { Component } from 'react'
import './Consumir_productos.scss';
import Consumirproductos from './Consumir_productos';
import Table from 'react-bootstrap/Table'





export default class vista extends Component {
    state = {
        urlApi: 'https://api.mercadolibre.com/sites/MCO/search?q=',
        urlApiSeller: "https://api.mercadolibre.com/users/",
        productoName: '',
        titulo: [],
        imagen: [],
        precio: [],
        sellerName: []
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
        const { urlApi, productoName,urlApiSeller } = this.state;
        const resp = await fetch(urlApi + productoName);
        const data = await resp.json();
        let respSeller
        let dataSeller 

        try {
            for (let index = 0; index < data.results.length; index++) {
                respSeller = await fetch(urlApiSeller +data.results[index].seller.id );
                dataSeller = await respSeller.json();
                this.setState({
                    titulo: this.state.titulo.concat(data.results[index].title),
                    imagen: this.state.imagen.concat(data.results[index].thumbnail),
                    precio: this.state.precio.concat(data.results[index].price),
                    sellerName: this.state.precio.concat(dataSeller.nickname)
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
            precio: [],
            sellerName: []
        });
        this.setState({ productoName: event.target.value })
        
    }
    mostrarProductos(index) {
        if (((index + 1) % 5) !== 0) {
            return (
                <td key={index}>
                    <Consumirproductos key={index} index={index} titulo={this.state.titulo[index]} precio={this.state.precio[index]} sellerName={this.state.sellerName[index]} imagen={this.state.imagen[index]}></Consumirproductos>
                </td>

            )

        } else {
            return (
                <tr>
                </tr>


            )

        }


    }


    render() {
        return (

            <div >

                <div className="demo" >
                    <form className="form-search">
                        <input type="text" placeholder="Buscar" value={this.state.palabraClave} onChange={this.handleEdit} size="15" />
                      
                        <span className="input-group-btn">
                            <button className="btn btn-primary">Buscar</button>
                            <i className></i>
                        </span>
                    </form>
                </div>
                <div >
                    <div>
                        <Table responsive="sm">
                            <tbody>
                                {this.state.titulo.map((producto, index) => (
                                    this.mostrarProductos(index)
                                ))}
                            </tbody>
                        </Table>
                    </div>


                </div>
            </div>



        )
    }
}