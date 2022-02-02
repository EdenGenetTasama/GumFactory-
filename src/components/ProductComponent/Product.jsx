import { useContext, useEffect } from "react";
import { AgentContext } from "../ContextComponent/contextAgent";

const Product = () => {
  const {info,setInfo} = useContext(AgentContext);

  useEffect(()=>{alert(`Welcome ${info.agentName}`)})
  return <div>this is Product component</div>;
};

export default Product;
