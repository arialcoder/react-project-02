//Importe de estilos de Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { FetchData } from "../FetchData";
import VisualCard from "../VisualCard";

const Series = () => {
    const { data } = FetchData("tv");

    return (
        <div className="container-fluid movies__container">
            {data?.map((ser) => (
                <VisualCard key={ser.id} {...ser}></VisualCard>
            ))}
        </div>
    );
};

export default Series;
