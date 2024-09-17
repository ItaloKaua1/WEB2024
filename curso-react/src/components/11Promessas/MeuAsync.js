import { useEffect, useState } from "react"

const MinhaPromessa = new Promise(
    (resolve, rejected) => {
        //computação de x segundos
        setTimeout(
            () => {
                //console.log("executado")
                const meuNumero = Math.floor(Math.random() * 10) + 1
                if (meuNumero % 2 === 0) resolve ("Deu certo, seu número é " + meuNumero)
                else rejected("Deu errado, seu número é: " + meuNumero)
            }, 5000
        )
    }
)

const ComponentePromessa = () => {

    const [resultado, setResultado] = useState("")


    async function apiGetPromessa() {
        try{
            const res = await MinhaPromessa
            setResultado(res)
        }catch(error){
            setResultado(error)
        }
    }

    useEffect(
        () => {
            apiGetPromessa()
        }, []
    )

    return (
        <div>
            <h3>Promessa com Async!</h3>
            <h4>Resultado: {resultado}</h4>
        </div>
    )
}

export default ComponentePromessa