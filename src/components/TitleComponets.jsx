import "../estilos.css/TitleStyles.css";
import cabecera from "../images/lista tareas.png";
function TitleComponet() {
  return (
    <>
      <>
        <img width="50" src={cabecera} className="miimg" />
      </>
      <>
        <h1 className="Head">LISTA DE TAREAS </h1>
      </>
    </>
  );
}
export default TitleComponet;
