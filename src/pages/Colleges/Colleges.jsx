import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Colleges = () => {
    const [colleges, setColleges] = useState([])

    useEffect(() => {

        fetch("https://college-quest-hub-server-side.vercel.app/colleges")
            .then(res => res.json())
            .then(data => setColleges(data))

    }, [])


    return (
        <div>
            <h1 className='text-5xl font-mono font-semibold text-center mt-10'>Our Colleges</h1>
            <p className='text-slate-600 font-bold py-8 text-center'>
                Our College consectetur adipisicing elit. Reiciendis veniam, eligendi <br />
                quisquam omnis illo sit soluta cupiditate distinctio facere. Architecto deleniti sdrt sdf
                <br />neque, ab tempore quos perspiciatis est sapiente alias voluptas.</p>

            <div className='grid grid-cols lg:grid-cols-3 lg:p-20 gap-16'>
                {
                    colleges.map(college => <div key={college._id} className="card w-96 bg-base-100 shadow-2xl mx-auto">
                        <figure><img className='w-full h-60' src={college.image} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="text-2xl font-display text-center font-bold">{college.name}</h2>
                            <p className='font-bold py-1 text-sm text-lime-600'>Admission Dates: {college.admission_dates}</p>

                            <p className='mb-8 text-gray-700'>{college.research_history}</p>

                            <Link className="text-center  rounded-xl w-28 h-10 border-0 border-b-4 border-purple-600 bg-gray-800 text-white py-1 font-semibold mx-auto hover:bg-cyan-700"
                                to={`/details/${college._id}`}>Details</Link>

                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Colleges;