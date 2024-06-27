import '../styles/home.css'
import '../components/buttons.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import Footer from '../components/Footer'
import fallenFoto from '../assets/img/fallen.png'
import aspasFoto from '../assets/img/aspas.png'
import minervaFoto from '../assets/img/minerva.png'
import valorantLogo from '../assets/img/vl.png'
import lolLogo from '../assets/img/lol.png'
import csLogo from '../assets/img/cs.png'
import r6Logo from '../assets/img/r6.png'

function Home(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleForm = async (e) => {
        e.preventDefault();
        
        try {
            await axios.post('http://localhost:3001/form', { name, email, message });
            alert('Mensagem enviada com sucesso!');
        } catch (error) {
            console.error(error);
        }
        

    };
    
    
    return(
        <body className='body-home'>
    
            <Header />
        
            <section class="banner">
                <div class="wrapper">
                    <div class="box">
                        <h1 class="title">Kids PRO</h1>
                        <h2 class="subtitle">Videogame para <br />jovens</h2>
                    </div>
                    
                    <div class="navigation">
                        <a class="button" href="#sobre">Sobre</a>
                        <Link to="/curso" className="button">Cursos</Link>
                        
                    </div>   
                </div>       
            </section>   
            
            <section id="sobre" class="section">
                <h1 class="title -second">Sobre</h1>
                <div id="textformat">
                    <p class="text">Hoje, cada vez mais crianças e adolescentes estão inseridas no mundo dos games, e com essa ascensão, diversos jovens pretendem empenhar-se para jogar profissionalmente. Logo, com a plataforma da KidsPRO, pretendemos oferecer uma série de videoaulas e tutorias personalizadas, com nomes referências do e-sport, para facilitar o caminho destes jovens interessados no universo dos jogos eletrônicos. Logo abaixo temos uma tabela com algum dos nossos parceiros e os titulos que ja venceram!</p>
                </div>
                <div class="table-div">
                    <table>
                        <tr>
                            <th>Jogo</th>
                            <th>Treinador</th>
                            <th>Titulos</th>
                        </tr>
                        <tr>
                            <td>Counter Strike 2</td>
                            <td>Fallen</td>
                            <td>32</td>
                        </tr>
                        <tr>
                            <td>Valorant</td>
                            <td>Aspas</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>League of Legends</td>
                            <td>Minerva</td>
                            <td>20</td>
                        </tr>
                    </table>
                </div>
            </section>
        
            <section id="treinadores" class="card">
                <h1 class="title -second">Treinadores</h1>
        
                <div class="figures">
                    <figure class="card-fotos">
                        <img src={fallenFoto} alt="Imagem Fallen" />
                        <figcaption class="legendas">Fallen</figcaption>
                    </figure>
                    <figure class="card-fotos">
                        <img src={aspasFoto} alt="Imagem Aspas" />
                        <figcaption class="legendas">Aspas</figcaption>
                    </figure>
                    <figure class="card-fotos">
                        <img src={minervaFoto} alt="Imagem Minerva" />
                        <figcaption class="legendas">Minerva</figcaption>
                    </figure>
                </div>
            </section>
        
            <section id="jogos" class="section -games">
                <h1 class="title -second">Jogos</h1>
                <div class="container-jogos">
                    <div class="conjunto-jogo">
                        <img src={valorantLogo} alt="Valorant" />
                        <p class="nome-jogo">Valorant</p>
                    </div>
                    <div id="lol" class="conjunto-jogo">
                        <img src={lolLogo} alt="League of Legends" />
                        <p class="nome-jogo">League of Legends</p>
                    </div>
                    <div class="conjunto-jogo">
                        <img src={csLogo} alt="Counter Strike 2" />
                        <p class="nome-jogo">Counter Strike 2</p>
                    </div>
                    <div class="conjunto-jogo">
                        <img src={r6Logo} alt="Rainbow Six" />
                        <p class="nome-jogo">Rainbow Six</p>
                    </div>           
                </div>
            </section>
            
            <form id="contatos" class="form" onSubmit={handleForm}>
                <legend class="title -second">Contatos</legend>
                
                <label class="label-form" for="name">Nome</label>
                <input class="barra-input" id="name" type="text" onChange={(e) => setName(e.target.value)} required />
        
                <label class="label-form" for="email">Email</label>
                <input class="barra-input" id="email" type="email" onChange={(e) => setEmail(e.target.value)} required />
        
                <label class="label-form" for="message">Mensagem</label>
                <textarea class="barra-input -textarea" id="message" onChange={(e) => setMessage(e.target.value)} required></textarea>
        
                <button class="button -form" type="submit">Enviar</button>
            </form>

            <Footer />
    
        </body>
    )
}

export default Home