import React, { useEffect, useState } from 'react';
import CollegeCard from '../CollegeCard/CollegeCard';
import Reviews from '../../Reviews/Reviews';
import Gallery from '../Gallery/Gallery';
import ResearchPaper from '../Research/ResearchPaper';


const Home = () => {
    const [cards, setCard] = useState([])


    useEffect(() => {

        fetch("https://college-quest-hub-server-side.vercel.app/colleges")
            .then(res => res.json())
            .then(data => setCard(data))

    }, [])


    const [searchText, setSearchText] = useState("")
    const handleSearch = () => {
        fetch(`https://college-quest-hub-server-side.vercel.app/collegeSearch/${searchText}`)
            .then(res => res.json())
            .then(data => setCard(data))
    }


    return (
        <div>
            <div
                className='flex justify-center p-5'>
                <div className="form-control w-full">
                    <div className="input-group justify-center">
                        <input type="text" onChange={(event) => setSearchText(event.target.value)}
                            placeholder="Search College" className="input input-bordered" />
                        <button onClick={handleSearch} className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>




            <div data-aos="fade-up" data-aos-duration="2000">
                <h1 className='text-5xl font-mono font-semibold text-center'>Our Colleges</h1>
                <p className='text-slate-600 font-bold py-4 text-center'>
                    Our College consectetur adipisicing elit. Reiciendis veniam, eligendi <br />
                    quisquam omnis illo sit soluta cupiditate distinctio facere. Architecto deleniti sdrt sdf
                    <br />neque, ab tempore quos perspiciatis est sapiente alias voluptas.</p>

                <div className='flex flex-col lg:flex-row lg:w-4/5 mx-auto gap-8 my-16'>
                    {
                        cards.slice(0, 3).map(card => <CollegeCard key={card.id}
                            card={card}></CollegeCard>)
                    }
                </div>
            </div>

            <Gallery></Gallery>
            <ResearchPaper></ResearchPaper>
            <Reviews></Reviews>

        </div>
    );
};

export default Home;