import React from 'react';
import './pokemonList.css';
import PokemonBlock from '../PokemonBlock/pokemonBlock';
import { useSelector } from 'react-redux';

const PokemonList = () => {
    const pokemons = useSelector(state => state.pokemons);
    return (
        <div className={'pokemon_list'}>
            {
                (pokemons.length > 0) ?
                    pokemons.map((curr, i) => <PokemonBlock
                        key={i}
                        pokemonInfo={curr}
                    />
                    ) : null
            }
        </div>
    )
}

export default PokemonList;