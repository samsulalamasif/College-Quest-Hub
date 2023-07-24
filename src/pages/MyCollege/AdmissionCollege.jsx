import React from 'react';
import Swal from 'sweetalert2';



const AdmissionCollege = ({ admissionCollege, index }) => {
    const { college, subject, name, email, photo, date, phone, address } = admissionCollege

    const CandidateName = name
    const CandidateCollege = college
    const CandidatePhoto = photo


    const reviewHandle = (event) => {
        event.preventDefault()
        const form = event.target
        const review = form.review.value
        const rating = form.rating.value
        const name = CandidateName
        const college = CandidateCollege
        const photo = CandidatePhoto
        const reviewRating = { review, rating, name, college, photo }
        console.log(reviewRating);

        fetch("http://localhost:5000/review", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(reviewRating)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire(
                        'Review & rating successfully!',
                        'Thank You!',
                        'success'
                    )
                    form.reset()
                }
            })
    }




    return (
        <tr className=' font-semibold'>
            <th>
                <h1>{index + 1}</h1>
            </th>
            <td>
                <div className="avatar">
                    <div className="w-28 rounded-full ring ring-violet-700 ring-offset-base-100 ring-offset-2">
                        <img src={photo} />
                    </div>
                </div>
            </td>
            <td>
                <h1 className='text-3xl text-cyan-500 font-display font-semibold'>{name}</h1>
                <h1>{email}</h1>
            </td>
            <td>
                <h1 className='text-3xl text-lime-500 font-display font-semibold'>{college}</h1>
                <h1>{subject}</h1>
            </td>
            <td>
                <div>
                    <h1>Date of Birth: {date}</h1>
                    <h1>Phone: {phone}</h1>
                    <h1>Address: {address}</h1>
                </div>
            </td>
            <th >
                <form onSubmit={reviewHandle} className='w-52'>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Review</span>
                        </label>
                        <input type="text" name='review' required placeholder="review" className="input input-bordered" />
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name='rating' required placeholder="rating" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="text-center  rounded-xl btn border-0 border-b-4 border-purple-600 bg-sky-500 text-white py-1 font-semibold mx-auto hover:bg-indigo-700">Add Review & Rating</button>
                    </div>
                </form>

            </th>

        </tr>
    );
};

export default AdmissionCollege;