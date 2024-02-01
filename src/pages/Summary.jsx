import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Student from "../components/Student";
import Ad from "../components/Ad";


const Summary = () => {
    const params = useParams();
    const loadedMovies = useLoaderData();
    const [movies, setMovies] = useState(loadedMovies); 
    const [isBooked, setIsBooked] = useState(false);

    
useEffect(() => {
        const filterMovie = loadedMovies.filter((item) => item.show?.id == params.id);
        setMovies(filterMovie);
     }, [params.id, loadedMovies])

 

     const handleSubmit = (e) => {
        e.preventDefault();
       

        const showname = e.target.showname.value;
        const type = e.target.type.value;
        const language = e.target.language.value;
        const name = e.target.name.value;
        const email = e.target.email.value;
        const count = e.target.count.value;
         
          const info = {
            name, showname, language, type, email, count
          };
          localStorage.setItem('reviewInfo', JSON.stringify(info));
          e.target.reset();
          Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Your Ticket is Booked!!",
                                showConfirmButton: false,
                               timer: 1500
                            });
  
                            setIsBooked(true);
                       
      }

    return (
        <div className="container mx-auto mt-36 mb-20">
     <div>
     <Student></Student>
     </div>
            {
                movies.length && movies.map((movie) => (
                    <div key={movie.show.id} className="md:flex justify-center gap-5">
                        <div className="flex justify-center">
                            <img className="w-[350px] md:max-w-72 h-[50vh]" src={movie.show.image?.original} alt="image" />
                        </div>
                       <div className="flex justify-center mt-3 md:mt-0">
                       <div className="mt-3">
                            <h1 className="text-5xl font-bold uppercase">{movie.show.name}</h1>
                            <p className="text-xl text-amber-900 mb-5"><span className="font-bold">Run Time:    </span> {movie.show.runtime} Minutes</p>
                            <p><span className="font-bold mr-14">Type: </span> {movie.show.type}</p>
                            <p><span className="font-bold mr-4">Language:</span> {movie.show.language}</p>
                            <p><span className="font-bold mr-12">Genre:</span>{movie.show.genres[0]}, {movie.show.genres[1]}</p>
                            <p><span className="font-bold mr-12">Ratings:</span>{movie.show.rating.average}/10 </p>
                           
                            <p><span className="font-bold mr-8"> Release:</span>{movie.show.premiered} </p>
                            <p><span className="font-bold mr-16">End:</span>{movie.show.ended} </p>
                            <p><span className="font-bold mr-0.5">Official Site: </span> <a href={movie.show.officialSite}  >Visit Official Site</a></p>
                            <p className="text-2xl font-bold mt-8 text-amber-900">Summary</p>
                         
                            <div className=" w-96 lg:w-[600px] " dangerouslySetInnerHTML={{ __html: movie.show.summary }} />
                            

                            <div>
                   <Button className="transition mt-10 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-600 duration-300 ..."
              onClick={() => {
                document.getElementById('my_modal_3').showModal();
              }}
              disabled={isBooked} 
            >{isBooked ? 'Booked' : 'Buy Ticket'}</Button>
                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box max-w-sm">

                 <div className="flex justify-end">
                 <button onClick={() => document.getElementById('my_modal_3').close()} className="btn">X</button>
                 </div>

                  <form onSubmit={handleSubmit}>
                    <div className="form-control mt-5">
                    <label className="label">
                      <span className="label-text">Show Name</span>
                    </label>
                    <input type="text" defaultValue={movie.show.name} name="showname" readOnly className="input input-bordered w-full" />
                  </div>
                    <div className="form-control mt-5">
                    <label className="label">
                      <span className="label-text">Show Type</span>
                    </label>
                    <input type="url" defaultValue={movie.show.genres[0]} name="type" readOnly className="input input-bordered w-full"  />
                  </div>
                    <div className="form-control mt-5">
                    <label className="label">
                      <span className="label-text">Language</span>
                    </label>
                    <input type="text" defaultValue={movie.show.language} readOnly name="language"  className="input input-bordered w-full"/>
                  </div>
                
                    <div className="form-control mt-5">
                    <label className="label">
                      <span className="label-text">Your Email</span>
                    </label>
                    <input type="email" placeholder="Enter your valid email" name="email"  className="input input-bordered w-full" required/>
                  </div>
                    <div className="form-control mt-5">
                    <label className="label">
                      <span className="label-text">Your Name</span>
                    </label>
                    <input type="text" placeholder="Enter your Full Name" name="name"  className="input input-bordered w-full" required/>
                  </div>
                
                    <div className="form-control mt-5">
                    <label className="label">
                      <span className="label-text">Number of Ticket's</span>
                    </label>
                    <input type="number" placeholder="Ticket count in number" name="count"  className="input input-bordered w-full " required/>
                  </div>
                
                    <button type="submit" className="btn w-full btn-warning mt-5">Book</button>
                  </form>
                  </div>
                </dialog>
                </div>

                        </div>
                       </div>
                    </div>
                ))
            }
            <div>
              <Ad></Ad>
            </div>
        </div>
    );
};

export default Summary;