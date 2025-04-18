import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import ListaItems from './components/ListaItems/ListaItems.jsx'
import FormularioItem from './components/FormularioItem/FormularioItem.jsx'

const peliculasEjemplo = [
  {
    "id": 1,
    "titulo": "El Padrino",
    "director": "Francis Ford Coppola",
    "anio": 1972,
    "genero": "Drama",
    "rating": 9.2,
    "tipo": "Película",
    "visto": true
  },
  {
    "id": 2,
    "titulo": "Breaking Bad",
    "director": "Vince Gilligan",
    "anio": 2008,
    "genero": "Crimen",
    "rating": 9.5,
    "tipo": "Serie",
    "visto": true
  },
  {
    "id": 3,
    "titulo": "Interstellar",
    "director": "Christopher Nolan",
    "anio": 2014,
    "genero": "Ciencia ficción",
    "rating": 8.6,
    "tipo": "Película",
    "visto": false
  },
  {
    "id": 4,
    "titulo": "Stranger Things",
    "director": "Los Hermanos Duffer",
    "anio": 2016,
    "genero": "Fantasía",
    "rating": 8.7,
    "tipo": "Serie",
    "visto": false
  },
  {
    "id": 5,
    "titulo": "La La Land",
    "director": "Damien Chazelle",
    "anio": 2016,
    "genero": "Musical",
    "rating": 8.0,
    "tipo": "Película",
    "visto": true
  }
];


function App() {

  const [peliculas, setPeliculas] = useState(peliculasEjemplo);

  const peliculasVistas = peliculas.filter(pelicula => pelicula.visto);
  const peliculasNoVistas = peliculas.filter(pelicula => !pelicula.visto);

  const totalVistas = peliculasVistas.length;
  const totalNoVistas = peliculasNoVistas.length;

  const [itemActual, setItemActual] = useState({
    titulo: "",
    director: "",
    anio: "",
    genero: "",
    rating: "",
    tipo: "",
    visto: false,
  });
  
  const [modoEdicion, setModoEdicion] = useState(false);
  const [idEdicion, setIdEdicion] = useState(null);

  const handleEditar = (id) => {
    //console.log("Editar película con ID:", id);
    const peliculaAEditar = peliculas.find(pelicula => pelicula.id === id);
    if (peliculaAEditar) {
      setItemActual(peliculaAEditar); 
      setModoEdicion(true);           
      setIdEdicion(id);               
    }
  };

  const handleEliminar = (id) => {
    setPeliculas(peliculas.filter(pelicula => pelicula.id !== id));
  };

  const handleGuardar = () => {
    if (modoEdicion) {
      setPeliculas(peliculas.map(p =>
        p.id === idEdicion ? { ...itemActual, id: idEdicion } : p
      ));
      setModoEdicion(false);
      setIdEdicion(null);
    } else {
      const nuevoId = Math.max(...peliculas.map(p => p.id), 0) + 1;
      setPeliculas([...peliculas, { ...itemActual, id: nuevoId }]);
    }
  
    setItemActual({
      titulo: "",
      director: "",
      anio: "",
      genero: "",
      rating: "",
      tipo: "",
      visto: false,
    });
  };
  
  

  return (
    <>
      <div>
        <h1>{modoEdicion ? "Editar película o serie" : "Agregar nueva película o serie"}</h1>
        <FormularioItem item={itemActual} onChange={setItemActual} onSubmit={handleGuardar} />
        <ListaItems coleccionPeliculas={peliculasVistas} onEditar={handleEditar} onEliminar={handleEliminar} titulo={"Películas y series vistas"}/>
        <p><strong>Cantidad de pelílucas y series vistas: </strong>{totalVistas}</p>
        <ListaItems coleccionPeliculas={peliculasNoVistas} onEditar={handleEditar} onEliminar={handleEliminar} titulo={"Películas y series por ver"}/>
        <p><strong>Cantidad de películas y series por ver: </strong>{totalNoVistas}</p>
      </div>
    </>
  )
}

export default App
