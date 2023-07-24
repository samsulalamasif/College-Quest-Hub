import { Link, useLoaderData } from "react-router-dom";
import logo from "../../../assets/logo.jpg"
const CollegeDetails = () => {
    const loader = useLoaderData()
    const { name, image, admission_dates, events, research_history, sports, college_rating } = loader



    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${logo})` }}>
            <div className="hero-content text-center text-neutral-content">
                <div className="flex flex-col lg:flex-row">
                    <div className="w-1/2 mx-auto">
                        <div className="w-full ">
                            <img className="rounded-xl ring ring-[#8602fa] ring-offset-base-100 ring-offset-2" src={image} />
                        </div>
                    </div>
                    <div className="w-1/2 mx-auto">
                        <h1 className="mb-5 text-6xl text-cyan-200 font-display font-bold">{name}</h1>
                        <p className='py-1 text-lg font-semibold my-3 text-lime-500'>Admission Dates: {admission_dates}</p>
                        <p className='text-amber-300 text-lg font-semibold '>Events: {events[0]}, {events[1]}, {events[2]}</p>
                        <p className='text-pink-300 text-lg font-semibold my-5'>Sports: {sports[0]}, {sports[1]}, {sports[2]}, {sports[3]} </p>

                        <p className='text-sm mt-10 mb-8 text-cyan-100 font-serif font-semibold'>{research_history}</p>
                        <Link to="/admission" className="mt-10 text-center  rounded-xl btn border-0 border-b-4 border-purple-600 bg-sky-500 text-white py-1 font-semibold mx-auto hover:bg-indigo-700">Admission Submit</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default CollegeDetails;






