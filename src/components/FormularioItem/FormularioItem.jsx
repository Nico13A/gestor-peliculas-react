import Input from "../Input/Input";
import "./FormularioItem.css"

const generos = ["Acción", "Comedia", "Drama", "Terror", "Ciencia Ficción","Musical"];
const tipos = ["Película", "Serie"];

const FormularioItem = ({ item, onChange, onSubmit,onFiltrar,onOrdenar }) => {
    
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        onChange((prevItem) => ({
          ...prevItem,  
          [name]: type === "checkbox" ? checked : value,  
        }));
      };
      
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form">
                <div className="leyenda">
                    <label>Para Guardar llene todos los campos /</label>
                    <label>/ Para filtrar llene alguno de los campos</label>
                </div>
                <div className="titulo">
                    <label>Titulo</label>
                    <Input
                        name="titulo"
                        value={item.titulo}
                        onChange={handleChange}
                        placeholder="Título"
                    />
                </div>
                <div className="director">
                    <label>Director</label>
                    <Input
                        name="director"
                        value={item.director}
                        onChange={handleChange}
                        placeholder="Director"
                    />
                </div>
                <div className="anio">
                    <label>Año</label>
                    <Input
                        type="number"
                        name="anio"
                        value={item.anio}
                        onChange={handleChange}
                        placeholder="Año"
                    />
                </div>
                <div className="genero">
                    <label>Genero</label>
                    <select name="genero" value={item.genero} onChange={handleChange} required>
                        <option value="">Selecciona un género</option>
                        {generos.map((g) => (
                        <option key={g} value={g}>{g}</option>
                        ))}
                    </select>
                </div>
                <div className="rating">
                    <label>Rating</label>
                    <Input
                        type="number"
                        step="0.1"
                        min="0"
                        max="10"
                        name="rating"
                        value={item.rating}
                        onChange={handleChange}
                        placeholder="Rating"
                    />
                </div>
                <div className="tipo">
                    <label>Tipo</label>
                    <select name="tipo" value={item.tipo} onChange={handleChange} required>
                        <option value="">Selecciona un tipo</option>
                        {tipos.map((t) => (
                        <option key={t} value={t}>{t}</option>
                        ))}
                    </select>
                </div>
                <div className="visto">
                    <label htmlFor="visto">
                        <input
                        type="checkbox"
                        name="visto"
                        checked={item.visto}
                        onChange={handleChange}
                        />
                        Visto
                    </label>
                </div>
                <div className="ordenar">
                    <select onChange={(e) => onOrdenar(e.target.value)}>
                        <option value="">ordenar por:</option>
                        <option value="Reciente" >Recientes</option>
                        <option value="Antiguas">Antiguas</option>
                        <option value="MayorR">Mayor Rating</option>
                        <option value="MenorR">Menor Rating</option>
                    </select>
                </div>
                <div >
                    <button className="botones" type="submit">Guardar</button>
                    <button className="botones" type="button" onClick={() => onFiltrar(item)}>Filtrar</button>
                </div>
            </div>
        </form>
    );
};

export default FormularioItem;
