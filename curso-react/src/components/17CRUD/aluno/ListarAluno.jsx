import alunos from "../data/db_aluno"

const ListarAluno = () => {
    const corpoTabela = () => {
        const novoArray = alunos.map(
            (aluno) => {
                return (
                    <tr>
                        <th scope="row">{aluno.id}</th>
                        <td>{aluno.nome}</td>
                        <td>{aluno.curso}</td>
                        <td>{aluno.titulacao}</td>
                        <td>{aluno.IRA}</td>
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
            <h1>Listar Alunos</h1>
            <table className="table table-striped">
                <thead>
                    <th scope="col">ID</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Curso</th>
                    <th scope="col">Titulação</th>
                    <th scope="col">IRA</th>
                </thead>
                <tbody>
                    {corpoTabela()}
                </tbody>
            </table>
        </div>
    )
}

export default ListarAluno