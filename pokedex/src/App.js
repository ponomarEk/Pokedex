import React, { useEffect } from 'react';
import Header from './Components/Header/header';
import CurrentPokemon from './Components/CurrentPokemon/currentPokemon';
import PokemonsList from './Components/PokemonList/pokemonList';
import LoadMoreButton from './Components/LoadMoreButton/loadMoreButton';
import Preloader from './Components/Preloader/preloader';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getData } from './Redux/Actions/actions';
import './app.css';


const App = () => {

  const isFetching = useSelector(state => state.isFetching);
  const currentPokemon = useSelector(state => state.currentPokemon);
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(getData('https://pokeapi.co/api/v2/pokemon/?limit=12'))
      // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, []
  )
  return (
    <div className={"App"}>
      <Header />
      <div className={'pokemons_render'}>
        {isFetching ? <Preloader /> : null}
        <PokemonsList />
        {(currentPokemon) ? <CurrentPokemon /> : null}
      </div>
      <LoadMoreButton />
    </div>
  );
}

export default connect()(App);