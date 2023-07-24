import { useState, useEffect } from 'react';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {

        fetch("https://college-quest-hub-server-side.vercel.app/review")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='mb-20' data-aos="fade-up-right" data-aos-duration="2000">
            <h1 className='text-5xl font-mono font-semibold text-center'>Our Students Review</h1>
            <p className='text-slate-600 font-bold py-8 text-center mb-10'>
                Our college valuable students consectetur adipisicing elit. Reiciendis veniam, eligendi <br />
                quisquam omnis illo sit soluta cupiditate distinctio facere. Architecto deleniti sdrt sdf
                <br />neque, ab tempore quos perspiciatis est sapiente alias voluptas.</p>

            <div className='flex flex-col lg:flex-row lg:w-4/5 mx-auto gap-8'>
                {
                    reviews.map(allReview => <ReviewCard key={allReview._id}
                        allReview={allReview}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;