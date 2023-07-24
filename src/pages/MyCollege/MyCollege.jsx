import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import AdmissionCollege from './AdmissionCollege';

const MyCollege = () => {


    const { user } = useContext(AuthContext)
    const [myCollege, setMyCollege] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/admission/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyCollege(data))
    }
        , [user])






    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            No.
                        </th>
                        <th>Candidate Photo</th>
                        <th>Candidate Name & Email</th>
                        <th>College & Subject</th>
                        <th>Details</th>
                        <th>Review & Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myCollege.map((admissionCollege, index) => <AdmissionCollege
                            key={admissionCollege._id}
                            index={index}
                            admissionCollege={admissionCollege}
                        >
                        </AdmissionCollege>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default MyCollege;