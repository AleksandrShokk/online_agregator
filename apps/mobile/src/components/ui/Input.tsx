import { Eye, EyeClosed } from 'lucide-react-native'
import { useState } from 'react'
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  type TextInputProps,
  View
} from 'react-native'

import { colors, fontSize, radius, space } from '@app/tokens'

interface Props extends TextInputProps {
  error?: string
  isPassword?: boolean
}

export function Input({ error, isPassword, ...props }: Props) {
  const [isHidden, setIsHidden] = useState(isPassword)
  return (
    <View style={styles.root}>
      <View style={[styles.field, !!error && styles.fieldError]}>
        <TextInput
          {...props}
          style={[styles.input, !!error && styles.fieldError]}
          placeholderTextColor={colors.text.muted}
          secureTextEntry={isPassword && isHidden}
        />
        {isPassword && (
          <Pressable onPress={() => setIsHidden(v => !v)}>
            {isHidden ? (
              <EyeClosed
                color={colors.text.primary}
                size={20}
              />
            ) : (
              <Eye
                color={colors.text.primary}
                size={20}
              />
            )}
          </Pressable>
        )}
      </View>

      {!!error && <Text style={styles.error}>{error}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    marginBottom: space[4]
  },
  fieldError: {
    borderColor: colors.status.error
  },
  field: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: space[5],
    borderRadius: radius.full,
    borderWidth: 1,
    borderColor: colors.secondary
  },
  input: {
    flex: 1,
    color: colors.text.primary,
    fontSize: fontSize.base
  },

  error: {
    color: colors.status.error,
    fontSize: fontSize.sm,
    paddingHorizontal: space[2]
  }
})
