import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const initialCoffees = useLoaderData();
    // console.log(coffees);
    const [coffees, setCoffees] = useState(initialCoffees);
    return (
        <div>
            <div className='grid grid-cols-2  gap-6'>
                {
                    coffees.map(coffee => <CoffeeCard key={coffee._id} coffees={coffees} coffee={coffee} setCoffees={setCoffees}></CoffeeCard>)

                }
            </div>
        </div>
    );
};

export default Home;