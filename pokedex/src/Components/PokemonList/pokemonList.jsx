import React from 'react';
import './pokemonList.css';
import PokemonBlock from '../PokemonBlock/pokemonBlock';

const PokemonList = (props) => {
    const { pokemons, getPokemonProps, getTypes, types } = props;

    return (
        <div className={'pokemon_list'}>
            {
                (pokemons.length > 0) ?
                    pokemons.map((curr, i) => <PokemonBlock
                        key={i}
                        pokemonInfo={curr}
                        getTypes={getTypes}
                        getPokemonProps={getPokemonProps}
                        types={types}
                    />
                ) : null
            }
        </div>
    )
}

export default PokemonList;