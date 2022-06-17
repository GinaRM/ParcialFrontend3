import Cabecera from "./components/Cabecera";
import Listado from "./components/Listado";
import {useState} from "react";

function App() {

  const [cantidad, setCantidad] = useState(0);

  return (
    <div className="App">
      <Cabecera cantidad={cantidad} />
      <Listado setCantidad={setCantidad}/>
    </div>
  );
}

export default App;
