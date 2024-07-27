import { useContext } from "react"
import { VariavelDeA } from "./MeuContexto"

const CompAA = () => {
    return (
        <div>
            <h3>A</h3>
            <VariavelDeA.Provider value={{nome: "Kauã", turma: "WEB"}}>
                <CompB/>
                <CompC/>
            </VariavelDeA.Provider>
            <hr />
        </div>
    )
}

const CompB = () => {

    //const contexto = useContext(VariavelDeA)
    const {nome} = useContext(VariavelDeA)

    return (
        <div>
            <h3>B</h3>
            <h3>{nome}</h3>
            <hr />
        </div>
    )
}

const CompC = () => {
    return (
        <div>
            <h3>B</h3>
            <CompD/>
            <hr />
        </div>
    )
}

const CompD = () => {

    //const contexto = useContext(VariavelDeA)
    const {turma} = useContext(VariavelDeA)

    return (
        <div>
            <h3>D</h3>
            <h3>{turma}</h3>
            <hr />
        </div>
    )
}

export {CompAA, CompB, CompC, CompD}