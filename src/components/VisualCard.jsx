const VisualCard = (params) => {
    const API_IMG = "https://image.tmdb.org/t/p/w500";

    return (
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
        </div>
    );
};

export default VisualCard;
