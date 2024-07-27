const Produto = (props) => {
    
    let objJSON = {nome:"Kauã ", idade: 21, curso: " Engenharia de software ", notas: {nota1: 10, nota2: 9}, space: " "}
    
    return (
        <div>
            <h2>{objJSON.nome} 
                {objJSON.idade} 
                {objJSON.curso} 
                {objJSON.notas.nota1}
                {objJSON.space}
                {objJSON.notas.nota2}
            </h2>
            <h3>Nome: {props.nome}</h3>
            <h3>Categoria: {props.categoria}</h3>
            <h3>Preço: R$ {props.valor}</h3>
        </div>
    )
}

// const Produto = ({nome, categoria, valor})

export default Produto