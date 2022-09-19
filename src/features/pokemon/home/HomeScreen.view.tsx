import React from 'react';
import {IPokemon} from 'features/pokemon/home/types'
import { useNavigation } from 'react-navigation-hooks'
import {DETAIL_PAGE} from "data/constants/screen"
import getPokemonAdapter from 'features/pokemon/home/HomeScreen.adapter'
import Spinner from 'components/Spinner';
import HomeScreenScene from 'features/pokemon/home/HomeScreen.scene'
import usePokemons from 'lib/hooks/usePokemons';

function HomeScreenView () {

  const navigation = useNavigation()
  const {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    loadMore
  } = usePokemons()
    
    const navigateTo = (pokemon: IPokemon) => 
        navigation.navigate(DETAIL_PAGE, { pokemon })
      
  if (isLoading || !data) {
    return <Spinner />
  }

  // TODO: isError || error

    return (
     <HomeScreenScene 
      data={getPokemonAdapter(data?.results)}
      isFetching={isFetching}
      loadMore={() => loadMore()}
      onPressDetails={(pokemon) => navigateTo(pokemon)}
     />
    );
  }
  

export default HomeScreenView
