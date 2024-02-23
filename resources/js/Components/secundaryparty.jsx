// devolpment of secundary party for landyng page
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Andre from '../../../public/img/Andre.jpg';

const SecundaryParty = () =>{
    return(
        <>
        <div className="container-fluid p-5">
            <div className="row">
                <div className="col-6">

                    <div>
                        <h3 className="text-success">SOBRE MIM</h3>
                        <h1 className="tittleprimaryparty">André Luiz</h1>
                        <h1 className="tittleprimaryparty">Silvestre</h1>

                    </div>
                    <div className="paragrafo">
                        Me chamo André, sou treinador graduado em Educação Física. Estou aqui para te ajudar alcançar seus objetivos através do meu acompanhamento com um treino totalmente pesonalizado para você de acordo com suas individualidades. Juntos, iremos em busca dos objetivos e alcançar o fisico que você sempre sonhou. Venha fazer parte do time!
                    </div>
                </div>
                <div className="col-6">
                    <img src={Andre} className="imagepersonal" alt="Andre luiz silvestre" />

                </div>
                

            </div>

        </div>
        </>
    )
}
export default SecundaryParty;
