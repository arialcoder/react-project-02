import LoginButton from "./LoginButton";
import SelectIdioma from "./SelectIdioma";

/* IMPORTANDO ICONOS BOOTSTRAP*/
import "bootstrap-icons/font/bootstrap-icons.css";

const SimpleNavBar = () => {
  return (
    <>
      <div className="container-fluid  container__simple_nav ">
        <span className="px-2">
          <SelectIdioma />
        </span>
        <span className="px-2">
          <LoginButton />
        </span>
      </div>
    </>
  );
};

export default SimpleNavBar;
