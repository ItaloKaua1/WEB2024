import axios from "axios"

const url = "http://localhost:3001/professores"

class ProfessorService {
    static getProfessorAxiosThenCatch = (callback) => {
        axios.get(url)
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
} 

export default ProfessorService