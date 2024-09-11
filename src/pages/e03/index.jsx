import { Link } from "react-router-dom";
import "./index.scss";
import { useState } from "react";

export default function E03() {
  const [soma, setSoma] = useState(0);
  const [pequeno, setPequeno] = useState(0);
  const [medio, setMedio] = useState(0);
  const [grande, setGrande] = useState(0);

  function somaracai() {
    setSoma( 
      ( pequeno * 13.50 ) + 
      ( medio * 15.00 ) + 
      ( grande * 17.50 ));
  }
  return (
    <div className="pagina-e03 pagina">
      <div className="cabecalho">
        <div className="titulo">
          <img src="./assets/images/logo.png" alt="logo" />

          <h1>React FreiS</h1>
        </div>

        <div className="links">
          <Link to="/" className="link">
            Inicio
          </Link>

          <Link to="/sobre" className="link">
            Sobre
          </Link>
        </div>
      </div>

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

            <h2>Exercício 03 - Valor total por quantidade</h2>
          </div>
          <hr className="faixa" />
        </div>

        <div className="faixa"></div>

        <div className="descricao">
          <p>
            Implementar um programa em Javascript para calcular o total de uma
            venda de açaí a partir das quantidades compradas para cada tamanho:
            pequeno, médio e grande, sabendo que o valor do açaí é R$ 13,50; R$
            15,00 e R$ 17,50 respectivamente
          </p>
        </div>
        <div className="formulario">
          <div className="campos">
            <div className="row">
              <div className="campo">
                <label>Quantidade pequeno</label>
                <input
                  type="text" placeholder="0" onChange={(e) => setPequeno(e.target.value)}
                />
              </div>

              <div className="campo">
                <label>Quantidade médio</label>
                <input
                  type="text" placeholder="0" onChange={(e) => setMedio(e.target.value)} />
              </div>

              <div className="campo">
                <label>Quantidade grande</label>
                <input
                  type="text" placeholder="0" onChange={(e) => setGrande(e.target.value)} />
              </div>
            </div>
            <button className="executar" onClick={somaracai}>
              Executar
            </button>
          </div>
          <h3> O resultado é de R${soma} </h3>
        </div>
      </div>
    </div>
  );
}
