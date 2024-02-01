

const ExtraSection = () => {
    return (
        <div className="container mx-auto flex my-28">
            <div className="flex-1">
            <img className="w-full h-[65vh]" src="https://i.ibb.co/JRwrSQK/Screenshot-2024-01-31-221044-removebg-preview.png" alt="image" />
            </div>
            <div className="flex-1 mt-8">
                <p className="text-xl mb-4 text-gray-500 font-semibold">Get to Know Us</p>
                <h1 className="text-5xl font-bold mb-4">The Best Movie Ticket Distributor</h1>
                <p className="text-lg mb-12">Elevate your movie-going experience with hassle-free online ticket booking. Explore the latest releases, secure your preferred seats, and immerse yourself in the magic of cinema, all at the click of a button!</p>
                <div className="flex mb-5">
                    <div className="mr-5">
                    <img src="https://i.ibb.co/h9wKBkw/Screenshot-2024-02-01-151700.png" alt="logo" />
                    </div>
                    <div>
                        <h3 className="text-2xl mt-3 font-bold text-gray-800">Unlimited Awards</h3>
                        <p className="">We’ve designed a culture that allows our stewards to assimilate.</p>
                    </div>
                </div>
                <div className="flex mb-10">
                    <div className="mr-2">
                        
                    <img src="https://i.ibb.co/5YG17Qf/Screenshot-2024-02-01-151905.png" alt="logo" />
                    </div>
                    <div>
                        <h3 className="text-2xl mt-3 font-bold text-gray-800">Our Directors</h3>
                        <p >We’ve designed a culture that allows our stewards to assimilate.</p>
                    </div>
                </div>
                <button className="btn btn-warning btn-outline">Discover More</button>
            </div>
        </div>
    );
};

export default ExtraSection;