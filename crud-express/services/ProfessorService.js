const ProfessorModel = require("../models/ProfessorModel")
const professores = require("../data/data")

let id = 4
class ProfessorService {

    static listar(){
        return professores
    }

    static criar(data){
        let novoProfessor = new ProfessorModel(
            ++id,
            data.nome,
            data.curso,
            data.titulacao,
            data.ai,
            data.univerdade
        )
        professores.push(novoProfessor)
        return novoProfessor
    }

    static recuperar(id){
        for(let i=0; i<professores.length; i++){
            if(professores[i].id ==id) return professores[i]
        }
        return null
    }
}

module.exports = ProfessorService