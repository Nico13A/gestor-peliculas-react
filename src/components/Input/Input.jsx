const Input = ({ value, onChange, name, type = "text", placeholder, ...props }) => {
  return (
    <input
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