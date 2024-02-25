// desenvolvimento da terceira parte da landing page 
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import halter from "../../../public/img/halter.png"
import postura from "../../../public/img/postura.png"
import medida from "../../../public/img/fitametrica.png"

const TerceiraParty = () =>{
    return(
        <>
            <div className="terceirabackground">
                <div className="container-fluid p-5">

                    <div className="service p-5 ">
                        <h2 className="titleservice">Serviços</h2>
                        <div className="d-flex p-3">
                            <div className="cardservice mr-5">
                                <div className="d-flex ml-5  justify-content-center">
                                    <img src={halter} className="ml-3" alt="" />

                                </div>
                                <div>
                                    <div className="mb-4">
                                       <h4>Hipertrofia</h4>

                                    </div>


                                    <ul className="verificado">
  
                                        <li className="pa mt-3">Massa muscular</li>
                                        <li className="pa mt-3">Treinos personalizados para maximizar seus resultados</li>
                                        <li className="pa mt-3">Acompanhamento especializado para otimizar seu progresso</li>
                                    </ul>
                                </div>
                                
                                
                            </div>
                            <div className="cardservice mr-5">
                                <div className="d-flex pl-3 pt-5 justify-content-center">
                                  <img src={postura} alt="" />

                                </div>
                                <div>
                                    <div>
                                       <h4>Correção Postural</h4>

                                    </div>
                                    <ul className="verificado">
                                        <li className="pa mt-3">Avaliação postural e funcional</li>
                                        <li className="pa mt-3">Exercicios especificos para o realinhamento postural e equilibrio muscular</li>
                                        <li className="pa mt-3">Orientações práticas para melhorar sua postura no dia a dia </li>
                                    </ul>
                                </div>

                                
                            </div>
                            <div className="cardservice ">
                                <div className="d-flex pt-5 justify-content-center ">
                                    <img src={medida} alt="" />

                                </div>
                                <div className="mt-4 ">
                                    <div>
                                       <h4> Emagrecimento</h4>

                                    </div>
                                    <ul className="verificado">
                                        <li className="pa mt-3">Perda de gordura de maneira saudável</li>
                                        <li className="pa mt-3">Suporte continuo para garantir o seu sucesso</li>
                                        <li className="pa mt-3">Acesso a uma comunidade de apoio</li>
                                    </ul>
                       
                                </div>
                                
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </>

    );
}
export default TerceiraParty;