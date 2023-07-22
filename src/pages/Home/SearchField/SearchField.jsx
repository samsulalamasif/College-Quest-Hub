import React from 'react';

const SearchField = () => {
    return (
        <div className='flex justify-center p-5'>
            <input type="text" onChange={(event) => setSearchText(event.target.value)}
                placeholder="Search College" className="input input-bordered" />
        </div>
    );
};

export default SearchField;