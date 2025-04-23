import { useState, useEffect } from 'react'
import ListaItems from '../../components/ListaItems/ListaItems.jsx'
import FormularioItem from '../../components/FormularioItem/FormularioItem.jsx'
import peli from "../../peliculas.json"
import Titulo from '../../components/Titulo/Titulo.jsx'
import styles from "./Home.module.css"

function Home() {
  const [peliculas, setPeliculas] = useState(() => {
    const peliculasGuardadas = JSON.parse(localStorage.getItem("peliculas"));
    return peliculasGuardadas || peli;
  });

  useEffect(() => {
    localStorage.setItem("peliculas", JSON.stringify(peliculas));
  }, [peliculas]);

  const [peliculasFiltradas, setPeliculasFiltradas] = useState(peliculas);
  useEffect(() => {
    setPeliculasFiltradas(peliculas);
  }, [peliculas]);

  const peliculasVistas = peliculasFiltradas.filter(pelicula => pelicula.visto);
  const peliculasNoVistas = peliculasFiltradas.filter(pelicula => !pelicula.visto);

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

  const handleFiltrar = (criterios) => {
    const resultadoFiltrado = peliculas.filter((pelicula) => {
      return (
        (!criterios.titulo || pelicula.titulo.toLowerCase().includes(criterios.titulo.toLowerCase())) &&
        (!criterios.director || pelicula.director.toLowerCase().includes(criterios.director.toLowerCase())) &&
        (!criterios.anio || pelicula.anio === parseInt(criterios.anio)) &&
        (!criterios.genero || pelicula.genero === criterios.genero) &&
        (!criterios.tipo || pelicula.tipo === criterios.tipo) &&
        (!criterios.rating || pelicula.rating >= parseInt(criterios.rating))
      );
    });

    setPeliculasFiltradas(resultadoFiltrado);
  };

  const handleOrdenar = (orden) => {
    const peliculasOrdenadas = [...peliculasFiltradas];
    if (orden === "Reciente") {
      peliculasOrdenadas.sort((a, b) => b.anio - a.anio);
    } else if (orden === "Antiguas") {
      peliculasOrdenadas.sort((a, b) => a.anio - b.anio);
    } else if (orden === "MayorR") {
      peliculasOrdenadas.sort((a, b) => b.rating - a.rating);
    } else if (orden === "MenorR") {
      peliculasOrdenadas.sort((a, b) => a.rating - b.rating);
    }
    setPeliculasFiltradas(peliculasOrdenadas);
  };

  const [modoEdicion, setModoEdicion] = useState(false);
  const [idEdicion, setIdEdicion] = useState(null);

  const handleEditar = (id) => {
    const peliculaAEditar = peliculas.find(pelicula => pelicula.id === id);
    if (peliculaAEditar) {
      setItemActual(peliculaAEditar);
      setModoEdicion(true);
      setIdEdicion(id);
    }
  };

  const handleEliminar = (id) => {
    const nuevasPeliculas = peliculas.filter(pelicula => pelicula.id !== id);
    //console.log("Películas después de eliminar:", nuevasPeliculas);
    setPeliculas(nuevasPeliculas);
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

  const limpiarFormulario = () => {
    setItemActual({
        titulo: "",
        director: "",
        anio: "",
        genero: "",
        rating: "",
        tipo: "",
        visto: false
    });
    setPeliculasFiltradas(peliculas);
    setModoEdicion(false);
    setIdEdicion(null);
  };


  return (
    <>
        <Titulo texto="Gestor de Películas y Series" />
        <h2 className={styles.subtituloPrincipal}>{modoEdicion ? "Editar película o serie" : "Agregar nueva película o serie"}</h2>
        <FormularioItem
          item={itemActual}
          onChange={setItemActual}
          onSubmit={handleGuardar}
          onFiltrar={handleFiltrar}
          onOrdenar={handleOrdenar}
          onLimpiar={limpiarFormulario}
        />

        <div className={styles.mostradorPeliculas}>
          <div className={styles.vistas}>
            <ListaItems
              coleccionPeliculas={peliculasVistas}
              onEditar={handleEditar}
              onEliminar={handleEliminar}
              titulo={"Películas y series vistas"}
            />
            <p className={styles.contador}><strong>Cantidad de películas y series vistas: </strong>{totalVistas}</p>
          </div>
          <div className={styles.noVistas}>
            <ListaItems
              coleccionPeliculas={peliculasNoVistas}
              onEditar={handleEditar}
              onEliminar={handleEliminar}
              titulo={"Películas y series por ver"}
            />
            <p className={styles.contador}><strong>Cantidad de películas y series por ver: </strong>{totalNoVistas}</p>
          </div>
        </div>

    </>
  );
}

export default Home;
