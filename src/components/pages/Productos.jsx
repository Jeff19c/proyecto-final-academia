import React from "react";

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import comida1 from '../../img/comida1.png';
import comida2 from '../../img/comida2.png';
import comida3 from '../../img/comida3.png';
import gatitoAbrigo from '../../img/gatito-abrigo.png';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


export const Productos = () => {
 return (
    <div className="margin-box">
        <div className="venta-box">
            <div className="imagen-venta">
                <img src={comida1} alt="Bolsa de comida de gato" style={{ width: '100px', height: 'auto' }} />
            </div>
            <div className="texto-venta">
                <h3 className="txt-peq">Alimento de gato adulto Proplan-Purina</h3>
                <button className="btn-1" ><div className="align-v txt-peq"><div className="align-v txt-peq">Agregar al carrito<AddShoppingCartIcon sx={{marginLeft:"12px"}}/></div></div> </button>
            </div>
        </div>

        <div className="venta-box">
            <div className="imagen-venta">
                <img src={comida2} alt="Bolsa de comida de gato" style={{ width: '100px', height: 'auto' }} />
            </div>
            <div className="texto-venta">
                <h3 className="txt-peq">Alimento de gato adulto Ultima</h3>
                <button className="btn-1" ><div className="align-v txt-peq"><div className="align-v txt-peq">Agregar al carrito<AddShoppingCartIcon sx={{marginLeft:"12px"}}/></div></div> </button>
            </div>
        </div>

        <div className="venta-box">
            <div className="imagen-venta">
                <img src={comida3} alt="Imagen de gato con sueter" style={{ width: '100px', height: 'auto' }} />
            </div>
            <div className="texto-venta">
                <h3 className="txt-peq">Alimento de gato adulto NutraPro</h3>
                <button className="btn-1" ><div className="align-v txt-peq"><div className="align-v txt-peq">Agregar al carrito<AddShoppingCartIcon sx={{marginLeft:"12px"}}/></div></div> </button>
            </div>
        </div>
        

    </div>
 )
}

