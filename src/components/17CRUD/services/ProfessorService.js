import axios from "axios"

const url = "http://localhost:3001/professores"

class ProfessorService {
    static getProfessorAxiosThenCatch = (callback) => {
        axios.get(url)
            .then(
                (response) => {
                    //console.log(response.data)
                    callback(response.data)
                }
            )
            .catch(error => console.log(error))
    }
} 

export default ProfessorService