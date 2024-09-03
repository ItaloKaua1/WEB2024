import React, { useEffect, useState } from 'react';

const Questao03 = () => {
    // Estado para armazenar as capitais com menor e maior população
    const [capitais, setCapitais] = useState({
        menorPopulacao: [],
        maiorPopulacao: []
    });

    // Função assíncrona para buscar os dados
    const fetchData = async () => {
        try {
        const resposta = await fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population");
        const data = await resposta.json();

        // Ordenar os dados pelo campo population
        const sortedData = data.sort((a, b) => a.population - b.population);

        // Obter as duas capitais com menor população e as duas com maior população
        const menorPopulacao = sortedData.slice(0, 2).map(item => ({
            capital: item.capital[0],
            population: item.population
        }));
        const maiorPopulacao = sortedData.slice(-2).map(item => ({
            capital: item.capital[0],
            population: item.population
        }));

        // Atualizar o estado com os valores obtidos
        setCapitais({
            menorPopulacao: menorPopulacao,
            maiorPopulacao: maiorPopulacao
        });
        } catch (error) {
        console.log(error);
        }
    };

    // useEffect para executar a função de busca ao montar o componente
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
        <h2>Questão 03</h2>
        <h3>Capitais com as Menores População</h3>
        <ul>
            {capitais.menorPopulacao.map((item, index) => (
            <li key={index}>{item.capital} - População: {item.population} habitantes</li>
            ))}
        </ul>
        <h3>Capitais com as Maiores População</h3>
        <ul>
            {capitais.maiorPopulacao.map((item, index) => (
            <li key={index}>{item.capital} - População: {item.population} habitantes</li>
            ))}
        </ul>
        </div>
    );
    };

export default Questao03;