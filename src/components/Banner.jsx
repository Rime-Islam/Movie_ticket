import { Button } from "@material-tailwind/react";



const Banner = () => {
    return (
        <div className="container h-[90vh] bg-amber-400 mx-auto flex items-center justify-center">
            <div className=" pl-5 mt-20">
                <h3 className="text-5xl font-bold ">Online</h3>
                <h1 className="text-6xl font-extrabold uppercase">Movie Tickets</h1>
                <p className="text-lg w-[500px] my-5">Elevate your movie-going experience with hassle-free online ticket booking. Explore the latest releases, secure your preferred seats, and immerse yourself in the magic of cinema, all at the click of a button. Don't miss out on the excitement – your cinematic adventure starts here!</p>
                <Button color="deep-purple" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">GET Ticket</Button>
            </div>
          <div className=" pr-5">
          <img className="w-[720px]" src="https://i.ibb.co/92NpZMj/Screenshot-2024-02-01-002426-removebg-preview.png" alt="banner" />
          </div>
        </div>
    );
};

export default Banner;