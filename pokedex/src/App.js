import React, { useEffect } from 'react';
import Header from './Components/Header/header';
import CurrentPokemon from './Components/CurrentPokemon/currentPokemon';
import PokemonsList from './Components/PokemonList/pokemonList';
import LoadMoreButton from './Components/LoadMoreButton/loadMoreButton';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getData, getPokemonProps, getTypes } from './Redux/Actions/actions';
import './app.css';


const App = (props) => {
  const { getData,currentPokemon } = props;
  useEffect(
    () => {
      getData('https://pokeapi.co/api/v2/pokemon/?limit=12')
      // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, []
  )
  return (
    <div className={"App"}>
      <Header />
      <div className={'pokemons_render'}>
        <PokemonsList {...props} />
        { (currentPokemon!==null)?<CurrentPokemon currentPokemon={currentPokemon}/>:null}
      </div>
      <LoadMoreButton getData={getData} />
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    pokemons: state.pokemons,
    currentPokemon:state.currentPokemon,
    types: state.types
  };
}

const mapActionsToProps = (dispatch) => {
  return {
    getData: bindActionCreators(getData, dispatch),
    getTypes: bindActionCreators(getTypes, dispatch),
    getPokemonProps:bindActionCreators(getPokemonProps,dispatch)
  }
}
export default connect(mapStateToProps, mapActionsToProps)(App);