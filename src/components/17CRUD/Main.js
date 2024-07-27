import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Home";

import CriarProfessor from "./professor/CriarProfessor";
import ListarProfessor from "./professor/ListarProfessor";
import EditarProfessor from "./professor/EditarProfessor";
import ListarAluno from "./aluno/ListarAluno";
import CriarAluno from "./aluno/CriarAluno";
import EditarAluno from "./aluno/EditarAluno";

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