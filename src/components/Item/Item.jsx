import Boton from "../Boton/Boton";
import styles from "./Item.module.css";

const Item = ({ item, onEditar, onEliminar }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <p>{item.titulo}</p>
        {/* Borrar codigo comentado */}
        {/*<p><strong>Director:</strong> {item.director}</p>
        <p><strong>Año:</strong> {item.anio}</p>
        <p><strong>Género:</strong> {item.genero}</p>
        <p><strong>Rating:</strong> {item.rating}</p>
        <p><strong>Tipo:</strong> {item.tipo}</p>
        */}
      </div>
      <div className={styles.cardActions}>
        <Boton texto="Editar" onClick={() => onEditar(item.id)} />
        <Boton texto="Eliminar" onClick={() => onEliminar(item.id)} />
      </div>
    </div>
  );
};

export default Item;

