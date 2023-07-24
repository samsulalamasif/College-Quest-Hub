import { Link, useRouteError } from 'react-router-dom';

const Error = () => {

    const { error, status } = useRouteError();
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/system-background-compromised-by-hacking-3d-illustration_1419-2809.jpg?w=1380&t=st=1690172091~exp=1690172691~hmac=04409799401703eff8a542ad6a148c5faf4e7cc2bb65cfca6b8b11b4b1e8af99)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-lg">
                    <h1 className='text-white text-2xl mb-5 font-bold'>
                        Page Not Found...... <br />
                        {error?.message}</h1>
                    <Link to="/"> <button className='btn bg-sky-700 text-white border-0'>Back to homepage</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Error;