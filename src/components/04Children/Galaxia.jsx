import Planeta from "./Planeta"
import SistemaSolar from "./SistemaSolar"

const Galaxia = ({nome}) => {
    return (
        <div>
            <h2>Galaxia {nome}</h2>
            <SistemaSolar galaxia = {nome}> 
                <Planeta nome="Mercúrio" tipo="Rochoso" ordem="1" />
                <hr />
                <Planeta nome="Vênus" tipo="Rochoso" ordem="2" />
                <hr />
                <Planeta nome="Terra" tipo="Rochoso" ordem="3" />
                <hr />
                <Planeta nome="Marte" tipo="Rochoso" ordem="4" />
                <hr />
                <Planeta nome="Júpiter" tipo="Gasoso" ordem="5" />
                <hr />
                <Planeta nome="Saturno" tipo="Gasoso" ordem="6" />
                <hr />
                <Planeta nome="Urano" tipo="Gasoso" ordem="7" />
                <hr />
                <Planeta nome="Netuno" tipo="Gasoso" ordem="8" />
            </SistemaSolar>
        </div>
    )
}

export default Galaxia