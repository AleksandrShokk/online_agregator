import { useQueryClient } from '@tanstack/react-query'
import { router } from 'expo-router'

import { type TAuthForm } from '@app/schemas'

import { useAuthMobileRegister } from '@app/api'

import { AuthForm } from '@/components/auth/AuthForm'

import { saveTokens } from '@/lib/token'

export default function Register() {
  const queryClient = useQueryClient()
  const { mutate, isPending, error } = useAuthMobileRegister({
    mutation: {
      onSuccess: async ({ data: { accessToken, refreshToken } }) => {
        await saveTokens(accessToken, refreshToken)
        queryClient.clear()

        router.replace('/')
      }
    }
  })

  const onSubmit = (data: TAuthForm) => {
    mutate({ data })
  }

  return (
    <AuthForm
      type='register'
      key={'register'}
      onSubmit={onSubmit}
      isPending={isPending}
      error={error}
    />
  )
}
