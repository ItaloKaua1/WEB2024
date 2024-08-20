const Questao01A = () => {

    // Lista dada pela questão
    const lista = [
        {a:10, b: 3, c: 7},
        {a:5, b:-3, c: 9},
        {a:1, b:9, c: 40}
    ]

    return (
        <div>
            <h2>QUESTAO 01</h2>
            <Questao01B lista={lista}/> {/*Passando lista para Questao 01 B usando props*/}
        </div>
    ) 

}

function Questao01B (props){
    const {lista} = props
    //map usando math para pegar o maior(max) numero de cada objeto a, b e c
    const maioresNumeros = lista.map(obj => Math.max(obj.a, obj.b, obj.c))

    return(
        <div>
            <h3>Maiores números de cada objeto: </h3>
            <ul>
                {/* Teste numero maior */}
                {maioresNumeros.map((num, index)=>(
                    <li key={index}>{num}</li>
                ))}
            </ul>
        </div>
    )
}

export default Questao01A
