import styles from "./Boton.module.css";

const Boton = ({ texto, onClick }) => {
    const handleClick = texto === "Eliminar" ? () => {
          if (confirm("¿Estás seguro de que querés eliminar este ítem?")) {
            onClick();
          }
    } : onClick;
    const clase = texto === "Eliminar" ? `${styles.boton} ${styles.botonEliminar}` : styles.boton;
    return <button className={clase} onClick={handleClick}>{texto}</button>;
};
  
export default Boton;
  