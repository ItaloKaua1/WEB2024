import professores from "../data/db_professor"
import "../css/crud.css"

const ListarProfessor = () => {
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
                            <div>
                                <button type="button" className="btn btn-secondary">Editar</button>
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
        <div>
            <h1>Listar Professores</h1>
            <table className="table table-striped">
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
    )
}

export default ListarProfessor