import { Top } from "../../components/Top/top.jsx"
import { Link } from "react-router-dom";
import { useState } from "react";
import "./index.scss";

export default function E07() {
const[cor1,setCor1]=useState('');
const[cor2,setCor2]=useState('');
const[certo,setCerto]=useState(false);
  
function primaria(){
  if(cor1 === "vermelho" || cor1 === "azul" || cor1 === "amarelo"){
    if(cor2 === "vermelho" || cor2 === "azul" || cor2 === "amarelo"){
    setCerto('Primária');
    }
    else{
      setCerto('Não Primária')
    }
  }
  else{
    setCerto('Não Primária')
  }
  }



  return (
    <div className="pagina-e07 pagina">
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

            <h2>Exercício 07 - Cores Primárias</h2>
          </div>
          <hr className="faixa" />
        </div>

        <div className="descricao">
          <p>
          Implementar um programa em javascript para verificar se duas cores são primárias
          </p>
        </div>

        <div className="formulario">
          <div className="campos">
            <div className="colum">
              <div className="campo">
                <label>Cor 1</label>

                <input type="text" placeholder="0" onChange={(e) => setCor1(e.target.value)}/>
              </div>

              <div className="campo">
                <label>Cor2</label>

                <input type="text" placeholder="0" onChange={(e) => setCor2(e.target.value)}/>
              </div>

       

               
            <button className="executar" onClick={primaria}> Executar </button>

            <h3>As duas cores são primárias? {certo} {''}</h3>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
