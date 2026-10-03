import { router } from 'expo-router'
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue
} from 'react-native-reanimated'

import { space } from '@app/tokens'

import { useDiscoverGetTrending } from '@app/api'

import { HomeHeader } from '@/components/home/HomeHeader'
import { HomeHeroSlider } from '@/components/home/HomeHeroSlider'
import { SectionCarousel } from '@/components/section-carousel/SectionCarousel'
import { TitleCard } from '@/components/title-card/TitleCard'
import { LoaderAnimate } from '@/components/ui/LoaderAnimate'
import { Screen } from '@/components/ui/Screen'

export default function Index() {
  const scrollY = useSharedValue(0)
  const { data, isPending } = useDiscoverGetTrending()
  const scrollHandler = useAnimatedScrollHandler(e => {
    scrollY.set(e.contentOffset.y)
  })

  const items = data?.data ?? []
  const heroItems = items.slice(0, 5)
  const trendingItems = items.slice(12, 20)
  const topPiksForYou = items.slice(5, 12)

  if (isPending)
    return (
      <Screen edges={[]}>
        <HomeHeader scrollY={scrollY} />
        <LoaderAnimate />
      </Screen>
    )

  return (
    <Screen edges={[]}>
      <HomeHeader scrollY={scrollY} />
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: space[28] }}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        {!!heroItems.length && <HomeHeroSlider items={heroItems} />}
        <SectionCarousel
          title='Top pics for you'
          onPressArrow={() => {}}
        >
          {topPiksForYou.map(title => (
            <TitleCard
              onPress={() => {
                router.push(`/title/${title.key}`)
              }}
              title={title}
              key={title.key}
            />
          ))}
        </SectionCarousel>
        <SectionCarousel
          title='Popular now'
          onPressArrow={() => {}}
        >
          {trendingItems.map(title => (
            <TitleCard
              onPress={() => {
                router.push(`/title/${title.key}`)
              }}
              title={title}
              key={title.key}
            />
          ))}
        </SectionCarousel>
      </Animated.ScrollView>
    </Screen>
  )
}
