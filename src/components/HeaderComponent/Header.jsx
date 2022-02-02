import "../HeaderComponent/header.css";
import {AgentContext} from "../ContextComponent/contextAgent"
import { useContext } from "react";

const Header = () => {
    const ValuesFromContext = useContext(AgentContext);
  return (
    <div className="header">
      This is header {ValuesFromContext.info.agentName}
    </div>
  );
};

export default Header;
