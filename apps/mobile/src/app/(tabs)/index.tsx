import { StyleSheet, Text, View } from 'react-native'

import { MEDIA_TYPES } from '@app/types'

import { TYPE_LABELS } from '@app/constants'

import { colors, fontSize, space } from '@app/tokens'

import { Screen } from '@/components/Screen'

export default function Index() {
  return (
    <Screen>
      <View>
        <Text style={styles.title}>Marathon red</Text>
        {MEDIA_TYPES.map(type => (
          <Text
            key={type}
            style={styles.item}
          >
            {TYPE_LABELS[type]}
          </Text>
        ))}
      </View>
    </Screen>
  )
}
const styles = StyleSheet.create({
  title: {
    color: colors.text.primary,
    fontSize: fontSize['2xl'],
    fontWeight: 'bold',
    paddingVertical: space['3']
  },
  item: {
    color: colors.text.primary,
    fontSize: fontSize.base,
    paddingVertical: space['3']
  }
})
