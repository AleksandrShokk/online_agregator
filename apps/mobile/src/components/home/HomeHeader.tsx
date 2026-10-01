import MaskedView from '@react-native-masked-view/masked-view'
import { BlurView } from 'expo-blur'
import { LinearGradient } from 'expo-linear-gradient'
import { Bell } from 'lucide-react-native'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Animated, {
  type SharedValue,
  interpolate,
  useAnimatedStyle
} from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { colors, fontSize, fontWeight, space } from '@app/tokens'

export function HomeHeader({ scrollY }: { scrollY: SharedValue<number> }) {
  const insets = useSafeAreaInsets()
  const blusStyle = useAnimatedStyle(() => ({
    opacity: interpolate(scrollY.get(), [0, 80], [0, 1], 'clamp')
  }))
  return (
    <View
      style={styles.root}
      pointerEvents='box-none'
    >
      <Animated.View
        pointerEvents='none'
        style={[styles.blurLayer, blusStyle]}
      >
        <MaskedView
          style={StyleSheet.absoluteFill}
          maskElement={
            <LinearGradient
              colors={['rgba(0,0,0,1)', 'rgba(0,0,0,0.85)', 'rgba(0,0,0,0)']}
              locations={[0, 0.4, 1]}
              style={StyleSheet.absoluteFill}
            />
          }
        >
          <BlurView
            intensity={80}
            tint='systemChromeMaterialDark'
            style={StyleSheet.absoluteFill}
          />

          <View style={styles.overlay} />
        </MaskedView>
      </Animated.View>
      <View style={[styles.inner, { paddingTop: insets.top + space[2] }]}>
        <Text style={styles.logo}>VGA</Text>

        <Pressable hitSlop={12}>
          <Bell color={colors.text.primary} />
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    overflow: 'visible'
  },
  blurLayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 140
  },

  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0, 0.7)'
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: space['layout-horizontal'],
    paddingBottom: space[4]
  },
  logo: {
    color: colors.text.primary,
    fontSize: fontSize['2xl'],
    fontWeight: fontWeight.bold,
    textShadowOffset: { width: 0, height: 1 },
    textShadowColor: 'rgba(0,0,0,0.25)',
    textShadowRadius: 1
  }
})
