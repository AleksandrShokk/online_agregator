import { zodResolver } from '@hookform/resolvers/zod'
import { router } from 'expo-router'
import { ChevronLeft } from 'lucide-react-native'
import { Controller, useForm } from 'react-hook-form'
import { Pressable, StyleSheet, Text, View } from 'react-native'

import { AUTH_FORM_CONTENT } from '@app/constants'

import { colors, fontSize, fontWeight, space } from '@app/tokens'

import { type TAuthForm, authSchema } from '@app/schemas'

import { Button } from '../ui/Button'
import { FloatingButton } from '../ui/FloatingButton'
import { Input } from '../ui/Input'
import { Screen } from '../ui/Screen'

interface Props {
  type: keyof typeof AUTH_FORM_CONTENT
  isPending: boolean
  error: unknown
  onSubmit: (data: TAuthForm) => void
}
export function AuthForm({ error, isPending, onSubmit, type }: Props) {
  const content = AUTH_FORM_CONTENT[type]

  const { control, handleSubmit } = useForm<TAuthForm>({
    resolver: zodResolver(authSchema)
  })

  return (
    <Screen edges={[]}>
      <FloatingButton
        icon={ChevronLeft}
        onPress={() => router.push('/')}
        side='left'
      />
      <View style={styles.root}>
        <Text style={styles.title}>{content.title}</Text>
        <Controller
          control={control}
          name='email'
          render={({ field, fieldState }) => (
            <Input
              placeholder='Email'
              autoCapitalize='none'
              keyboardType='email-address'
              value={field.value}
              onChangeText={field.onChange}
              error={fieldState.error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name='password'
          render={({ field, fieldState }) => (
            <Input
              placeholder='Password'
              autoCapitalize='none'
              secureTextEntry
              value={field.value}
              onChangeText={field.onChange}
              error={fieldState.error?.message}
              isPassword={true}
            />
          )}
        />

        {error instanceof Error && (
          <Text style={styles.error}>{error.message}</Text>
        )}
        <Button
          onPress={handleSubmit(onSubmit)}
          isDisabled={isPending}
        >
          {isPending ? content.pending : content.submit}
        </Button>
        <Pressable onPress={() => router.replace(content.footerHref)}>
          <Text style={styles.singIn}>
            {content.footerText}{' '}
            <Text style={styles.linkText}>{content.footerAction}</Text>
          </Text>
        </Pressable>
      </View>
    </Screen>
  )
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    color: colors.text.primary,
    fontSize: fontSize.xl,
    fontWeight: fontWeight.bold,
    textAlign: 'center',
    paddingBottom: space[5]
  },
  singIn: {
    color: colors.text['little-muted'],
    textAlign: 'center',
    paddingTop: space[5]
  },
  linkText: {
    fontSize: fontSize.sm,
    color: colors.text.primary,
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline'
  },
  error: {
    color: colors.status.error,
    fontSize: fontSize.sm,
    paddingHorizontal: space[2]
  }
})
