import React from 'react';
import './currentPokemon.css'

const CurrentPokemon = (props) => {
    const { currentPokemon } = props;

    const getAttack = () => {
        let result;
        currentPokemon.stats.forEach(element => {
            if (element.stat.name === 'attack') {
                result = element.base_stat
            }
        });
        return result;
    }
    const getDefense = () => {
        let result;
        currentPokemon.stats.forEach(element => {
            if (element.stat.name === 'defense') {
                result = element.base_stat
            }
        });
        return result;
    }
    const getHP = () => {
        let result;
        currentPokemon.stats.forEach(element => {
            if (element.stat.name === 'hp') {
                result = element.base_stat
            }
        });
        return result;
    }
    const getSPDefense = () => {
        let result;
        currentPokemon.stats.forEach(element => {
            if (element.stat.name === 'special-defense') {
                result = element.base_stat
            }
        });
        return result;
    }
    const getSPAttack = () => {
        let result;
        currentPokemon.stats.forEach(element => {
            if (element.stat.name === 'special-attack') {
                result = element.base_stat
            }
        });
        return result;
    }
    const getSpeed = () => {
        let result;
        currentPokemon.stats.forEach(element => {
            if (element.stat.name === 'speed') {
                result = element.base_stat
            }
        });
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
                    <span className={'value'}>{getAttack()}</span>
                </div>
                <div className={'wrapper'}>
                    <span className={'property'}>Defense</span>
                    <span className={'value'}>{getDefense()}</span>
                </div>
                <div className={'wrapper'}>
                    <span className={'property'}>HP</span>
                    <span className={'value'}>{getHP()}</span>
                </div>
                <div className={'wrapper'}>
                    <span className={'property'}>SP Attack</span>
                    <span className={'value'}>{getSPAttack()}</span>
                </div>
                <div className={'wrapper'}>
                    <span className={'property'}>SP Defense</span>
                    <span className={'value'}>{getSPDefense()}</span>
                </div>
                <div className={'wrapper'}>
                    <span className={'property'}>Speed</span>
                    <span className={'value'}>{getSpeed()}</span>
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