import React, { useContext } from "react";
import { AgentContext } from "../ContextComponent/contextAgent";

const MakeOrder = () => {
  const valuesOfContext = useContext(AgentContext);

  const AgentName = (event) => {
    valuesOfContext.agentName = event.target.value;
  };

  const AgentEmail = (event) => {
    valuesOfContext.email = event.target.value;
  };

  const AgentNumberOrder = (event) => {
    valuesOfContext.numberOfOrders = event.target.value;
  };

  const OnClickFunction=()=>{
    valuesOfContext(...valuesOfContext);
    console.log(valuesOfContext)
  }

  return (
    <div>
      <h1>this is Make Order component</h1>
      {/* {valuesOfContext.numberOfOrders} */}
      Agent name: <input type="text" onChange={AgentName} />
      Number Order: <input type="number" onChange={AgentNumberOrder}/>
      Email: <input type="text" onChange={AgentEmail} />
      <button type="button" onClick={OnClickFunction}>Update</button>
    </div>
  );
};

export default MakeOrder;
