import { Top } from "../../components/Top/top.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./index.scss";

export default function E09() {
  const [gramas, setGramas] = useState("");
  const [total, setTotal] = useState(0);
  function verifygrans() {
    if (gramas > 1000) {
      setTotal((35 + ((gramas/100) - 10) * 3).toFixed(2));
    } else {
      setTotal((3.5 * gramas) / 100);
    }
  }
  return (
    <div className="pagina-e09 pagina">
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

            <h2>Exercício 09 - Sorveteria</h2>
          </div>
          <hr className="faixa" />
        </div>

        <div className="descricao">
          <p>
            Implementar um programa em javascript que a calcule o total a se
            pagar em uma compra na sorveteria a partir do total de gramas
            comprado. O preco de 100g é R$3,50 mas se o total de gramas for a
            partir de 1kg. O preço de 100g diminui 50 centavos.
          </p>
        </div>

        <div className="formulario">
          <div className="campos">
            <div className="colum">
              <div className="campo">
                <label>Total de Grmas</label>

                <input
                  type="text"
                  placeholder="0"
                  onChange={(e) => setGramas(e.target.value)}
                />
              </div>

              <button className="executar" onClick={verifygrans}>
                Executar
              </button>

              <h3>Total a pagar é {total} </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
