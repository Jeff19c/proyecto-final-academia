import React from "react";
import "../App.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () =>{
    return(
        <div >
            <div className="gradiente"> </div>
                <div className="footer">
                    <div className="column-footer">
                        <h2 > Integra Lopez</h2>
                        <div className="dos-columnas-footer">
                            <div className="footer-side">
                                <h3 className="txt-med">Información</h3>
                                <ul>
                                    <li className="txt-peq"><a href="/">Términos y condiciones</a></li>
                                    <li className="txt-peq"><a href="/">Blog</a></li>
                                </ul>
                            </div>
                            <div className="footer-side">
                                <h3 className="txt-med">Ayuda</h3>
                                <ul>
                                    <li className="txt-peq"><a href="/">Contacto</a></li>
                                    <li className="txt-peq"><a href="/">Politicas de devolución</a></li>
                                </ul>
                            </div>
                        </div>

                        <h5>©2024 por Acuario Integra López.</h5>
                    </div>
                    <div className="column-footer">
                            <div >
                                <FacebookIcon/>
                                <ShareRoundedIcon/>
                                <XIcon/>
                                <InstagramIcon/>
                            </div>
                            <br />
                            <h2 className="txt-med"> Boletín de ofertas</h2>
                            <p className="txt-peq">Registre su correo electrónico para que obtenga
                            ofertas especiales</p>
                            <input type="text" value="Correo electrónico" className="input-box-footer"/>
                            <button className="login-box-footer">Suscribirse</button>
                    </div>
                </div>
        </div>
    );

};

export default Footer;