import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { HeaderContext } from '../context/HeaderContext';
import '../styles/carrinho.css';

function Carrinho() {
    const {setIsNavListVis, setIsCarrinhoComprasVis} = useContext(HeaderContext);
    const carrinhoItens = [
    ];

    const total = carrinhoItens.reduce((acc, item) => acc + item.preco, 0);

    useEffect(() => {

        setIsNavListVis(false);
        setIsCarrinhoComprasVis(true);

        return() => {
            setIsNavListVis(true);
            setIsCarrinhoComprasVis(false);
        };
    }, [setIsNavListVis, setIsCarrinhoComprasVis]);

    return (
        <div className="body-cart">
            <Header />

            <div className="banner-cart">
                <div className="wrapper">
                    <div className="box">
                        <h1 className="title">Seu Carrinho de Compras</h1>
                    </div>
                </div>
            </div>

            <div className="content">
                <div className="cart-items">
                    {carrinhoItens.map(item => (
                        <div key={item.id} className="cart-item">
                            <p className="item-name">{item.nome}</p>
                            <p className="item-price">R${item.preco.toFixed(2)}</p>
                        </div>
                    ))}
                </div>
                <div className="total">
                    <p className="total-label">Total:</p>
                    <p className="total-amount">R${total.toFixed(2)}</p>
                </div>
                <button className="checkout-button">Finalizar Compra</button>
            </div>
        </div>
    );
}

export default Carrinho;
