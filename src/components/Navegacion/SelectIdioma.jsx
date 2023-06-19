import { useContext } from "react";
import { MainContextState } from "../context/MainContextProvider";

const SelectIdioma = () => {
  const { dispatch } = useContext(MainContextState);

  const cambiarIdioma = (e) => {
    dispatch({ type: "SETLANGUAGE", language: e.target.value });
  };

  return (
    <>
      <i className="bi bi-globe2 text-white px-2" />
      <select onChange={(e) => cambiarIdioma(e)}>
        <option value="ES">Español</option>
        <option value="EN">English</option>
      </select>
    </>
  );
};

export default SelectIdioma;
