import { useContext } from "react"
import { PokemonContexto } from "./PokemonContexto"
import Incrementar from "./Incrementar"
import Decrementar from "./Decrementar"

const Imagem = () => {

    const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    const {id} = useContext(PokemonContexto)
    

    return (
        <div>
            <img src={url +  id + ".png"} alt="Pokemon" width={200}/>
            <Incrementar />
            <Decrementar />
        </div>
    )
}

export default Imagem