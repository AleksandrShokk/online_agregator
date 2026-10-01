import { colors } from '@app/tokens/src/colors'
import { space } from '@app/tokens/src/layout'
import { fontSize } from '@app/tokens/src/typography'
import { StyleSheet } from 'react-native'

import { Screen } from '@/components/ui/Screen'
import { ScreenTitle } from '@/components/ui/ScreenTitle'

export default function Library() {
  return (
    <Screen>
      <ScreenTitle>Library</ScreenTitle>
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
