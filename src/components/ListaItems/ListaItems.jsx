import Item from "../Item/Item";
import styles from "./ListaItems.module.css";

const ListaItems = ({ coleccionPeliculas, onEditar, onEliminar, titulo }) => {
  return (
    <>
      <h2 className={styles.tituloLista}>{titulo}</h2>
      {coleccionPeliculas.length === 0 ? (
        <p className={styles.tituloVacio}>No hay elementos en la lista.</p>
      ) : (
        <ul className={styles.listaPeliculas}>
          {coleccionPeliculas.map((pelicula) => (
            <li key={pelicula.id}>
              <Item
                item={pelicula}
                onEditar={onEditar}
                onEliminar={onEliminar}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ListaItems;


  