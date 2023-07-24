import React from 'react';
import { Link } from 'react-router-dom';



const AdmissionCollege = ({ admissionCollege, index }) => {
    const { college, subject, name, email, photo, date, phone, address } = admissionCollege


    return (
        <tr className=' font-semibold'>
            <th>
                <h1>{index + 1}</h1>
            </th>
            <td>
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-violet-700 ring-offset-base-100 ring-offset-2">
                        <img src={photo} />
                    </div>
                </div>
            </td>
            <td>
                <h1 className='text-xl text-cyan-500 font-display font-semibold'>{name}</h1>
                <h1>{email}</h1>
            </td>
            <td>
                <h1 className='text-xl text-lime-500 font-display font-semibold'>{college}</h1>
                <h1>{subject}</h1>
            </td>
            <td>
                <div>
                    <h1>Date of Birth: {date}</h1>
                    <h1>Phone: {phone}</h1>
                    <h1>Address: {address}</h1>
                </div>
            </td>
            <th>
                <Link className="btn btn-info btn-sm ">Update</Link>
            </th>

        </tr>
    );
};

export default AdmissionCollege;