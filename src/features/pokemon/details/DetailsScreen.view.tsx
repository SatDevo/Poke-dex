import React, { useCallback } from 'react'
import { StyleSheet, View, BackHandler} from 'react-native'
import usePokemon from 'lib/hooks/usePokemon'
import { useNavigation } from 'react-navigation-hooks'
import Spinner from 'components/Spinner'
import DetailsScreen from 'features/pokemon/details/DetailsScreen.scene'
import { useFocusEffect } from 'react-navigation-hooks'

function DetailsScrenView() {
  const navigation = useNavigation()
  const pokemon = navigation.state?.params?.pokemon
  const { data, status } = usePokemon(pokemon)


  // Native back handler
  useFocusEffect(
    useCallback(() => {
      BackHandler.addEventListener('hardwareBackPress', onPressBackButton)
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', onPressBackButton)
      }
    }, []),
  )
  const onPressBackButton = () => {
    navigation.goBack(null)
    return true
  }

  if (status === 'loading') {
    return <Spinner />
  }

  // TODO: isError || error

  return (
    <View style={styles.container}>
      <DetailsScreen
        image={pokemon.image}
        name={pokemon.name}
        types={data?.about?.types}
        id={pokemon?.id}
        goBack={() => onPressBackButton()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})

export default DetailsScrenView
