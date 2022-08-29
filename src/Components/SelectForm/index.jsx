import Select from "react-select";
import {  useState } from "react";
function SelectForm() {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: "Khánh", label: "Khánh" },
    { value: "Anh khánh", label: "Anh khánh" },
    { value: "Lê Anh Khánh", label: "Lê Anh Khánh" },
  ];
  console.log(selectedOption);

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px dotted pink",
      color: state.isSelected ? "red" : "black",
    }),
    control: (base) => ({
      ...base,
      border: "1px solid gray !important",
      boxShadow: "1px 1px 1px 1px gray inset!important",
      fontSize:"16px",
      "&:hover": {
        border: "1px solid gray !important",
      },
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };

  return (
    <div className="w-52">
      <Select
        options={options}
        placeholder="Chon nam hoc"
        styles={customStyles}
        onChange={setSelectedOption}
        
      />
    </div>
  );
}

export default SelectForm;
