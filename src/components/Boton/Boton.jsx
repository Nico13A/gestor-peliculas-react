const Boton = ({ texto, onClick }) => {
    const handleClick = texto === "Eliminar" ? () => {
          if (confirm("¿Estás seguro de que querés eliminar este ítem?")) {
            onClick();
          }
    } : onClick;
    return <button onClick={handleClick}>{texto}</button>;
};
  
export default Boton;
  