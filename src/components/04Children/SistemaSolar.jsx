import React from "react"

const SistemaSolar = ({children, galaxia}) => {
    return (
        <div>
            <h2>Sistema Solar da Galaxia {galaxia}</h2>
            <hr />
            {
                React.Children.map(
                    children,
                    (elemento) => {
                        return React.cloneElement(elemento,{galaxia})
                    }
                )
            }
        </div>
    )
}

export default SistemaSolar