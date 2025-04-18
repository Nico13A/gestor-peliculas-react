import Item from "../Item/Item";

const ListaItems = ({ coleccionPeliculas, onEditar, onEliminar, titulo }) => {
  return (
    <div className="container">
      <h2>{titulo}</h2>

      {coleccionPeliculas.length === 0 ? (
        <p>No hay elementos en la lista.</p>
      ) : (
        <ul className="listaPeliculas">
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
    </div>
  );
};

export default ListaItems;


  