import { Loader } from 'lucide-react-native'
import { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import Animated, {
  Easing,
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming
} from 'react-native-reanimated'

import { colors } from '@app/tokens'

export function LoaderAnimate() {
  const rotation = useSharedValue(0)

  useEffect(() => {
    rotation.set(
      withRepeat(
        withTiming(360, { duration: 1000, easing: Easing.linear }),
        -1,
        false
      )
    )

    return () => cancelAnimation(rotation)
  }, [rotation])

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: rotation.get() + 'deg' }]
  }))

  return (
    <View
      style={styles.loading}
      accessible
      accessibilityRole='progressbar'
      accessibilityLabel='Loading recommendations'
      accessibilityState={{ busy: true }}
    >
      <Animated.View style={animatedStyle}>
        <Loader
          color={colors.text.primary}
          size={32}
          strokeWidth={2}
        />
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
