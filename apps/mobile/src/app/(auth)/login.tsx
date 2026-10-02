import { useQueryClient } from '@tanstack/react-query'
import { router } from 'expo-router'

import type { TAuthForm } from '@app/schemas'

import { useAuthMobileLogin } from '@app/api'

import { AuthForm } from '@/components/auth/AuthForm'

import { saveTokens } from '@/lib/token'

export default function Login() {
  const queryClient = useQueryClient()
  const { mutate, isPending, error } = useAuthMobileLogin({
    mutation: {
      onSuccess: async ({ data: { accessToken, refreshToken } }) => {
        await saveTokens(accessToken, refreshToken)
        queryClient.clear()
        router.replace('/profile')
      }
    }
  })
  const onSubmit = (data: TAuthForm) => {
    mutate({ data })
  }

  return (
    <AuthForm
      type='login'
      key={'login'}
      isPending={isPending}
      onSubmit={onSubmit}
      error={error}
    />
  )
}
