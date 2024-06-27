import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import '../styles/curso.css';
import { HeaderContext } from '../context/HeaderContext';
import { Link } from 'react-router-dom';

function Curso() {
    const {setIsNavListVis, setIsCarrinhoComprasVis} = useContext(HeaderContext);

    useEffect(() => {

        setIsNavListVis(false);
        setIsCarrinhoComprasVis(true);

        return() => {
            setIsNavListVis(true);
            setIsCarrinhoComprasVis(false);
        };
    }, [setIsNavListVis, setIsCarrinhoComprasVis]);
    
    return (
        <div className="body-curso">

            <Header />

            <div className="banner-curso">
                    <div className="wrapper-curso">
                        <div className="box-curso">
                            <h2 className="subtitle">Aprimore suas habilidades com nossos treinadores profissionais!</h2>
                        </div>
                    </div>
            </div>
            
            <div className="curso-info">
                <div className="wrapper-info">
                    <div className="detalhes-curso">
                        <h2 className="info-title">Curso KidsPRO</h2>
                        <p className="info-description">
                            Tenha aulas exclusivas com os melhores nomes do cenario de e-esports do país, tendo acesso a videoaulas, aulas particulares e muito mais pelo melhor preço do mercado. Vem ser KidsPRO!
                        </p>
                        <div className="info-compra">
                            <span className="info-preco">R$99,99</span>
                            <Link to='/carrinho'><button className="button-cart">Adicionar ao Carrinho</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Curso;
