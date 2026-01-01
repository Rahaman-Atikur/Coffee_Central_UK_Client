import React from 'react';
import Swal from 'sweetalert2';
const CoffeeCard = ({ coffee }) => {
    const { _id, name, price, quantity, photo } = coffee;
    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
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
                    <button onClick={() => handleDelete(_id)} className='btn'>X</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;