import professores from "../data/db_professor"
import "../css/crud.css"
import axios from "axios"
import { useEffect,  useState } from "react"

import ProfessorService from "../services/ProfessorService"

const ListarProfessor = () => {

    const [professores, setProfessores] = useState([])

    useEffect(
        () => {
            //getProfessorAxiosThenCatch()
            //getProfessorAxiosAssyncAwait()
            //getProfessorFetchThenCatch()
            //getProfessorFetchAssyncAwait()

            ProfessorService.getProfessorAxiosThenCatch(
                (data) => {
                    setProfessores(data)
                }
            )

        }
        ,
        []
    )

    const getProfessorAxiosThenCatch = () => {
        axios.get("http://localhost:3001/professores")
            .then(
                (response) => {
                    //console.log(response.data)
                    setProfessores(response.data)
                }
            )
            .catch(error => console.log(error))
    }

    const getProfessorAxiosAssyncAwait = async() => {

        try{
            const response = await axios.get("http://localhost:3001/professores")
            setProfessores(response.data)
        }catch(error) {
            console.log(error)
        }
    }

    const getProfessorFetchThenCatch = () => {
        fetch("http://localhost:3001/professores")
        .then(
            (response) => {
                return response.json()
            }
        )
        .then(
            (json) => {
                setProfessores(json)
            }
        )
        .catch(error => console.log(error))
    }

    const getProfessorFetchAssyncAwait = async () => {
        try{
            const response = await fetch("http://localhost:3001/professores")
            const json = await response.json()
        setProfessores(json)
        } catch(error){
            console.log(error)
        }
    }

    const corpoTabela = () => {
        const novoArray = professores.map(
            (professor) => {
                return (
                    <tr>
                        <th scope="row">{professor.id}</th>
                        <td>{professor.nome}</td>
                        <td>{professor.curso}</td>
                        <td>{professor.titulacao}</td>
                        <td>
                            <div className="button-content">
                                <button type="button" className="btn btn-primary">Editar</button>
                                <button type="button" className="btn btn-danger">Apagar</button>
                            </div>
                        </td>
                    </tr>
                )
            }
        );
        return novoArray;
    };

    return (
        <div className="page-content">
            <h1>Listar Professores</h1>
            <div className="table-content">
                <table className="table table-striped table-bordered">
                    <thead>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Curso</th>
                        <th scope="col">Titulação</th>
                        <th scope="col"></th>
                    </thead>
                    <tbody>
                        {corpoTabela()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListarProfessor