import React from "react";

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import comida1 from '../../img/comida1.png';
import comida2 from '../../img/comida2.png';
import gatitoAbrigo from '../../img/gatito-abrigo.png';


export const Blog = () => {
 return (
    <div className="margin-box">
        <div className="blog-box">
            <div className="imagen-blog">
                <img src={comida2} alt="Bolsa de comida de gato" style={{ width: '100px', height: 'auto' }} />
            </div>
            <div className="texto-blog">
                <h1 className="txt-med">¿Cuál es la mejor marca para un gatito con problema de riñoens?</h1>
                <p>Los problemas de riñones pueden presentarse en cualquier momento, sobre todo en animales de mayor edad, es por ello que siempre es bueno irnos preparando.</p>
                <button className="btn-1" ><div className="align-v"><div className="align-v">Leer más<KeyboardArrowRightIcon sx={{marginLeft:"12px"}}/></div></div> </button>
            </div>
        </div>

        <div className="blog-box">
            <div className="imagen-blog">
                <img src={comida1} alt="Bolsa de comida de gato" style={{ width: '100px', height: 'auto' }} />
            </div>
            <div className="texto-blog">
                <h1 className="txt-med">¿A qué edad es correcto cambiarle el alimento a mi gato?</h1>
                <p>A partir de los 6 meses de edad se puede hacer el cambio de  alimento que ayude a las fortalezas y defensas de nuestro compañero felino</p>
                <button className="btn-1" ><div className="align-v"><div className="align-v">Leer más<KeyboardArrowRightIcon sx={{marginLeft:"12px"}}/></div></div> </button>
            </div>
        </div>

        <div className="blog-box">
            <div className="imagen-blog">
                <img src={gatitoAbrigo} alt="Imagen de gato con sueter" style={{ width: '100px', height: 'auto' }} />
            </div>
            <div className="texto-blog">
                <h1 className="txt-med">¿Es correcto ponerle ropa a mi gato?</h1>
                <p>A todos nos encanta ver a nuestros hijos peludos luciendo ropa nueva, pero muy posiblemente no hayas considerado estos aspectos.</p>
                <button className="btn-1" ><div className="align-v"><div className="align-v">Leer más<KeyboardArrowRightIcon sx={{marginLeft:"12px"}}/></div></div> </button>
            </div>
        </div>

    </div>
 )
}

