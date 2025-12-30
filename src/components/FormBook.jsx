const FormBook = ({ placeholder, type = "text", options = [], autoFocus,readOnly,required,name, autoComplete = "on" }) => {
  const baseClasses = "w-full h-12.5 pl-6.25 mb-6.25 border border-[#999] p-3 rounded-[5px] text-[1.1rem] placeholder:text-gray dark:text-white dark:placeholder:text-white input ";
  
  if (type === "select") {
    return (
      <select className={`${baseClasses}  input `} defaultValue=""  style={{ colorScheme: "dark" }}  required={required}  name={name}
        autoComplete={autoComplete}>
        <option className="dark:bg-gray" value="" disabled>{placeholder}</option>
        {options.map((option, index) => (
          <option className="dark:bg-gray" key={index} value={option.value}>{option.label}</option>
          
        ))}
      </select>
    );
  }
  
  if (type === "date") {
    return (
      <input 
        type="date" 
        className={`${baseClasses} pr-10 dark:scheme-dark`}
        placeholder={placeholder}
          required={required}
        readOnly={readOnly}
        autoFocus={autoFocus}
         name={name}
        autoComplete={autoComplete}
      />
    );
  }
  
  return (
    <input 
      type={type}
      placeholder={placeholder}
      className={baseClasses}
        autoFocus={autoFocus}
      readOnly={readOnly}
      required={required}
       name={name}
        autoComplete={autoComplete}
      
    />
  );
}

export default FormBook;