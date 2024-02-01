

const Student = () => {
    return (
        <div className="mb-20">

            <div className="flex relative bg-red-400 w-[60vw] justify-center mx-auto">
                <img className="opacity-50" src="https://i.ibb.co/9Z0LqcT/images-2-removebg-preview.png" alt="image" />
                <img className="w-96 opacity-50" src="https://i.ibb.co/BgNWvkx/360-F-510862902-K5o4-Sz7od-Ybu-Fs6-FLKq-TH3-L79e-TDtj-Yc.jpg" alt="img" />
                <div className="absolute top-20 mt-3 left-4">
               <h1 className="text-4xl font-bold text-white">40% Discount for Students</h1>
            </div>
            <div className="absolute top-20 right-14">
                <button className="btn bg-black text-white">Book Your Ticket</button>
            </div>
            
            </div>

           

        </div>
    );
};

export default Student;