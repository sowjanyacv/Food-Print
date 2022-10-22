import { useContext, createContext, useState } from "react";

const UserStatsContext = createContext({
    //need to decide what we are pulling out from the api
})
const useUserStatsContext = () =>useContext(UserStatsContext);

const UserStatsContextProvider = ({children}) =>{
const [/*this to be picked up from line 4*/] = useState("");
return(
    <>
    <UserStatsContext.Provider value {{/*this to be picked up from line 4*/}}>
    {children}
    </UserStatsContext.Provider>
    </>
)
}
export {UserStatsContextProvider, useUserStatsContext}