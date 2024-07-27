import { useEffect, useState } from "react"
import axios from "axios"

const CovidAxios = () => {

    const [casos, setCasos] = useState(0)
    const [mortes, setMortes] = useState(0)

    useEffect(
        () => {
            axios.get("https://covid19-brazil-api.now.sh/api/report/v1")
            .then(response => {
                setCasos(response.data.data[8].cases)
                setMortes(response.data.data[8].deaths)
            })
            .catch(error => console.log(error))
        },[]
    )

    return (
        <div>
            <h1>Ceará</h1>
            <h3>Casos: {casos}</h3>
            <h3>Mortes: {mortes}</h3>
        </div>
    )
}

export default CovidAxios