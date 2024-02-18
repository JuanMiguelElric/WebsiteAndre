import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/index.css'

const PrimaryParty = ()=>{
    return(
        <>
        <div className="row">
            <div className="col-6"></div>
            <div className="col-6 p-5">
                <div className="d-flex flex-row-reverse text-white p-5 text-center">
                    
                        <h1 className="tittleprimaryparty">Resultados </h1>

                    
        
                    
                </div>
                <div className="d-flex flex-row-reverse text-white mr-5  text-center">
                    
                        <h1 className="tittleprimaryparty1">Poderosos </h1>

                    
        
                    
                </div>
                <div className="paragr">
                    <p>Conheça minha consultoria online e experimente transformações incríveis, através de um treino totalmente personalizado</p>

                    <br />
                    <button className="btn btn-primary"><strong>Saiba mais !</strong></button>
                </div>

            </div>
        </div>
        </>
    )
}
export default PrimaryParty;