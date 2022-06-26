import { UserContext } from "./UserContext"


export const UserProvider = ({children}) => {
  return (
    <UserContext.Provider value={{hola: 'hola mundo'}}>
    {children}
    </UserContext.Provider>
  )
}
