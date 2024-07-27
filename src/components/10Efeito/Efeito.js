import { useState, useEffect } from "react"

const Efeito = () => {

    const [contador, setContador] = useState(0)
    const [isPar, setIsPar] = useState(true)

    useEffect(
        () => {
            if (contador % 2 === 0) setIsPar(true)
            else setIsPar(false)
        }, [contador]
    )

    return(
        <>
            <h3>Contador: {contador}</h3>
            <h3>É par: {isPar + ""}</h3>
            <button
                onClick={
                    () => setContador(anterior => anterior + 1)
                } 
            >
                Aumentar
            </button>
        </>
    )
}

export default Efeito