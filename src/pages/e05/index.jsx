import { Top } from "../../components/Top/top.jsx"
import { Link } from "react-router-dom";
import { useState } from "react";
import "./index.scss";

export default function E05() {
  const [nota1, setNota1] = useState(0);
  const [nota2, setNota2] = useState(0);
  const [nota3, setNota3] = useState(0);
  const [media, setMedia] = useState(0);
  const [passou, setPassou] = useState(false);

  function sepassou() {
    let calc = (  (Number(nota1) + Number(nota2) + Number(nota3) )/3 );

    if ( calc >= 6 ) {
      setPassou('Passou!');
    }
    else if ( calc <6 ) {
      setPassou('Reprovad');  
    }

    setMedia( calc.toFixed(1) );

  }

  return (
    <div className="pagina-e05 pagina">
      <Top/>
      <div className="exercicio">
        <div className="titulo">
          <div className="texto">
            <Link to="/">
              <img
                className="voltar"
                src="./assets/images/voltar.png"
                alt="logo"
              />
            </Link>

            <h2>Exercício 05 - Média de Notas</h2>
          </div>
          <hr className="faixa" />
        </div>

      

        <div className="descricao">
          <p>
            Implemente um programa em Javascript para verificar se um aluno
            passou ou não, baseado em 3 notas, considerando que a média mínima
            para passar é 6.
          </p>
        </div>
        
        <div className="formulario">
          <div className="campos">
            <div className="colum">
              <div className="campo">
                <label>Nota 01</label>
                
                <input type="text" placeholder="0" onChange={(e) => setNota1(e.target.value)} />
              </div>

              <div className="campo">
                <label>Nota 02</label>

                <input type="text" placeholder="0" onChange={(e) => setNota2(e.target.value)} />
              </div>

              <div className="campo">
                <label>Nota 03</label>

                <input type="text" placeholder="0" onChange={(e) => setNota3(e.target.value)} />
              </div>
            </div>

            <button className="executar" onClick={sepassou}> {" "} Executar {" "} </button>

            <h3>
              A média do aluno é {media} O Aluno passou? {passou}{" "}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
