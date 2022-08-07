import TaskList from "./components/TaskList";
import TitleComponets from "./components/TitleComponets";
import "./styles.css";
import React, { useState } from "react";
import PruComponent from "./components/PruComponent";
import Tarea from "./components/PruComponent";

export default function App() {
  const [listaTareas, setListaTareas] = useState([]);
  const taskNew = (tarea) => {
    setListaTareas([tarea, ...listaTareas]);
  };

  const eliminar = (id) => {
    const listaFiltrada = listaTareas.filter((e, index) => index !== id);
    setListaTareas(listaFiltrada);
  };

  return (
    <div className="App">
      <TitleComponets />
      <TaskList taskNew={taskNew} />
      <div className="list">
        <ul>
          {" "}
          {listaTareas.map((e, index) => (
            <Tarea tarea={e} eliminar={eliminar} id={index} />
          ))}
        </ul>
      </div>
    </div>
  );
}
