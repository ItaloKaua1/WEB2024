import React from "react";
import './Home.css'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div id="homeDiv">
            <h1 id="homeName">Home</h1>
            <div>
                <Link to="/funcoesinternas">
                    <button className="buttonPages" id="funcoesButton">Calculadora</button>
                </Link>
                <Link to="/loja">
                    <button className="buttonPages" id="lojaButton">Loja</button>
                </Link>
                <Link to="/galaxia">
                    <button className="buttonPages" id="galaxiaButton">Galáxia</button>
                </Link>
                <Link to="/pai">
                    <button className="buttonPages" id="paiButton">Mensagem Pai</button>
                </Link>
                <Link to="/pokemon">
                    <button className="buttonPages" id="pokemonButton">Pokemon</button>
                </Link>
                <Link to="/compA">
                    <button className="buttonPages" id="compAButton">CompA</button>
                </Link>
                <Link to="/compContext">
                    <button className="buttonPages" id="contextButton">Context</button>
                </Link>
                <Link to="/savedata">
                    <button className="buttonPages" id="sdataButton">Save Data</button>
                </Link>
                <Link to="pokecont">
                    <button className="buttonPages" id="pokecontButton">Pokemon Contexto</button>
                </Link>
                <Link to="efeito">
                    <button className="buttonPages" id="efeitoButton">Efeito</button>
                </Link>
                <Link to="promessa">
                    <button className="buttonPages" id="promessaButton">Promessa</button>
                </Link>
                <Link to="/covidce">
                    <button className="buttonPages" id="covidButton" >Covid Ceará</button>
                </Link>
                <Link to="/principalredux">
                    <button className="buttonPages" id="reduxButton">Principal Redux</button>
                </Link>
            </div>
        </div>
    )
}

export default Home