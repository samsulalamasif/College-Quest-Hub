import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2';

const Admission = () => {
    const { user } = useContext(AuthContext)
    const [selectedCollege, setSelectedCollege] = useState(null);


    const collegeNames = ['Boston College', 'Emirate College', 'Riverdale College', 'Winters College', 'Monarch College', 'Landslide College'];

    const handleCollegeClick = (collegeName) => {
        setSelectedCollege(collegeName);
    };



    const admissionCollege = (event) => {
        event.preventDefault()
        const form = event.target
        const college = form.college.value
        const subject = form.subject.value
        const name = form.name.value
        const email = form.email.value
        const phone = form.phone.value
        const date = form.date.value
        const address = form.address.value
        const photo = form.photo.value
        const admissionData = { college, subject, name, email, phone, date, address, photo }
        console.log(admissionData);

        fetch("http://localhost:5000/admission", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(admissionData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire(
                        'Admission successfully!',
                        'Thank You!',
                        'success'
                    )
                    form.reset()
                }
            })
    }






    return (
        <div className=" flex flex-col lg:flex-row mx-auto">
            <div className='w-1/2 mx-auto'>
                <h2 className="text-4xl font-bold my-10 text-center">Colleges List</h2>
                <ul>
                    {collegeNames.map((collegeName, index) => (
                        <li
                            key={index + 1}
                            className="cursor-pointer font-display font-bold text-center text-3xl
                     rounded-xl w-64 h-12 mt-5 mx-auto border-0 border-b-4 border-orange-500 text-blue-500 hover:text-blue-700"
                            onClick={() => handleCollegeClick(collegeName)}
                        >
                            {collegeName}
                        </li>
                    ))}
                </ul>
            </div>



            <div className='w-1/2 mx-auto'>
                {
                    selectedCollege && (
                        <div className="card max-w-full lg:w-4/5 shadow-2xl bg-gray-300 mt-10 ">
                            <form onSubmit={admissionCollege}>
                                <div className="card-body  flex flex-col items-center">
                                    <h1 className='text-2xl font-bold text-center'>Admission Now</h1>

                                    <div className='flex flex-col lg:flex-row  gap-5'>
                                        <div className="form-control ">
                                            <label className="label">
                                                <span className="label-text">College Name</span>
                                            </label>
                                            <input type="text" name='college'
                                                defaultValue={selectedCollege} required placeholder="college name" className="input input-bordered" />
                                        </div>
                                        <div className="form-control w-56">
                                            <label className="label">
                                                <span className="label-text">Subject</span>
                                            </label>
                                            <select className="select select-bordered max-w-xs" name='subject'>
                                                <option>English</option>
                                                <option>Mathematics</option>
                                                <option>Accounting</option>
                                                <option>Business Studies</option>
                                                <option>Economics</option>
                                                <option>Chemistry</option>
                                                <option>Human Biology</option>
                                                <option>Geography</option>
                                                <option>Physics</option>

                                            </select>
                                        </div>
                                    </div>
                                    <div className='flex flex-col lg:flex-row  gap-5'>
                                        <div className="form-control ">
                                            <label className="label">
                                                <span className="label-text">Candidate Name</span>
                                            </label>
                                            <input type="text" defaultValue={user?.displayName} name='name' required placeholder="name" className="input input-bordered" />
                                        </div>
                                        <div className="form-control ">
                                            <label className="label">
                                                <span className="label-text">Candidate Email</span>
                                            </label>
                                            <input type="text" defaultValue={user?.email} name='email' required placeholder="email" className="input input-bordered" />
                                        </div>
                                    </div>
                                    <div className='flex flex-col lg:flex-row  gap-5'>
                                        <div className="form-control ">
                                            <label className="label">
                                                <span className="label-text">Phone</span>
                                            </label>
                                            <input type="text" name='phone' required placeholder="phone" className="input input-bordered" />
                                        </div>
                                        <div className="form-control w-56">
                                            <label className="label">
                                                <span className="label-text">Date of Birth</span>
                                            </label>
                                            <input type="date" name='date' required placeholder="Date of Birth" className="input input-bordered" />
                                        </div>
                                    </div>
                                    <div className='flex flex-col lg:flex-row  gap-5'>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Address</span>
                                            </label>
                                            <input type="text" name='address' required placeholder="address" className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Photo Url</span>
                                            </label>
                                            <input type="text" name='photo' required placeholder="Photo Url" className="input input-bordered" />
                                        </div>

                                    </div>

                                    <div className="form-control mt-6">
                                        <button className="text-center  rounded-xl btn border-0 border-b-4 border-purple-600 bg-sky-500 text-white py-1 font-semibold mx-auto hover:bg-indigo-700">Admission Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    )}
            </div>
        </div>
    );
};

export default Admission;









