import { router } from 'expo-router'
import { ChevronLeft } from 'lucide-react-native'

import { FloatingButton } from '@/components/ui/FloatingButton'
import { Screen } from '@/components/ui/Screen'

export default function Settings() {
  return (
    <Screen>
      <FloatingButton
        icon={ChevronLeft}
        onPress={() => router.back()}
        side='left'
      />
    </Screen>
  )
}
