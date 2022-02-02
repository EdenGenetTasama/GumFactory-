import React, { useContext } from "react";
import { AgentContext } from "../ContextComponent/contextAgent";

const MakeOrder = () => {
  const {info,setInfo} = useContext(AgentContext);

  // const AgentName = (event) => {
  //   info.agentName = event.target.value;
  // };

  // const AgentEmail = (event) => {
  //   info.email = event.target.value;
  // };

  // const AgentNumberOrder = (event) => {
  //   info.numberOfOrders = event.target.value;
  // };

  const changeInfo=(event)=>{
    info[event.target.name] = event.target.value;
    console.log(info[event.target.name]);
  }
  const OnClickFunction=()=>{
    setInfo({...info});
    console.log(info);
    alert(`Order Number: ${info.numberOfOrders} succeeded`);
  }

  return (
    <div>
      <h1>This is Make Order component</h1>
      {/* {valuesOfContext.numberOfOrders} */}
      Agent name: <input type="text" name="agentName" onChange={changeInfo} /><br/>
      Number Order: 
      <input type="number" name="numberOfOrders" onChange={changeInfo} /><br/>
      Email: <input type="text" name="email" onChange={changeInfo} /><br/>
      <button type="button" onClick={OnClickFunction}>
        Update
      </button>

      <p>{info.numberOfOrders} , {info.agentName} , {info.email}</p>
    </div>
  );
};

export default MakeOrder;
