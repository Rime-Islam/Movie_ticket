import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const Summary = () => {
    const params = useParams();
    const loadedMovies = useLoaderData();
    const [movies, setMovies] = useState(loadedMovies); 

    
useEffect(() => {
        const filterMovie = loadedMovies.filter((item) => item.show?.id == params.id);
        setMovies(filterMovie);
     }, [params.id, loadedMovies])
    return (
        <div className="container mx-auto mt-36 mb-20">
            {
                movies.length && movies.map((movie) => (
                    <div key={movie.show.id} className="flex gap-5">
                        <div>
                            <img className="w-[50vh] h-[50vh]" src={movie.show.image?.original} alt="image" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold uppercase">{movie.show.name}</h1>
                            <p className="text-amber-900 mb-5"><span className="font-bold">Run Time:    </span> {movie.show.runtime} Minutes</p>
                            <p><span className="font-bold mr-14">Type: </span> {movie.show.type}</p>
                            <p><span className="font-bold mr-4">Language:</span> {movie.show.language}</p>
                            <p><span className="font-bold mr-12">Genre:</span>{movie.show.genres[0]}, {movie.show.genres[1]}</p>
                           
                            <p><span className="font-bold mr-8">Release: </span> {movie.show.premiered} </p>
                            <p><span className="font-bold mr-16">End: </span>{movie.show.ended} </p>
                            <p><span className="font-bold mr-0.5">Official Site: </span> <a href={movie.show.officialSite}  >Visit Official Site</a></p>
                            <p className="text-xl font-bold mt-8 text-amber-900">Summary</p>
                            <p>{movie.show.summary}</p>
                            <Button className="transition mt-10 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-600 duration-300 ...">Buy Ticket</Button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Summary;