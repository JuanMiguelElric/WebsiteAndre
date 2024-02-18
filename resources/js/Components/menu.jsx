import React from "react";
import logo from "../../../public/img/ANDRE SILVESTRE TREINAMENTO LOGO.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/index.css'

const Menu = () =>{
    return(
        <>
            <nav className="navbar aoba navbar-inverse" >
                <div className="container-fluid">
                    <div className="navbar-header">
                        <div><img src={logo} style={{width:'7em'}} alt="" /></div>

                    </div>
                    <ul className="d-flex p-3">
                        <li className="d-sm-block mr-3">
                            Home
                        </li>
                        <li className="d-sm-block mr-3">
                            Como Funciona
                        </li>
                        <li className="mr-3">
                            Sobre mim
                        </li>
                        <li>
                            <button>Contato</button>
                        </li>
                    </ul>
                </div>

            </nav>
        </>
    )
}
export default Menu;