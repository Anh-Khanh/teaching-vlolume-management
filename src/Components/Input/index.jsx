function Input(prop) {
    return (
        <input
          className={`${prop.className} focus:border-red-800`}
          type={prop.type}
          tabIndex={prop.tabindex}
          placeholder={prop.placeholder}
        ></input>
    );
}

export default Input;