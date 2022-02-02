import React, { useContext, useState } from "react";
import { AgentContext } from "../ContextComponent/contextAgent";

const Orders = () => {
  const {info,setInfo} = useContext(AgentContext);

const UpInOne=()=>{
    setInfo(parseInt(info.numberOfOrders)+1);
    console.log(info.numberOfOrders);
}

  return (
    <div>
      this is Orders component
      <button type="button" onClick={UpInOne}>Up IN 1</button>
    </div>
  );
};

export default Orders;
