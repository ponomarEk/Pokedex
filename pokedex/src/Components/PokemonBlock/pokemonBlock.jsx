import React, { useEffect } from 'react';
import './pokemonBlock.css'

const PokemonBlock = (props) => {
    const {pokemonInfo,types,getTypes,getPokemonProps}=props;
    let id='';
    for(let i=pokemonInfo.url.length-2;i>=0;i--){
        if(pokemonInfo.url[i]!=='/'){
            id+=pokemonInfo.url[i];
        }else{
            break;
        }
    }
    id=id.split('').reverse().join('');

    useEffect(()=>{
            getTypes(`https://pokeapi.co/api/v2/pokemon/${id}`)
        // eslint-disable-next-line react-hooks/exhaustive-deps 
    },[id])

    const showTypes = ()=>{
        if(types.length>0){
            const result = types.map((curr)=>{
                if(+id===curr.id){
                    const res = curr.types.map((el,i)=>{
                        return <span key = {i}> {el.type.name} </span>
                    })
                    return res;

                }else{
                    return null
                }
            })
            return result;
        }
    }

    return (
        <div className={'pokemon_block'} onClick={()=>{getPokemonProps(`https://pokeapi.co/api/v2/pokemon/${id}`)}}>
            <div className={'avatar'}>
                <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt="" />
            </div>
            <span>{pokemonInfo.name}</span>
            <div className={'types'}>
            {showTypes()}
            </div>
            

        </div>
    )
}

export default PokemonBlock;