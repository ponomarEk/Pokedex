import React, { useEffect } from 'react';
import './pokemonBlock.css'

const PokemonBlock = (props) => {
    const { pokemonInfo, types, getTypes, getPokemonProps } = props;

    let urlArr = pokemonInfo.url.split('/');
    let id = urlArr[urlArr.length - 2];

    useEffect(() => {
        getTypes(`https://pokeapi.co/api/v2/pokemon/${id}`)
        // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [id])

    return (
        <div className={'pokemon_block'} onClick={() => { getPokemonProps(`https://pokeapi.co/api/v2/pokemon/${id}`) }}>
            <div className={'avatar'}>
                <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt="" />
            </div>
            <span>{pokemonInfo.name}</span>
            <div className={'types'}>
                {
                    types.reduce((acc, curr) => {
                        if (+id === curr.id) {
                            const res = curr.types.map((el, i) => <span key={i}> {el.type.name} </span>)
                            acc = [...acc, ...res]
                        }
                        return acc;
                    }, [])
                }
            </div>
        </div>
    )
}

export default PokemonBlock;