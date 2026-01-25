import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newCoffee = Object.fromEntries(formData.entries());
        console.log(newCoffee);

        //Send coffee data to the database

        fetch('https://coffee-central-uk.vercel.app/coffees', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Coffee Added",
                        icon: "success",
                        draggable: true
                    });
                }
            })

    }
    return (
        <div className='p-24'>
            <div className='p-12 text-center space-y-4'>
                <h1 className="text-6xl">Add New Coffee</h1>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleAddCoffee}>
                <div className='grid grid-cols-2  gap-6'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 w-full">
                        <label className="label">Name</label>
                        <input name='name' type="text" className="input w-full" placeholder="Enter Coffee Name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 w-full">
                        <label className="label">Price</label>
                        <input name='price' type="text" className="input w-full" placeholder="Enter Price per Cup" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 w-full">
                        <label className="label">Supplier</label>
                        <input name='supplierName' type="text" className="input w-full" placeholder="Enter supplier name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 w-full">
                        <label className="label">Category</label>
                        <input name='CategoryName' type="text" className="input w-full" placeholder="Enter Category Name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 w-full">
                        <label className="label">Details</label>
                        <input name='coffeeDetails' type="text" className="input w-full" placeholder="Enter Coffee Details" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 w-full">
                        <label className="label">Category</label>
                        <input name='category' type="text" className="input w-full" placeholder="Enter Coffee Category" />
                    </fieldset>

                </div>
                {/* Photo Field and Button */}
                <div className='my-5'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 w-full">
                        <label className="label">Photo</label>
                        <input name='photo' type="text" className="input w-full" placeholder="Upload Photo from Device" />
                        <button className="btn btn-active bg-orange-600">Add Coffee</button>
                    </fieldset>
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;