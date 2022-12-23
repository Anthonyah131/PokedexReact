import React from "react";

const PokedexDer = (props) => {

    const pokeStat = props.pokeStat;
    const pokeType = props.pokeType;
    const pokeAlt = props.pokeAlt;
    const pokeInfo = props.pokeInfo;

  return (
    <div id="pokedexDerecha">
        <div className="arribaDerecha">
            <svg height="100%" width="100%">
                <polyline
                className="polyDer1"
                points="0,0 0,68 138,68 158,103 250,103 10000,0 0,0"
                //style="fill: #f2f2f2; stroke: none; stroke-width: 3"
                />
                <polyline 
                className="polyDer2"
                points="0,68 138,68 158,103 400,103"
                //style="fill: none; stroke: black; stroke-width: 3"
                />
            </svg>
        </div>

        <div className="pantallaDerecha">
            <div id="pantallaId" className="pantallaD">
                <div id="abilitiesPantalla">{pokeInfo}</div>
                <div className="statsContenedor">
                <div id="pokeVida" className="stat">HP: <br/>{pokeStat[0] ? pokeStat[0] : ""}</div>
                <div id="pokeAtaque" className="stat">Ata: <br/>{pokeStat[1] ? pokeStat[1] : ""}</div>
                <div id="pokeDefensa" className="stat">Def: <br/>{pokeStat[2] ? pokeStat[2] : ""}</div>
                <div id="pokeAtaEspecial" className="stat">AtaE: <br/>{pokeStat[3] ? pokeStat[3] : ""}</div>
                <div id="pokeDefEspecial" className="stat">DefE: <br/>{pokeStat[4] ? pokeStat[4] : ""}</div>
                <div id="pokeVelocidad" className="stat">Vel: <br/>{pokeStat[5] ? pokeStat[5] : ""}</div>
                </div>
            </div>
        </div>

        <div className="contenedorBotones">
            <div className="botonAzul"></div>
            <div className="botonAzul"></div>
            <div className="botonAzul"></div>
            <div className="botonAzul"></div>
            <div className="botonAzul"></div>
            <div className="botonAzul"></div>
            <div className="botonAzul"></div>
            <div className="botonAzul"></div>
            <div className="botonAzul"></div>
            <div className="botonAzul"></div>
        </div>

        <div className="pantallaAbajo">
            <div id="dato1" className="pantallaPequena">{pokeType}</div>
            <div id="dato2" className="pantallaPequena">Alt: {pokeAlt}</div>
        </div>
    </div>
  );
};

export default PokedexDer;
