import { useLoaderData } from "react-router-dom";
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
                        <h1 className="mb-5 text-6xl text-cyan-200 mt-10 font-display font-bold">{name}</h1>
                        <p className='py-1 text-lg font-semibold my-3 text-lime-500'>Admission Dates: {admission_dates}</p>

                    </div>

                </div>
            </div>
        </div>
    );
};


export default CollegeDetails;






