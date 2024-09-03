import { useState } from "react"

const Questao02 = () =>{
    const [frente, setIsFrente] = useState(true);

//   // URLs das imagens de frente e de costas do Pikachu
    const frenteImageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/514.png';
    const costaImageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/514.png';

    // Função para alternar a imagem entre frente e costas
    const alterar = () => {
        setIsFrente(prevIsFrente => !prevIsFrente);
    };

    return (
        <div>
            <h2>Questão 02</h2>
            {/* Renderiza a imagem com base no estado isFront */}
            <img src={frente ? frenteImageUrl : costaImageUrl} alt="Pokemon" />
            <br />
            {/* Botão para alternar a imagem */}
            <button onClick={alterar}>
                Alternar Imagem
            </button>
        </div>
    )
}

export default Questao02