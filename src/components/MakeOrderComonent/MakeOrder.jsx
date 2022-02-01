import React, { useContext } from "react";
import { AgentContext } from "../ContextComponent/contextAgent";

const MakeOrder = () => {
  const valuesOfContext = useContext(AgentContext);

  const AgentName = (event) => {
    valuesOfContext.info.agentName = event.target.value;
  };

  const AgentEmail = (event) => {
    valuesOfContext.info.email = event.target.value;
  };

  const AgentNumberOrder = (event) => {
    valuesOfContext.info.numberOfOrders = event.target.value;
  };

  const OnClickFunction=()=>{
    valuesOfContext.setInfo(valuesOfContext.info.agentName ,valuesOfContext.info.email,valuesOfContext.info.numberOfOrders);
    console.log(valuesOfContext)
  }

  return (
    <div>
      <h1>This is Make Order component</h1>
      {/* {valuesOfContext.numberOfOrders} */}
      Agent name: <input type="text" onChange={AgentName} />
      Number Order: <input type="number" onChange={AgentNumberOrder}/>
      Email: <input type="text" onChange={AgentEmail} />
      <button type="button" onClick={OnClickFunction}>Update</button>
    </div>
  );
};

export default MakeOrder;
