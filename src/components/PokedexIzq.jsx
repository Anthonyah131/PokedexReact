import React from "react";

const PokedexIzq = (props) => {

  const pokeImage = props.pokeImage;
  const pokeData = props.pokeData;

  const onChange = (event)=>{
    props.onChange(event.target.value);
  }

  console.log(window.innerWidth);

  return (
    <div className="pokedexIzquierda">
        <div className="arribaIzquierda">
          <svg height="200" width="400" className="left-svg">
            <polyline
                className="polyIzq"
                points="0,100 70,100 90,63 395,63"
                //style="fill: none; stroke: black; stroke-width: 3"
            />
          </svg>
          <div className="contenedorLuces">
            <div className="lucesGrandes">
              <div className="luzGrande azul">
                <div className="reflejoGrande azulClaro"></div>
              </div>
            </div>
            <div className="lucesPequenas">
              <div className="luzPequena rojo">
                <div className="reflejoPequeno rojoClaro"></div>
              </div>
              <div className="luzPequena amarillo">
                <div className="reflejoPequeno amarilloClaro"></div>
              </div>
              <div className="luzPequena verde">
                <div className="reflejoPequeno verdeClaro"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="pokedexPantalla">
          <div className="pantalla">
            <img id="mainPantalla" src={pokeImage} alt="No Pokemon"/>
            <div id="nomid" className="infoPokemon">{pokeData[0]} : {pokeData[1]}</div>
          </div>
        </div>

        <div className="pokedexTexto">
          <input type="text" id="pokeName" className="nombre" onChange={onChange}/>
          <button onClick={props.fetchPokemon}>Buscar</button>
        </div>
    </div>
  );
};

export default PokedexIzq;
