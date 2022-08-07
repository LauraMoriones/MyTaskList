import React from "react";

const Tarea = (props) => {
  const eliminarTarea = () => {
    props.eliminar(props.id);
  };
  return (
    <div>
      <div className=" tarea-1">
        <p>{props.tarea}</p>
        <input onClick={eliminarTarea} type="checkbox" name="tarea-2" />
      </div>
    </div>
  );
};
export default Tarea;
