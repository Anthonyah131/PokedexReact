import React, { useState } from "react";
import PokedexDer from "./PokedexDer";
import PokedexIzq from "./PokedexIzq";

const Pokedex = () => {
  const [pokeImage, setPokeImage] = useState("./Imagenes/Pikachu.png");
  const [pokeStat, setPokeStat] = useState(false);
  const [pokeType, setPokeType] = useState();
  const [pokeAlt, setPokeAlt] = useState();
  const [pokeInfo, setPokeInfo] = useState();
  const [pokeName, setPokeName] = useState("pikachu");
  const [pokeData, setPokeData] = useState(false);

  const onChange = (pokename) => {
    setPokeName(pokename);
  };


  const fetchPokemon = () => {
    setPokeName(pokeName.toLowerCase());
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
      if (res.status != "200") {
        setPokeImage("./pokemon-sad.gif");
      }
      else {
        return res.json();
      }
    }).then((data) => {
      if (data) {
        console.log(data);

        let pokeImg = data.sprites.front_default;
        setPokeImage(pokeImg);

        const stat = data.stats.map(item => item.base_stat);
        setPokeStat(stat);

        const type = data.types.map(item => item.type.name);
        setPokeType(type);

        let pokeAlt = data.height; 
        setPokeAlt(pokeAlt);

        const abilitiesName = data.abilities.map(item => item.ability.name);
        setPokeInfo(abilitiesName); 

        setPokeData([data.id, data.name]);
      }
    });
  }

  return (
    <div className="poke">
      <div className="pokedex">
        <PokedexIzq pokeImage={pokeImage} pokeData={pokeData} onChange={onChange} fetchPokemon={fetchPokemon}/>
        <PokedexDer pokeStat={pokeStat} pokeType={pokeType} pokeAlt={pokeAlt} pokeInfo={pokeInfo}/>
      </div>
    </div>
  );
};

export default Pokedex;
