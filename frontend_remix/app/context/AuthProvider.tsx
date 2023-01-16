import type { User } from "~/types"
import React from "react"

export const AuthContext = React.createContext<User | null>(null)
AuthContext.displayName = "AuthContext"

function AuthProvider({
    user,
    ...props
}: {
    user: User
    children: React.ReactNode
}) {
    return <AuthContext.Provider value={user} {...props} />
}

export const useAuthProvider = () => {
    const context = React.useContext(AuthContext) as User
    if (context === undefined) {
        throw new Error("useAuthProvider must be used within a AuthProvider")
    }
    return context
}

export default AuthProvider
