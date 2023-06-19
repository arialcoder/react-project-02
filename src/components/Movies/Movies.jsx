//Importe de estilos de Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { FetchData } from "../FetchData";
import VisualCard from "../VisualCard";

const Movies = () => {
    const { data } = FetchData("movie");

    return (
        <div className="container-fluid movies__container">
            {data?.map((mov) => (
                <VisualCard key={mov.id} {...mov}></VisualCard>
            ))}
        </div>
    );
};

export default Movies;
