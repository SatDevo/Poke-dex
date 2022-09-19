import React from 'react'
import { IPokemon } from 'features/pokemon/home/types'
import COLORS from 'data/theme/Colors'
import PokemonCard from 'components/PokemonCard'
import Spinner from 'components/Spinner'

import { SafeAreaView, StyleSheet, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

interface IProps {
  data?: IPokemon[]
  isFetching: boolean
  loadMore: () => void
  onPressDetails: (selectedPokemon: IPokemon) => void
}

function HomeScreenScene({
  data,
  isFetching,
  loadMore,
  onPressDetails,
}: IProps) {
  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={data}
          keyExtractor={pokemon => pokemon.id}
          renderItem={({ item }) => (
            <PokemonCard data={item} onPress={item => onPressDetails(item)} />
          )}
          showsVerticalScrollIndicator={false}
          onEndReached={loadMore}
          onEndReachedThreshold={0.9}
          ListFooterComponent={isFetching && <Spinner />}
          columnWrapperStyle={{ justifyContent: 'space-evenly' }}
          removeClippedSubviews
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  withoutResults: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
  },
  withoutResultText: {
    fontSize: 25,
    width: '80%',
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  withoutResultImg: {
    width: 150,
    height: 150,
    opacity: 0.9,
  },
})

export default HomeScreenScene
