import React, { useState } from "react"

export const AgentContext = React.createContext();

const ContextProvider=(props)=>{
const [info , setInfo] = useState({agentName: " " , numberOfOrders: 0 , email: " "})
    return(
        <AgentContext.Provider value={{info,setInfo}}>
            {props.children}
        </AgentContext.Provider>
    )
}


export default ContextProvider;