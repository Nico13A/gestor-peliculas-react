import { useState, useEffect } from 'react'
import "./App.css";
import ListaItems from './components/ListaItems/ListaItems.jsx'
import FormularioItem from './components/FormularioItem/FormularioItem.jsx'
import peli from "./peiculas.json"

function App() {
  const [peliculas, setPeliculas] = useState(() => {
    const peliculasGuardadas = JSON.parse(localStorage.getItem("peliculas"));
    return peliculasGuardadas || peli;
  });
  
  useEffect(() => {
    localStorage.setItem("peliculas", JSON.stringify(peliculas));
  }, [peliculas]);

  const [peliculasVistas, setPeliculasVistas] = useState(peliculas.filter(pelicula => pelicula.visto));
  const [peliculasNoVistas, setPeliculasNoVistas] = useState(peliculas.filter(pelicula => !pelicula.visto));  
  //const peliculasVistas = peliculas.filter(pelicula => pelicula.visto);
  //const peliculasNoVistas = peliculas.filter(pelicula => !pelicula.visto);

  const totalVistas = peliculasVistas.length;
  const totalNoVistas = peliculasNoVistas.length;

  const [itemActual, setItemActual] = useState({
    titulo: "",
    director: "",
    anio: 0,
    genero: "",
    rating: 0,
    tipo: "",
    visto: false,
  });
  //********************** alfredo******************************
    
    const[peliculasFiltradas,setPeliculasFiltradas]=useState(peliculas);

    const handleFiltrar = (criterios) => {
      const peliculasFiltradas = peliculas.filter((pelicula) => {
        return (
          (!criterios.titulo || pelicula.titulo.toLowerCase().includes(criterios.titulo.toLowerCase())) &&
          (!criterios.director || pelicula.director.toLowerCase().includes(criterios.director.toLowerCase())) &&
          (!criterios.anio || pelicula.anio === parseInt(criterios.anio)) &&
          (!criterios.genero || pelicula.genero === criterios.genero) &&
          (!criterios.tipo || pelicula.tipo === criterios.tipo) &&
          (!criterios.rating || pelicula.rating >= parseInt(criterios.rating))
        );
      });
      const vistas = peliculasFiltradas.filter(pelicula=>pelicula.visto)
      setPeliculasVistas(vistas);
      const noVistas =peliculasFiltradas.filter(pelicula=>!pelicula.visto)
      setPeliculasNoVistas(noVistas)
      console.log(peliculasFiltradas);
      setPeliculasFiltradas(peliculasFiltradas); 
    };
    const handleOrdenar =(orden) =>{
      const peliculasOrdenadas=[...peliculasFiltradas];
      if(orden === "Reciente" ){
        peliculasOrdenadas.sort((a,b)=>b.anio - a.anio)
      }
      else if(orden === "Antiguas" ){
        peliculasOrdenadas.sort((a,b)=>a.anio - b.anio)
      }
      else if(orden === "MayorR" ){
        peliculasOrdenadas.sort((a, b) => b.rating - a.rating);
      }
      else if(orden === "MenorR" ){
        peliculasOrdenadas.sort((a, b) => a.rating - b.rating);
      }
      const vistas = peliculasOrdenadas.filter(pelicula=>pelicula.visto);
      const noVistas =peliculasOrdenadas.filter(pelicula=>!pelicula.visto);
      setPeliculasVistas(vistas);
      setPeliculasNoVistas(noVistas);
      console.log(peliculasOrdenadas);
    }


  //********************** alfredo******************************
  
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
      anio: 0,
      genero: "",
      rating: 0,
      tipo: "",
      visto: false,
    });
  };
  
  

  return (
    <>
      <div>
        <h1>{modoEdicion ? "Editar película o serie" : "Agregar nueva película o serie"}</h1>
        <FormularioItem item={itemActual} onChange={setItemActual} onSubmit={handleGuardar} onFiltrar={handleFiltrar} onOrdenar={handleOrdenar}/>
        
        <div className='mostadorPeliculas'>
          <div className='vistas'>
              <p><strong>Cantidad de pelílucas y series vistas: </strong>{totalVistas}</p>
              <ListaItems coleccionPeliculas={peliculasVistas} onEditar={handleEditar} onEliminar={handleEliminar} titulo={"Películas y series vistas"}/>
          </div>
          <div className='noVistas'>
              <p><strong>Cantidad de películas y series por ver: </strong>{totalNoVistas}</p>
              <ListaItems coleccionPeliculas={peliculasNoVistas} onEditar={handleEditar} onEliminar={handleEliminar} titulo={"Películas y series por ver"}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
