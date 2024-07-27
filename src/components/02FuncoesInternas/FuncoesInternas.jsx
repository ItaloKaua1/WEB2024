const FuncoesInternas = () => {

    let numero1 = 10
    let numero2 = 5

    function somar(x,y) {
        return x + y
    }

    function subtrair(x,y) {
        return x - y
    }

    function multiplicar(x,y) {
        return x*y
    }

    const dividir = (x,y) => x/y

    return (
        <div>
            <h2>Calculadora</h2>
            <h3>O resultado da soma é = {somar(numero1, numero2)}</h3>
            <h3>O resultado da subtração é = {subtrair(numero1, numero2)}</h3>
            <h3>O resultado da multiplicação é = {multiplicar(numero1, numero2)}</h3>
            <h3>O resultado da divisao é = {dividir(numero1, numero2).toFixed(2)}</h3>
        </div>
    )
}

export default FuncoesInternas