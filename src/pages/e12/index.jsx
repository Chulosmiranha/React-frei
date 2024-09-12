import { Top } from "../../components/Top/top.jsx";
import { Middle_Top } from "../../components/ex_info_center/ex_info_center.jsx";
import { useState } from "react";

import "./index.scss"

export default function E12() {
    //const [mais_velha, setMais_velha] = useState("")
    //const [mais_nova, setMais_nova] = useState("")
    //const [media, setMedia] = useState(0)
    //const [homem_maior30_nm, setHomem_maior30_nm] = useState(0)
    //const [mulher_menor18_nm, setMulher_menor18_nm] = useState(0)


    return (
        <div className="E12">
            <Top/>
            
            <Middle_Top titulo={"Exercício 12 - Comparador de pessoas"} contexto={"Implemente um programa em Javascript que leia o nome, a idade, e o sexo de várias pessoas."}/>
            <div className="Midle">
                <div className="Midle-left">
                    <form action="">
                        <div className="fields">
                            <h2>Nome</h2>
                            <input type="text"/>
                        </div>

                        <div className="fields">
                            <h2>Idade</h2>
                            <input className type="number" />
                        </div>

                        <div className="radio">
                            <h2>Sexo</h2>
                            <div className="part1">
                                <input type="radio" id="m" name="sexo"/>
                                <label className="labels" for="m">Masculino</label>

                                <input type="radio" id="f "name="sexo"></input>
                                <label className="labels" for="f">Feminino</label>
                            </div>
                        </div>
                    </form>

                    <div>
                        <h3>Pessoa mais velha: {}</h3>
                        <h3>Mulher mais jovem: {}</h3>
                        <h3>Média de idade: {}</h3>
                        <h3>Homens com mais de 30: {}</h3>
                        <h3>Mulheres com menos de 18: {}</h3>
                    </div>
                </div>

                <div className="Middle-right">
                    <h2>Pessoas</h2>
                    <hr />
                    <div className="cards">

                    </div>
                </div>
            </div>
        </div>
    )
}