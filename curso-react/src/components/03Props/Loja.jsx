import Produto from "./Produto"

const Loja = () => {
    return (
        <div>
            <h1>Supermercado Quixadá</h1>
            <hr />
            <Produto nome="Máquina de Lavar" categoria="Eletrodoméstico" valor={2300}/>
            <hr />
            <Produto nome="Panela Inox" categoria="Utensílio de Cozinha" valor={40}/>
            <hr />
            <Produto nome="Ventilador" categoria="Eletrodoméstico" valor={1250}/>
            <hr />
        </div>
    )
}

export default Loja