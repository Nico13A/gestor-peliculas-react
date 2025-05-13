import styles from "./Boton.module.css";
//La mejor manera de haber solucioando este componente es con un variant de prop. Podrian tener distintas variants
//y una de esas para el delete. 

const Boton = ({ texto, onClick }) => {
    const handleClick = texto === "Eliminar" ? () => {
      //Esto deberia venir en el onclick
          if (confirm("¿Estás seguro de que querés eliminar este ítem?")) {
            onClick();
          }
    } : onClick;
    const clase = texto === "Eliminar" ? `${styles.boton} ${styles.botonEliminar}` : styles.boton;
    return <button className={clase} onClick={handleClick}>{texto}</button>;
};
  
export default Boton;
  