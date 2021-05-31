import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonProps, getTypes } from '../../Redux/Actions/actions';
import './pokemonBlock.css'

const PokemonBlock = (props) => {
    const { pokemonInfo } = props;
    const types = useSelector(state => state.types);
    const dispatch = useDispatch()


    let urlArr = pokemonInfo.url.split('/');
    let id = urlArr[urlArr.length - 2];

    useEffect(() => {
        dispatch(getTypes(`https://pokeapi.co/api/v2/pokemon/${id}`))
        // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [id])

    return (
        <div className={'pokemon_block'} onClick={() => { dispatch(getPokemonProps(`https://pokeapi.co/api/v2/pokemon/${id}`)) }}>
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