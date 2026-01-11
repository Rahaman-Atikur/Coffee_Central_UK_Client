import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const handleUpdateCoffee = e=>{
        e.preventDefault();

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
                         <Link to={`/coffee/${_id}`}>
                             <button className='btn join-item'>Show</button>
                         </Link>
                         <Link to={`/updateCoffee/${_id}`}>
                             <button className='btn join-item'>Update</button>
                         </Link>
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

export default UpdateCoffee;