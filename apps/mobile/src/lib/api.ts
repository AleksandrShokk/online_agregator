import { configureApi } from "@app/api";

import * as SecureStore from 'expo-secure-store'
import { clearTokens, getRefreshToken, saveTokens } from "./token";
import { router } from "expo-router";
import { authTokenSchema } from "@app/schemas";

configureApi({
    baseUrl: process.env.EXPO_PUBLIC_API_URL!,
    getToken: () => SecureStore.getItemAsync('accessToken'),
    onUnautorized: async () => {
        await clearTokens()
        router.replace('/login')
    },
    onRefresh: async () => {
        const refreshToken = await getRefreshToken()
        if(!refreshToken) return false
        try{
            const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/auth/mobile/refresh`, {
                method: 'POST',
                headers:{
                    'Content-Type': 'applocation/json'
                },
                body:JSON.stringify({refreshToken})
            })
            if(!response.ok) return false

            const result = authTokenSchema.safeParse(await response.json())

            if(!result.success) return false
            await saveTokens(result.data.accessToken, result.data.refreshToken)
            return true
        }
        catch{
            return false
        }
    }
})