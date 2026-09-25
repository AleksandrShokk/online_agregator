import { router, useLocalSearchParams } from 'expo-router'
import { ChevronLeft } from 'lucide-react-native'
import { Text, View } from 'react-native'

import { FloatingButton } from '@/components/FloatingButton'
import { Screen } from '@/components/Screen'

export default function TitleDetail() {
  const { id, type } = useLocalSearchParams<{ id: string; type: string }>()
  {
    /* TODO
          Header
            Back button
          backdrop image
          title
          
          meta line
          description (add read more)
            age, yaer, duration, genre
          Primary action button
            none -> [Add to Library]
            want -> [Start]
            progress -> [Mark as done]
            dropped -> [Dropped]
            LONG PRESS -> open full actions
          Cast
          Actions (
            Add to watchlist, add to collection, to share, to like, 
          )
          Reviews
          

        */
  }
  return (
    <Screen>
      <FloatingButton
        icon={ChevronLeft}
        onPress={router.back}
        side='left'
      />
      <View
        style={{
          marginTop: 40
        }}
      >
        <Text>
          Title Detail {id} ({type})
        </Text>
      </View>
    </Screen>
  )
}
