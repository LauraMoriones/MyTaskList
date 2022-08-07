import "../estilos.css/TitleStyles.css";
import React, { useState } from "react";
const TaskList = (props) => {
  const [search, setSearch] = useState("");
  const manejarFormulario = (event) => {
    setSearch(event.target.value);
  };
  const submit = (event) => {
    event.preventDefault();
    props.taskNew(search);
  };

  return (
    <div className="container">
      <div className="search">
        <form className="form" onSubmit={submit}>
          <input
            value={search}
            onChange={manejarFormulario}
            type="text"
            placeholder="Agrega tarea"
          ></input>
          <button className="agregar">+</button>
        </form>
        <div className="tareas">
          <h3>Estas son las tareas pendientes</h3>
        </div>
      </div>
    </div>
  );
};
export default TaskList;
