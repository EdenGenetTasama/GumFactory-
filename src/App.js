import logo from "./logo.svg";
import "./App.css";
import AppRouting from "./Routing";
import ContextProvider from "./components/ContextComponent/contextAgent";



function App() {
  return (
    <div className="App">
      <ContextProvider>
        <AppRouting />
      </ContextProvider>
    </div>
  );
}

export default App;
