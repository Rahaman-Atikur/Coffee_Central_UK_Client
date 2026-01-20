import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const Users = () => {
    const initialUsers = useLoaderData();
    const [users, setUsers] = useState(initialUsers);


    const handleDelete = (id) => {
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

                fetch(`http://localhost:3000/users/${id}`, {
                    method: 'DELETE'
                }
                )
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {

                            const remainingUsers = users.filter(user=>user._id !== id);
                            setUsers(remainingUsers);

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
                    })
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });

    }

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            No
                        </th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <tr key={user._id}>
                            <td>
                                {index + 1}
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={users.photo}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Safeer Rahaman</div>
                                        <div className="text-sm opacity-50">Hot Choclate</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {users.name}
                            </td>
                            <td>Crimson</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">V</button>
                                <button className="btn btn-ghost btn-xs">D</button>
                                <button onClick={() => handleDelete(users._id)} className="btn btn-ghost btn-xs">X</button>
                            </th>
                        </tr>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default Users;