import { router } from 'expo-router'
import { Bell, CreditCard, Heart, Users } from 'lucide-react-native'

export const PROFILE_MENU = [
  {
    icon: CreditCard,
    label: 'Subscription',
    value: 'Free',
    onPress: () => router.push('/')
  },
  {
    icon: Heart,
    label: 'Watchlist',
    onPress: () => router.push('/library')
  },
  {
    icon: Users,
    label: 'Friends',
    onPress: () => router.push('/')
  },
  {
    icon: Bell,
    label: 'Notifications',
    onPress: () => router.push('/')
  }
]