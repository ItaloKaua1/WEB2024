import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Home";

import CriarProfessor from "./professor/CriarProfessor";
import ListarProfessor from "./professor/ListarProfessor";
import EditarProfessor from "./professor/EditarProfessor";
import ListarAluno from "./aluno/ListarAluno";
import CriarAluno from "./aluno/CriarAluno";
import EditarAluno from "./aluno/EditarAluno";
import Questao01A from "./Prova/Questao01";
import Questao02 from "./Prova/Questao02";
import Questao03 from "./Prova/Questao03";
import Questao04 from "./Prova/Questao04";

const router = createBrowserRouter(
    [
        {
            path:"/",
            element: <Home/>,
            children:[
                {
                    path:"professor/listar",
                    element:<ListarProfessor/>
                },
                {
                    path:"professor/criar",
                    element:<CriarProfessor/>
                },
                {
                    path:"professor/editar",
                    element:<EditarProfessor/>
                },
                {
                    path:"aluno/listar",
                    element:<ListarAluno/>
                },
                {
                    path:"aluno/criar",
                    element:<CriarAluno/>
                },
                {
                    path:"aluno/editar",
                    element:<EditarAluno/>
                },
                {
                    path:"prova/questao01",
                    element:<Questao01A/>
                },
                {
                    path:"prova/questao02",
                    element:<Questao02 />
                },
                {
                    path:"prova/questao03",
                    element:<Questao03 />
                },
                {
                    path:"prova/questao04",
                    element:<Questao04 />
                }
            ]
        },
    ]
)

const Main = () => {
    return (
        <RouterProvider router={router}/>
    )
}

export default Main