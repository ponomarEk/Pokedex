import React from 'react';
import { useSelector } from 'react-redux';
import './currentPokemon.css'

const CurrentPokemon = () => {
    const currentPokemon = useSelector(state => state.currentPokemon);

    const getProperty = (property) => {
        let result;
        const searchProperty = (property) => {
            currentPokemon.stats.forEach(element => {
                if (element.stat.name === property) {
                    result = element.base_stat
                }
            });
        }
        switch (property) {
            case 'attack': searchProperty('attack'); break;
            case 'defense': searchProperty('defense'); break;
            case 'hp': searchProperty('hp'); break;
            case 'special-defense': searchProperty('special-defense'); break;
            case 'special-attack': searchProperty('special-attack'); break;
            case 'speed': searchProperty('speed'); break;
            default: result = 0;
        }
        return result;
    }
    return (
        <div className={'current_pokemon'}>
            <div className={'current_pokemon_image'}>
                <img src={`https://pokeres.bastionbot.org/images/pokemon/${currentPokemon.id}.png`} alt="" />
            </div>
            <h3>{currentPokemon.name} #{currentPokemon.id}</h3>
            <div className={'data_container'}>
                <div className={'wrapper'}>
                    <span className={'property'}>Type</span>
                    <span
                        className={'value'}>
                        {(currentPokemon.types.length > 1) ?
                            currentPokemon.types[0].type.name + ' ' + currentPokemon.types[1].type.name :
                            currentPokemon.types[0].type.name}
                    </span>
                </div>
                <div className={'wrapper'}>
                    <span className={'property'}>Attack</span>
                    <span className={'value'}>{getProperty('attack')}</span>
                </div>
                <div className={'wrapper'}>
                    <span className={'property'}>Defense</span>
                    <span className={'value'}>{getProperty('defense')}</span>
                </div>
                <div className={'wrapper'}>
                    <span className={'property'}>HP</span>
                    <span className={'value'}>{getProperty('hp')}</span>
                </div>
                <div className={'wrapper'}>
                    <span className={'property'}>SP Attack</span>
                    <span className={'value'}>{getProperty('special-attack')}</span>
                </div>
                <div className={'wrapper'}>
                    <span className={'property'}>SP Defense</span>
                    <span className={'value'}>{getProperty('special-defense')}</span>
                </div>
                <div className={'wrapper'}>
                    <span className={'property'}>Speed</span>
                    <span className={'value'}>{getProperty('speed')}</span>
                </div>
                <div className={'wrapper'}>
                    <span className={'property'}>Weight</span>
                    <span className={'value'}>{currentPokemon.weight}</span>
                </div>
                <div className={'wrapper'}>
                    <span className={'property'}>Total moves</span>
                    <span className={'value'}>{currentPokemon.moves.length}</span>
                </div>
            </div>
        </div>
    )
}

export default CurrentPokemon;