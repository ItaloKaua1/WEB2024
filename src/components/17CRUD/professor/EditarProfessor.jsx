import { useState, useEffect } from "react"
import ProfessorService from "../services/ProfessorService"

import { useParams, useNavigate } from "react-router-dom"

import axios from "axios"

const EditarProfessor = () => {

    const [nome, setNome] = useState("")
    const [curso, setCurso] = useState("")
    const [titulacao, setTitulacao] = useState("")
    const [ai, setAi] = useState({es:false, lc:false, mc:false, al:false}) //areas de interesse
    const [universidade, setUniversidade] = useState({ufc:false, ifce:false})

    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(
        () => {
            axios.get('http://localhost:3001/professores/?id=${id}')
            .then(
                (response) => {
                    const {nome, curso, titulacao, ai, universidade} = response.data[0]
                    setNome(nome)
                    setCurso(curso)
                    setTitulacao(titulacao)
                    setAi(ai)
                    setUniversidade(universidade)
                }
            )
            .catch(error => console.log(error))
        }
        ,
        []
    )

    const handleInputNome = (event) => {
        setNome(event.target.value)
    }

    const handleInputCurso = (event) => {
        setCurso(event.target.value)
    }

    const handleSelect = (event) => {
        setTitulacao(event.target.value)
    }

    const handleCheckbox = (event) => {
        setAi(
            {
                ...ai,
                [event.target.name]:event.target.checked
            }
        )
    }

    const handleRadio = (event) => {
        const reset = {ufc:false, ifce:false}
        setUniversidade({
            ...reset,
            [event.target.value]:event.target.checked
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const professorEditado = {nome, curso, titulacao, ai, universidade}
        axios.put('http://localhost:3001/professores/${id}', professorEditado)
        .then(
            (response) => {
                //console.log(response)
                navigate("/professor/listar")
            }
        )
        .catch(error => console.log(error))
    }

    return (
        <div className="page-content">
            <h1>Editar Professor</h1>
            <form className="form-content" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="inputNome">Nome</label>
                    <input className="form-control" type="text" name="nome" id="inputNome"
                        onChange={handleInputNome}
                        value={nome}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="inputCurso">Curso</label>
                    <input className="form-control" type="text" name="curso" id="inputCurso"
                        onChange={handleInputCurso}
                        value={curso}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Titulação</label>
                    <select
                        className="form-select"
                        value={titulacao}
                        id="selectTitulacao"
                        onChange={handleSelect}
                    >
                        <option value="GRADUACAO">GRADUAÇÃO</option>
                        <option value="MESTRADO">MESTRADO</option>
                        <option value="DOUTORADO">DOUTORADO</option>
                    </select>
                </div>

                <div>
                <label className="form-label">Áreas de Interesse</label>
                <fieldset className="scheduler-border">
                    <div className="form-check">
                        <input 
                        type="checkbox" 
                        id="idES"
                        className="form-check-input"
                        checked={ai.es}
                        name="es"
                        onChange={handleCheckbox}
                        />
                        <label htmlFor="idES" className="form-check-label">Engenharia de Software</label>
                    </div>
                    <div className="form-check">
                        <input 
                        type="checkbox" 
                        id="idLC"
                        className="form-check-input"
                        checked={ai.lc}
                        name="lc"
                        onChange={handleCheckbox}
                        />
                        <label htmlFor="idLC" className="form-check-label">Lógica Computacional</label>
                    </div>
                    <div className="form-check">
                        <input 
                        type="checkbox" 
                        id="idMC"
                        className="form-check-input"
                        checked={ai.mc}
                        name="mc"
                        onChange={handleCheckbox}
                        />
                        <label htmlFor="idMC" className="form-check-label">Matemática Computacional</label>
                    </div>
                </fieldset>
                </div>

                <div>
                <label className="form-label">Universidade de Origem</label>
                <fieldset className="scheduler-border">
                    <div className="form-check">
                        <input
                            id="idUFC"
                            className="form-check-input"
                            type="radio"
                            name="universidade"
                            checked={universidade.ufc}
                            value="ufc"
                            onChange={handleRadio}
                        />
                        <label 
                            htmlFor="idUFC"
                            className="form-check-label"
                        >
                            Universidade Federal do Ceará
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            id="idIFCE"
                            className="form-check-input"
                            type="radio"
                            name="universidade"
                            checked={universidade.ifce}
                            value="ifce"
                            onChange={handleRadio}
                        />
                        <label 
                            htmlFor="idIFCE"
                            className="form-check-label"
                        >
                            Instituto Federal do Ceará
                        </label>
                    </div>
                </fieldset>
                </div>

                <div className="div-button-submit">
                    <button type="submit" className="btn btn-primary" style={{marginLeft:0}}>Atualizar</button>
                </div>
            </form>
        </div>
    )
}

export default EditarProfessor