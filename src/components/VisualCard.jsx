import { ButtonGroup, Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const VisualCard = (params) => {
    const API_IMG = "https://image.tmdb.org/t/p/w500";

    return (
        <div className="visual-card">
        <div className="card-body text-white text-center p-4">
            <h5 className="card-title my-2 ">
                {params.title}
                {params.original_name}
            </h5>
            <img
                src={API_IMG + params.poster_path}
                className="card-img-top poster__movie"
                alt="Poster de serie o pelicula"
            />
                <div className="botones-card">
                    <ButtonGroup size="lg">
                        <Button variant="dark" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top"><i class="bi bi-play-circle"></i></Button>
                        <Button variant="dark"> <i class="bi bi-plus-circle"></i></Button>
                        <Button variant="dark"><i class="bi bi-info-circle"></i></Button>
                    </ButtonGroup>
                </div>
            </div>
        </div>
    );
};

export default VisualCard;
