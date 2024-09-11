import { Top } from "../../components/Top/top.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./index.scss";

export default function E08() {
  const [temperatura, setTemperatura] = useState("");
  const [mensagem, setMensagem] = useState("");
  function verifytemp() {

    if (temperatura >= 41) {
      setMensagem("hipertermia");
    }
    else if (temperatura >= 39.6) {
      setMensagem("febre Alta");
    } 
    else if (temperatura >= 37.6) {
      setMensagem("febre");
    } 
    else if (temperatura >= 36) {
      setMensagem("normal");
    } 
    else {
      setMensagem("hipotermia");
    
    }
  }         

  return (
    <div className="pagina-e08 pagina">
      <Top />
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

            <h2>Exercício 08 - Temperatura</h2>
          </div>
          <hr className="faixa" />
        </div>

        <div className="descricao">
          <p>
            Implementar um programa em javascript que a partir da temperatura,
            avalie a situação da pessoa conforme a tabela. Ao final, apresente a
            classificação{" "}
          </p>
        </div>

        <div className="formulario">
          <div className="campos">
            <div className="colum">
              <table className="tabela-temperatura">
                <thead>
                  <tr>
                    <th>Média</th>
                    <th>Situação</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Maior ou igual a 41</td>
                    <td>Hipertemia</td>
                  </tr>
                  <tr>
                    <td>Maior ou igual a 39,6 e menor que 41</td>
                    <td>Febre Alta</td>
                  </tr>
                  <tr>
                    <td>Maior ou igual a 37,6 e menor que 39,6</td>
                    <td>Febre</td>
                  </tr>
                  <tr>
                    <td>Maior ou igual a 36 e menor que 37,6</td>
                    <td>Normal</td>
                  </tr>
                  <tr>
                    <td>Abaixo de 36</td>
                    <td>Hipotermia</td>
                  </tr>
                </tbody>
              </table>

              <div className="campo">
                <label>Temperatura</label>

                <input
                  type="text"
                  placeholder="0"
                  onChange={(e) => setTemperatura(e.target.value)}
                />
              </div>

              <button className="executar" onClick={verifytemp}>
                {" "}
                Executar{" "}
              </button>

              <h3>A situação para sua temperatura é {mensagem} </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
