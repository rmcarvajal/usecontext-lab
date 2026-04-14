import { createContext, useState } from "react";

//step 2: define context type
type UserContextType= {
    emailContext:string;
    setEmailContext: (email:string) => void
}

//step 1: create context
export const UserContext = createContext<UserContextType | null>(null)

//step 3: create provider for grouping which pages/components use it
export const UserProvider = ({children}: {children: React.ReactNode}) => {
    const [emailContext,setEmailContext] = useState("awa")

    return <UserContext.Provider value={{emailContext, setEmailContext}}>
        {children}
        </UserContext.Provider>
    
}