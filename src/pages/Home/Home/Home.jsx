import React, { useEffect, useState } from 'react';
import CollegeCard from '../CollegeCard/CollegeCard';


const Home = () => {
    const [cards, setCard] = useState([])


    useEffect(() => {

        fetch("http://localhost:5000/colleges")
            .then(res => res.json())
            .then(data => setCard(data))

    }, [])
    return (
        <div>
            <div className='flex justify-center p-10'>
                <input type="text" onChange={(event) => setSearchText(event.target.value)}
                    placeholder="Search College" className="input input-bordered" />
            </div>
            <h1 className='text-5xl font-mono font-semibold text-center'>Our Colleges</h1>
            <p className='text-slate-600 font-bold py-8 text-center'>
                Our College consectetur adipisicing elit. Reiciendis veniam, eligendi <br />
                quisquam omnis illo sit soluta cupiditate distinctio facere. Architecto deleniti sdrt sdf
                <br />neque, ab tempore quos perspiciatis est sapiente alias voluptas.</p>

            <div className='flex flex-col lg:flex-row lg:w-4/5 mx-auto gap-8 my-20'>
                {
                    cards.slice(0, 3).map(card => <CollegeCard key={card.id}
                        card={card}></CollegeCard>)
                }
            </div>
        </div>
    );
};

export default Home;