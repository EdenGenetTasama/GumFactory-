import React, { useState } from "react"

export const AgentContext = React.createContext();

const ObjectUser= {agentName: "" , numberOfOrders: 0 , email: " "};

const ContextProvider=({children})=>{
const [info , setInfo] = useState(ObjectUser);
    return(
        <AgentContext.Provider value={{info,setInfo}}>
            {children}
        </AgentContext.Provider>
    )
}


export default ContextProvider;