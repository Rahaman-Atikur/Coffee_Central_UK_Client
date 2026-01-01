import React from 'react';

const CoffeeCard = ({ coffee }) => {
    const { name, price, quantity, photo } = coffee;
    const handleDelete = (_id) => {
        console.log(_id);
    }
    return (
        <div className="card card-side bg-base-100 shadow-sm">
            <figure>
                <img
                    src={photo}
                    alt="Movie" />
            </figure>
            <div className="flex w-full mt-6 justify-around border-8">
                <div className='mt-6'>
                    <h2 className="card-title">{name}</h2>
                    <p>price:{price}</p>
                    <p>quantity:{quantity}</p>
                </div>
                <div className='join join-vertical space-y-2'>
                    <button className='btn'>View</button>
                    <button className='btn'>Edit</button>
                    <button onClick={()=>handleDelete(_id)} className='btn'>X</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;