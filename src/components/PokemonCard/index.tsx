import React from 'react'
import { TouchableOpacity, StyleSheet, Image } from 'react-native'

import { Card } from 'components/Card'
import { IPokemon } from 'features/pokemon/home/types'
import COLORS from 'data/theme/Colors'

type Props = {
  data: IPokemon
  onPress: TouchableOpacity['props']['onPress']
}

const PokemonCard = ({ data, onPress }: Props) => {
  const { image, name, id } = data
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={() => onPress(data)}>
      <Card id={id} name={name} color="#fff" backgroundColor={COLORS.secondary}>
        <Image source={{ uri: image }} style={styles.img} />
      </Card>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  img: {
    width: 120,
    height: 120,
    position: 'absolute',
    bottom: -15,
    right: -10,
    zIndex: 1,
  },
})

export default React.memo(PokemonCard)
