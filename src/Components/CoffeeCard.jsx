import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
const CoffeeCard = ({ coffee,coffees,setCoffees }) => {
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
            console.log(result.isConfirmed);
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                fetch(`http://localhost:3000/coffees/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log('after deleting the data:',data);
                        if (data.deletedCount) {
                            const swalWithBootstrapButtons = Swal.mixin({
                                customClass: {
                                    confirmButton: "btn btn-success",
                                    cancelButton: "btn btn-danger"
                                },
                                buttonsStyling: false
                            });
                            swalWithBootstrapButtons.fire({
                                title: "Are you sure?",
                                text: "You won't be able to revert this!",
                                icon: "warning",
                                showCancelButton: true,
                                confirmButtonText: "Yes, delete it!",
                                cancelButtonText: "No, cancel!",
                                reverseButtons: true
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    swalWithBootstrapButtons.fire({
                                        title: "Deleted!",
                                        text: "Your file has been deleted.",
                                        icon: "success"
                                    });
                                    // Remove the coffee from the state

                                    const remainingCoffees = coffees.filter(cof => cof._id !== _id);
                                    setCoffees(remainingCoffees);


                                } else if (
                                    /* Read more about handling dismissals below */
                                    result.dismiss === Swal.DismissReason.cancel
                                ) {
                                    swalWithBootstrapButtons.fire({
                                        title: "Cancelled",
                                        text: "Your imaginary file is safe :)",
                                        icon: "error"
                                    });
                                }
                            });
                        }
                    })
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

export default CoffeeCard;