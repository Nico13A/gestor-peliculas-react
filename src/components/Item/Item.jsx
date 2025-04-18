import Boton from "../Boton/Boton";

const Item = ({ item, onEditar, onEliminar }) => {
  return (
    <div className="cardPelicula">
      <h2>{item.titulo}</h2>
      <p><strong>Director:</strong> {item.director}</p>
      <p><strong>Año:</strong> {item.anio}</p>
      <p><strong>Género:</strong> {item.genero}</p>
      <p><strong>Rating:</strong> {item.rating}</p>
      <p><strong>Tipo:</strong> {item.tipo}</p>
      
      <div className="botones">
        <Boton texto="Editar" onClick={() => onEditar(item.id)} />
        <Boton texto="Eliminar" onClick={() => onEliminar(item.id)} />
      </div>
    </div>
  );
};

export default Item;

