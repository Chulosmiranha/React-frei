import { Link } from "react-router-dom"
import "./ex_info_center.scss"

export function Middle_Top( { titulo, contexto } ) {
    return (
        <div className="Middle_Top">
            <div className="part1">
                <Link to="/"> <img className="voltar" src="./assets/images/voltar.png" alt="logo" /> </Link>
                <h1>{titulo}</h1>
            </div>
            
            <hr/>

            <div className="part2">
                <p>{contexto}</p>
            </div>
        </div>
    )
}