import { colors } from '@app/tokens/src/colors'
import { space } from '@app/tokens/src/layout'
import { fontSize } from '@app/tokens/src/typography'
import { Link } from 'expo-router'
import { StyleSheet, Text } from 'react-native'

import { MEDIA_TYPES } from '@app/types'

import { Screen } from '@/components/Screen'

export default function Library() {
  return (
    <Screen>
      <Text>Library</Text>
      {MEDIA_TYPES.map(type => (
        <Link
          key={type}
          href={`/title/${type}/1`}
          style={styles.item}
        >
          <Text>{type}</Text>
        </Link>
      ))}
    </Screen>
  )
}
const styles = StyleSheet.create({
  item: {
    color: colors.text.primary,
    fontSize: fontSize.base,
    paddingVertical: space['3']
  }
})
