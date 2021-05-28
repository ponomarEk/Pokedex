import React from 'react';
import './pokemonList.css';
import PokemonBlock from '../PokemonBlock/pokemonBlock';

const PokemonList = (props) => {
    const { pokemons,getPokemonProps,getTypes ,types,clearTypesArray} = props;
    const renderPokemons = () => {
        if (pokemons !== undefined) {
            const mapped = pokemons.map((curr, i) => {
                return <PokemonBlock
                    key={i}
                    pokemonInfo={curr}
                    getTypes={getTypes}
                    getPokemonProps={getPokemonProps} 
                    clearTypesArray={clearTypesArray}
                    types={types}
                    />
            })
            return mapped;
        }
    }
    return (
        <div className={'pokemon_list'}>
            {renderPokemons()}
        </div>
    )
}

export default PokemonList;