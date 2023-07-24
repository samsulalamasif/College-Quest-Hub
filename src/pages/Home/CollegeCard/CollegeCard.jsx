import React from 'react';
import { Link } from 'react-router-dom';

const CollegeCard = ({ card }) => {
    const { image, name, admission_dates, events, sports, research_history, _id } = card
    return (
        <div className="card w-96 bg-base-100 shadow-2xl mx-auto">
            <figure><img className='w-full h-60' src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="text-2xl font-display text-center font-bold">{name}</h2>
                <p className='font-bold py-1 text-sm text-lime-600'>Admission Dates: {admission_dates}</p>
                <p className='text-cyan-700 font-serif'>Events: {events[0]}, {events[1]}, {events[2]}</p>
                <p className='text-amber-600 font-serif mb-4'>Sports: {sports[0]}, {sports[1]}, {sports[2]}, {sports[3]} </p>
                <p className='mb-8 text-gray-700'>{research_history}</p>

                <Link className="text-center  rounded-xl w-28 h-10 border-0 border-b-4 border-purple-600 bg-gray-800 text-white py-1 font-semibold mx-auto hover:bg-cyan-700"
                    to={`/details/${_id}`}>Details</Link>

            </div>
        </div>
    );
};

export default CollegeCard;