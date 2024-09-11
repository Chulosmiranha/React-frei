import { Link } from 'react-router-dom'
import "./top.scss"

export function Top() {
    return (
        <header className="top">
            <div className="part1">
                <img src="./assets/images/logo.png" alt="logo" />
                <h1>React FreiS</h1>
            </div>

            <div className="part2">
                <Link to="/" className="link">Inicio</Link>
                <Link to="/sobre" className="link">Sobre</Link>
            </div>
        </header>
    )
}
