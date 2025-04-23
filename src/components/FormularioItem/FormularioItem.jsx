import Input from "../Input/Input";
import styles from "./FormularioItem.module.css";

const generos = [
    "Drama",
    "Crimen",
    "Ciencia ficción",
    "Fantasía",
    "Musical",
    "Acción",
    "Comedia",
    "Romance",
    "Western",
    "Terror"
]
const tipos = ["Película", "Serie"];

const FormularioItem = ({ item, onChange, onSubmit, onFiltrar, onOrdenar, onLimpiar }) => {

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
        <form onSubmit={handleSubmit} className={styles.formulario}>
            <div className={styles.leyenda}>
                <label>Para guardar llene todos los campos /</label>
                <label>/ Para filtrar llene alguno de los campos</label>
            </div>
            <div className={styles.formularioContenido}>
                <div>
                    <Input
                        name="titulo"
                        value={item.titulo}
                        onChange={handleChange}
                        placeholder="Título"
                    />
                </div>
                <div>
                    <Input
                        name="director"
                        value={item.director}
                        onChange={handleChange}
                        placeholder="Director"
                    />
                </div>
                <div className={styles.anio}>
                    <Input
                        type="number"
                        name="anio"
                        value={item.anio}
                        onChange={handleChange}
                        placeholder="Año"
                    />
                </div>
                <div className={styles.genero}>
                    <select name="genero" value={item.genero} onChange={handleChange} required>
                        <option value="">Selecciona un género</option>
                        {generos.map((g) => (
                            <option key={g} value={g}>{g}</option>
                        ))}
                    </select>
                </div>
                <div>
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
                <div className={styles.tipo}>
                    <select name="tipo" value={item.tipo} onChange={handleChange} required>
                        <option value="">Selecciona un tipo</option>
                        {tipos.map((t) => (
                            <option key={t} value={t}>{t}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.ordenar}>
                    <select onChange={(e) => onOrdenar(e.target.value)}>
                        <option value="">Ordenar por:</option>
                        <option value="Reciente" >Recientes</option>
                        <option value="Antiguas">Antiguas</option>
                        <option value="MayorR">Mayor Rating</option>
                        <option value="MenorR">Menor Rating</option>
                    </select>
                </div>
                <div className={styles.visto}>
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
                <div className={styles.botonera}>
                    <button className={styles.botones} type="submit">Guardar</button>
                    <button className={`${styles.botones} ${styles.filtrar}`} type="button" onClick={() => onFiltrar(item)}>Filtrar</button>
                    <button className={`${styles.botones} ${styles.limpiar}`}type="button" onClick={onLimpiar}>Limpiar</button>
                </div>
            </div>
        </form>
    );
};

export default FormularioItem;