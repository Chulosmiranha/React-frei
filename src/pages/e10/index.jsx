import { Card } from "../../components/ex10_card/card.jsx";
import { Top } from "../../components/Top/top.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./index.scss";

export default function E10() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [card, setCard] = useState([]);

  function calcweight() {
    let imc = peso / (altura ** 2);
    let situa = "";

    if (imc > 25) {
      situa = "Acima do peso";
    } else if (imc >= 18.5) {
      situa = "Peso normal";
    } else {
      situa = "Abaixo do peso";
    }

    const novoCard = {
      altura,
      peso,
      situacao: situa,
    };


    setCard([...card, novoCard]);
  }


  function removerItem(index) {
    const novocard = card.filter((_, i) => i !== index);
    setCard(novocard);
  }

  return (
    <div className="pagina-e10 pagina">
      <Top />
      <div className="exercicio">
        <div className="titulo">
          <div className="texto">
            <Link to="/">
              <img className="voltar" src="./assets/images/voltar.png" alt="logo" />
            </Link>
            <h2>Exercício 10 - Cálculo de IMC com histórico</h2>
          </div>
          <hr className="faixa" />
        </div>

        <div className="descricao">
          <p>
            Implemente um programa em Javascript que a partir da altura e do peso
            de uma pessoa, calcule o IMC e avalie a faixa correspondente na
            tabela. Ao final, apresente o IMC e a situação.
          </p>
        </div>
        <div className="middle-center">
          <div className="formulario">
            <div className="campos">
              <div className="colum">
                <div className="campo">
                  <div className="altura_peso">
                    <label>Altura</label>
                    <input
                      type="number"
                      placeholder="0"
                      value={altura}
                      onChange={(e) => setAltura(e.target.value)}
                    />
                  </div>

                  <div className="altura_peso">
                    <label>Peso</label>
                    <input
                      type="number"
                      placeholder="0"
                      value={peso}
                      onChange={(e) => setPeso(e.target.value)}
                    />
                  </div>
                </div>
                <button className="executar" onClick={calcweight}>
                  Executar
                </button>
              </div>
            </div>
          </div>
          <div className="card-container">
            {card.map((item, index) => (
              <Card
                key={index}
                altura={item.altura}
                peso={item.peso}
                situa={item.situacao}
                onDelete={() => removerItem(index)}
              />
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
