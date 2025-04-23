import styles from "./Input.module.css";
const Input = ({ value, onChange, name, type = "text", placeholder, ...props }) => {
  return (
    <input
      className={styles.input}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      {...props}
    />
  );
};

export default Input;