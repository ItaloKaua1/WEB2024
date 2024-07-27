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
                </thead>
                <tbody>
                    {corpoTabela()}
                </tbody>
            </table>
        </div>
    )
}

export default ListarAluno