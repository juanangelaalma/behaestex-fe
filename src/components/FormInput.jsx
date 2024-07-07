const FormInput = ({
  label,
  name,
  placeholder,
  className,
  type,
  autoFocus,
  value,
  onChange,
  error
}) => {
  return (
    <div className={`relative ${className}`}>
      <label className="ml-3 text-sm font-bold text-gray-500 tracking-wide">
        {label}
      </label>
      <input
        autoFocus={autoFocus}
        className="w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-md focus:border-indigo-500"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {error.length > 0 && <p className="text-sm text-red-500 text-semibold">{error[0]}</p> }
    </div>
  );
};

export default FormInput