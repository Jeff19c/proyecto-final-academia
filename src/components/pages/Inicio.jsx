import React from "react";
import gatitoAbrigo from '../../img/gatito-abrigo.png';
import tiburoncin from '../../img/tiburoncin.png';
import menu1 from '../../img/menu1-gato.png';
import menu2 from '../../img/menu2-tortu.png';
import menu3 from '../../img/menu3-pez.png';
import reloj from '../../img/gato-reloj.png';


export const Inicio = () => {
 return (
    <div >
        <div className="margin-box ancho-completo">
            <h1 className="txt-gra txt-center">¿Buscás Algo en específico?</h1>
            <div className="align-h">
                <div className="tres-columnas inline">
                    <img src={menu1} alt="Gatito con abrigo naranja" style={{ width: '300px', height: 'auto' }} />
                </div>
                <div className="tres-columnas inline"> 
                    <img src={menu2} alt="Gatito con abrigo naranja" style={{ width: '300px', height: 'auto' }} />
                </div>
                <div className="tres-columnas inline">
                    <img src={menu3} alt="Gatito con abrigo naranja" style={{ width: '300px', height: 'auto' }} />
                </div>
            </div>
        </div>

        <div className="gradiente"> </div>
        <div className="margin-box-lados">
            <div className="dos-columnas inline">
                <img src={gatitoAbrigo} alt="Gatito con abrigo naranja" style={{ width: '400px', height: 'auto', margin:"0", padding:"0"}} />
            </div>
            <div className="dos-columnas align-v ">
                <div>
                    <h2 className="txt-med">Todo para tus mascotas</h2>
                    <ul className="txt-peq">
                        <li>Alimento</li>
                        <li>Juguetes</li>
                        <li>Adornos</li>
                        <li>Peceras</li>
                        <li>Medicamentos</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="Fondo-color margin-box flex">
            <div className="dos-columnas txt-white">
                <h3 className="txt-med">Sobre nosotros</h3>
                <p className="txt-peq">
                En Integra López somos una tienda especializada en mascotas, enfocada en gatos, tortugas y acuarios. Desde 2020, ofrecemos productos de calidad, asesoramiento personalizado y todo lo necesario para cuidar a tus mascotas. Ubicados en Guadalupe de San José, Costa Rica, nuestra misión es ayudarte a brindar lo mejor a tus compañeros. ¡Visítanos y descubre lo que tenemos para vos!
                </p>
            </div>
            <div className="dos-columnas">
                <img src={tiburoncin} alt="Pez dorado nadando" style={{ width: '400px', height: 'auto', position:"relative", top:"20%"  }} />
            </div>
        </div>
        <div className="margin-box-lados">
            <div className="dos-columnas inline">
                <img src={reloj} alt="Gatito dormido al lado de un reloj" style={{ width: '300px', height: 'auto', margin:"0", padding:"0"}} />
            </div>
            <div className="dos-columnas align-v ">
            <div>
                    <h2 className="txt-med">HORARIO</h2>
                    <p>De lunes a viernes de 9:00 am a 7:00 pm
                    Sábados y domingos de 9:00 am a 5:00 pm</p>
                </div>
            </div>
        </div>

    </div>
    
)
 
}

