import Input from "../Input/Input";

const generos = ["Acción", "Comedia", "Drama", "Terror", "Ciencia Ficción"];
const tipos = ["Película", "Serie"];

const FormularioItem = ({ item, onChange, onSubmit }) => {
    
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
            <Input
                name="titulo"
                value={item.titulo}
                onChange={handleChange}
                placeholder="Título"
            />
            <Input
                name="director"
                value={item.director}
                onChange={handleChange}
                placeholder="Director"
            />
            <Input
                type="number"
                name="anio"
                value={item.anio}
                onChange={handleChange}
                placeholder="Año"
            />
            
            <select name="genero" value={item.genero} onChange={handleChange} required>
                <option value="">Selecciona un género</option>
                {generos.map((g) => (
                <option key={g} value={g}>{g}</option>
                ))}
            </select>

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

            <select name="tipo" value={item.tipo} onChange={handleChange} required>
                <option value="">Selecciona un tipo</option>
                {tipos.map((t) => (
                <option key={t} value={t}>{t}</option>
                ))}
            </select>

            <label>
                <input
                type="checkbox"
                name="visto"
                checked={item.visto}
                onChange={handleChange}
                />
                Visto
            </label>

            <button type="submit">Guardar</button>
        </form>
    );
};

export default FormularioItem;
