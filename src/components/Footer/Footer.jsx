import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4">
            <div className="container mx-auto text-center">
                <p> <span className='font-display text-2xl font-semibold'>College Quest Hub</span></p>
                <p>&copy; {new Date().getFullYear()} College Quest Hub. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;