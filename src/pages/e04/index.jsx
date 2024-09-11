import { Top } from "../../components/Top/top.jsx"
import { Link } from "react-router-dom";
import { useState } from "react";
import "./index.scss";

export default function E04() {
  const [leitura, setLeitura] = useState(0);
  const [nomelivro, setNomeLivro] = useState("");
  const [savelivro, setSaveLivro] = useState("");
  const [paginas, setPaginas] = useState(0);
  const [tempo, setTempo] = useState(0);

  function calculo() {
    let total = paginas * tempo 
    total = total.toFixed(2)
    setLeitura( total );
    setSaveLivro( nomelivro );
 }

  return (
    <div className="pagina-e04 pagina">
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

            <h2>Exercício 04 - Leitura de livro</h2>
          </div>
          <hr className="faixa" />
        </div>

        <div className="faixa"></div>

        <div className="descricao">
          <p>
            Implementar um programa em Javascript que calcule o tempo que um
            livro será lido por uma pessoa a partir do nome do livro, do total
            de páginas e do tempo em
            <br /> segundos de leitura por página
          </p>
        </div>
        <div className="formulario">

          <div className="campos">

            <div className="colum">

              <div className="campo">
                
                <label>Nome do livro</label>
                <input type="text" placeholder="Digite" onChange={(e) => setNomeLivro(e.target.value)} />
              </div>

              <div className="campo">
                <label>Total de página</label>
                <input type="text" placeholder="0"  onChange={(e) =>setPaginas(e.target.value)}/>
              </div>

              <div className="campo">
                <label>Tempo em segundos de leitura</label>
                <input type="text" placeholder="0" onChange={(e) =>setTempo(e.target.value)}/>
              </div>

            </div>

            <button className="executar" onClick={calculo} >Executar </button>

            <div>
              {(savelivro === ""  ) ? <div></div> : <div>Você lera "{savelivro}" em {leitura / 60 / 60} horas </div>}
            </div>
          </div>
          
        </div>
        
      </div>
      
    </div>
  );
}
/*(((tempo*paginas) / 60)/60).toFixed(2)*/
