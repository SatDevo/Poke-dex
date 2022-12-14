import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native'
import { Pokeball } from 'components/Pokeball'
import COLORS from 'data/theme/Colors'
import Icon from 'react-native-vector-icons/FontAwesome'

type Props = {
  image: string
  name: string
  id: string
  types: any
  goBack: () => void
}

function DetailsScrenScene({ image, name, id, types, goBack }: Props) {
  return (
    <View style={{ ...styles.container, backgroundColor: COLORS.secondary }}>
      <View style={styles.square} />

      <View style={styles.cta}>
        <TouchableOpacity style={{ width: 30, height: 30 }} onPress={goBack}>
          <Icon
            name="arrow-left"
            color={COLORS.white}
            backgroundColor={'transparent'}
            onPress={goBack}
            size={30}
          ></Icon>
        </TouchableOpacity>
      </View>

      <View style={styles.wrapPicture}>
        <Pokeball size={280} position={40} />
        <Image source={{ uri: image }} style={styles.picture} />
      </View>

      <View style={styles.wrapText}>
        <Text style={styles.title}>{name}</Text>
        <Text style={[styles.badge, styles.id]}>{id}</Text>
      </View>

      <View style={styles.wrapTypes}>
        {types?.map(type => (
          <Text key={type.slot} style={styles.badge}>
            {type.type.name}
          </Text>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  dotsIcon: {
    position: 'absolute',
    top: -35,
    right: 100,
    opacity: 0.5,
    width: 150,
  },
  square: {
    position: 'absolute',
    top: -30,
    left: -50,
    width: 150,
    height: 150,
    transform: [{ rotate: '60deg' }],
    backgroundColor: 'rgba(255,255,255,.15)',
  },
  cta: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 60,
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  wrapPicture: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: '30%',
    width: '100%',
    zIndex: 1,
  },
  picture: {
    width: 280,
    height: 280,
  },
  wrapText: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  title: {
    color: '#ffffff',
    fontSize: 40,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  wrapTypes: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 10,
  },
  badge: {
    color: '#ffffff',
    textTransform: 'capitalize',
    backgroundColor: 'rgba(255,255,255,.15)',
    paddingHorizontal: 10,
    marginLeft: 10,
    borderRadius: 10,
  },
  id: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})

export default React.memo(DetailsScrenScene)
