import { ArrowCircleRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Benefit from '../Benefit/Benefit';


const PriceOption = (props) => {
    const { name, price, benefits } = props.option;
    return (
        <div className='bg-white p-4 rounded mt-6'>
            <h1 className='bg-indigo-300 py-2 rounded font-momo text-xl font-bold '>{name}</h1>
            <p className='m-4'>
                <small className='text-4xl font-bold '>{price}</small>
                <small className='text-xl'>/mo</small>
            </p>
            <p>
                <h3 className=' text-left'>Benefits : </h3>
                {
                    benefits.map(benefit => <Benefit benefit={benefit}></Benefit>)
                }

            </p>
            <button className='flex items-center justify-center w-full bg-green-500 py-2 rounded text-bold text-white mt-4 hover:text-black'>
                Bye Now <ArrowCircleRightIcon className='h-5 w-5 ml-2'></ArrowCircleRightIcon>
            </button>
        </div>
    );
};

export default PriceOption;