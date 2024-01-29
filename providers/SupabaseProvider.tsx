// The `SupabaseProvider` component is a React context provider that wraps around your application and 
// provides access to the Supabase client throughout your application. This allows you to easily access the Supabase client 
// from any component within your application without having to pass it down explicitly.

"use client"

import {Database} from "@/types_db"
import { useState } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { SessionContextProvider } from "@supabase/auth-helpers-react"

interface SupabaseProviderProps{
    children: React.ReactNode,
}

const SupabaseProvider: React.FC<SupabaseProviderProps> = ({children}) => {
    const [supabaseClient] = useState(() => 
        createClientComponentClient<Database>()
    )
    return(
        <SessionContextProvider supabaseClient={supabaseClient}>
            {children}
        </SessionContextProvider>
    )
}

export default SupabaseProvider
