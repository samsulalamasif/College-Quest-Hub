import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const ReviewCard = ({ allReview }) => {
    const { name, college, photo, review, rating } = allReview

    return (
        <div className="card w-96 bg-neutral-200 shadow-2xl p-10 mx-auto">
            <figure className="py-5">
                <img src={photo} className='w-24 h-24 rounded-full ring ring-green-500
             ring-offset-base-100 ring-offset-2' />
            </figure>
            <div className="flex flex-col items-center text-center">
                <h2 className="text-2xl  font-bold font-serif">{name}</h2>
                <p className='text-gray-700 font-mono'>{review}</p>
                <p className='text-lg font-display font-semibold my-2 text-lime-600'>{college}</p>
                <Rating style={{ maxWidth: 100 }}
                    value={Math.round(rating || 0)} readOnly />
            </div>
        </div>
    );
};

export default ReviewCard;