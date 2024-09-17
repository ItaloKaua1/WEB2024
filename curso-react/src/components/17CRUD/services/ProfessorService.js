import axios from "axios"

//const url = "http://localhost:3001/professores"
const url = "http://localhost:3002/professores/"

class ProfessorService {
    static getProfessorAxiosThenCatch = (callback) => {
        axios.get(url+"listar")
            .then(
                (response) => {
                    callback(response.data)
                }
            )
            .catch(error => console.log(error))
    }

    static postProfessorAxiosThenCatch = (professor, callback) => {
        axios.post(url, professor)
        .then(
            (response) => {
                console.log(response)
                if (callback) callback(response.data) // Usando o callback
            }
        )
        .catch(error => console.log(error))
    }

    static postProfessorFetchThenCatch = (professor, callback) => {
        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(professor),
        })
        .then((response) => response.json())
        .then((json) => callback(json))
        .catch((error) => console.log(error))
    }

    static getProfessorById = (id, callback) => {
        axios.get('http://localhost:3001/professores/?id=${id}')
            .then(
                (response) => {
                    //const {nome, curso, titulacao, ai, universidade} = response.data[0]
                    callback(response.data[0])

                }
            )
            .catch(error => console.log(error))
    }

    //PUT SERVICES

    static updateProfessor = (id, professorEditado, callback) => {
        axios.put('http://localhost:3001/professores/${id}', professorEditado)
        .then(
            (response) => {
                //console.log(response)
                //navigate("/professor/listar")
                callback(response)
            }
        )
        .catch(error => console.log(error))
    }

    //Delete Services

    static deleteProfessor = (id, callback) => {
        axios.delete('http://localhost:3001/professores/${id}')
            .then(response => {
                alert("Professor apagador!")
                //navigate("/professor/lista")
                callback("ok!")
            })
            .catch (error => console.log(error))
    }

} 

export default ProfessorService