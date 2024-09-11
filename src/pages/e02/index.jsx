import { Link } from "react-router-dom";
import "./index.scss";
import { useState } from "react";


export default function E02() {
 const [valorKilos, setValorKilos] = useState(0);
 const [copiakilos, setCopiakilos] = useState(0);

  function converterKilo() {
    setValorKilos( copiakilos * 1000 );
    
}
  
  return (
    
    <div className="pagina-e02 pagina">
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
                    <Link to='/'>
                        <img className="voltar" src="./assets/images/voltar.png" alt="logo" />
                    </Link>
            
                    <h2>Exercício 02 - Converter em Kg/gramas</h2>
                      
                </div>
                <hr className="faixa"/>

            </div>

            <div className="faixa">
        </div>

        <div className="descricao">
            <p>
                Implementar um programa em Javascript para converter kilos em gramas.
            </p>

        </div>
            <div className="formulario">
                <div className="campos">
                    <div className="campo">
                        <label>Informe o valor em Kilos </label>
                        <input type="text" placeholder='0' onChange={(e) => setCopiakilos(e.target.value)} />
                    </div>
            
                    <button className="executar" onClick={converterKilo} > Executar </button>

                </div>
                <h3>
                    O resultado é de {valorKilos} Gramas
                </h3>
        </div>
      </div>
    </div>

  ); 
}

