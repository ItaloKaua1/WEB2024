import React, { useEffect, useState } from 'react';

const Questao04 = () => {
    // Estado para armazenar as capitais com menor e maior população
    const [capitais, setCapitais] = useState({
        menorPopulacao: [],
        maiorPopulacao: []
    });

    // Função que retorna uma Promise com os dados das capitais
    const fetchData = () => {
        return new Promise((resolve) => {
            const data = [
                {"capital":["Dublin"],"population":4994724},
                {"capital":["Nicosia"],"population":1207361},
                {"capital":["Madrid"],"population":47351567}
            ];
            resolve(data);
        });
    };

    // useEffect para buscar os dados ao montar o componente
    useEffect(() => {
        // Usando async-await para lidar com a Promise
        const getData = async () => {
            try {
                const data = await fetchData();

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

        getData();
    }, []);

    return (
        <div>
            <h2>Questão 04</h2>
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

export default Questao04;