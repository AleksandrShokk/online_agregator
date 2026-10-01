import type { LucideIcon } from 'lucide-react-native'
import { Pressable, StyleSheet, Text } from 'react-native'

import type { TButtonSize, TButtonVariant } from '@app/types'

import { colors, fontSize, fontWeight, radius, space } from '@app/tokens'

interface Props {
  children?: React.ReactNode
  variant?: TButtonVariant
  size?: TButtonSize
  icon?: LucideIcon
  isDisabled?: boolean
  onPress: () => void
}

const CONTENT_COLORS: Record<TButtonVariant, string> = {
  primary: colors.text.secondary,
  secondary: colors.text.primary
}
const ICON_SIZES: Record<TButtonSize, number> = {
  md: 18,
  lg: 20
}
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  isDisabled,
  onPress
}: Props) {
  const isIconOnly = !children && !!Icon
  const contentColor = CONTENT_COLORS[variant]
  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      style={({ pressed }) => [
        styles.root,
        variantStyles[variant],
        sizeSizes[size],
        isIconOnly && icononlySize[size],
        pressed && styles.pressed,
        isDisabled && styles.disabled
      ]}
    >
      {Icon && (
        <Icon
          size={ICON_SIZES[size]}
          color={contentColor}
        />
      )}
      {children && (
        <Text style={[styles.label, labelSizes[size], { color: contentColor }]}>
          {children}
        </Text>
      )}
    </Pressable>
  )
}
const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: space[2],
    borderRadius: radius.full
  },
  iconOnly: {
    paddingHorizontal: 0,
    aspectRatio: 1
  },
  pressed: { opacity: 0.7 },
  disabled: { opacity: 0.4 },
  label: { fontWeight: fontWeight.semiBold }
})
const variantStyles = StyleSheet.create({
  primary: {
    backgroundColor: colors.primary
  },
  secondary: {
    backgroundColor: colors.secondary
  }
})
const sizeSizes = StyleSheet.create({
  md: {
    height: 44,
    paddingHorizontal: space[5]
  },
  lg: {
    height: 56,
    paddingHorizontal: space[6]
  }
})

const icononlySize = StyleSheet.create({
  md: {
    width: 44
  },
  lg: {
    width: 56
  }
})
const labelSizes = StyleSheet.create({
  md: {
    fontSize: fontSize.sm
  },
  lg: {
    fontSize: fontSize.base
  }
})
