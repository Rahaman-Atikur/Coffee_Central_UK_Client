import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const { _id, name, quantity, price, taste, supplier, photo, details } = useLoaderData();
    const handleUpdateCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updateCoffee = Object.fromEntries(formData.entries());
        console.log(updateCoffee);
        fetch(`http://localhost:3000/coffees/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
            .then(res => res.json())
    .then(data => {
        if (data.modifiedCount) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Coffee Updated Successfully",
                showConfirmButton: false,
                timer: 1500
            });
        }
        console.log(data);
    })
    }
return (
    <div className='p-24'>
        <div className='p-12 text-center space-y-4'>
            <h1 className="text-6xl">Add New Coffee</h1>
            <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
        </div>
        <form onSubmit={handleUpdateCoffee}>
            <div className='grid grid-cols-2  gap-6'>
                <fieldset className='fieldset bg-base-200 border-base-300 rounded-box  border p-4 w-full'>
                    <label className="label">Name</label>
                    <input name="name" defaultValue={name} />
                </fieldset>

                <fieldset className='fieldset bg-base-200 border-base-300 rounded-box  border p-4 w-full'>
                    <label className="label">Price</label>
                    <input name="price" defaultValue={price} />
                </fieldset>

                <fieldset className='fieldset bg-base-200 border-base-300 rounded-box  border p-4 w-full'>
                    <label className="label">Quantity</label>
                    <input name="quantity" defaultValue={quantity} />
                </fieldset>

                <fieldset className='fieldset bg-base-200 border-base-300 rounded-box  border p-4 w-full'>
                    <label className="label">Taste</label>
                    <input name="taste" defaultValue={taste} />
                </fieldset>

                <fieldset className='fieldset bg-base-200 border-base-300 rounded-box  border p-4 w-full'>
                    <label className="label">Supplier</label>
                    <input name="supplier" defaultValue={supplier} />
                </fieldset>

                <fieldset className='fieldset bg-base-200 border-base-300 rounded-box  border p-4 w-full'>
                    <label className="label">Details</label>
                    <input name="details" defaultValue={details} />
                </fieldset>

                <fieldset className='fieldset bg-base-200 border-base-300 rounded-box  border p-4 w-full'>
                    <label className="label">Photo</label>
                    <input name="photo" defaultValue={photo} />
                </fieldset>

            </div>
        </form>
    </div>
);
};

export default UpdateCoffee;