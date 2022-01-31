import React, { useState } from "react"

export const AgentContext = React.createContext();

const ContextProvider=(props)=>{
const [info , setInfo] = useState({agentName: "Eden" , numberOfOrders: 59 , email: "eeee@gmail.com"})
    return(
        <AgentContext.Provider value={info}>
            {props.children}
        </AgentContext.Provider>
    )
}


export default ContextProvider;