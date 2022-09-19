import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import COLORS from 'data/theme/Colors'

export default () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <ActivityIndicator color={COLORS.primary} size={30} />
    </View>
  )
}
