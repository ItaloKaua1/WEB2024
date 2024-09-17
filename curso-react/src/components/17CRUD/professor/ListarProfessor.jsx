import "../css/crud.css"
import { useEffect,  useState } from "react"

import { Link } from "react-router-dom"

import ProfessorService from "../services/ProfessorService"

const ListarProfessor = () => {

    const [professores, setProfessores] = useState([])

    useEffect(
        () => {
            
            ProfessorService.getProfessorAxiosThenCatch(
                (data) => {
                    setProfessores(data)
                }
            )
        }
        ,
        []
    )

    const handleDelete = (id) => {
        if(window.confirm('Deseja excluir id = ${id}')) {
            ProfessorService.deleteProfessor(
                id,
                (response) => {
                    alert(response)
                }
            )
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
                            <Link
                                className="btn btn-primary"
                                to={`/professor/editar/${professor.id}`}
                            >
                                Editar
                            </Link>
                                <button 
                                    type="button" 
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(professor.id)}
                                >Apagar</button>
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