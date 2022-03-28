import React from 'react';
import PriceOption from '../PricingOption/PriceOption';

const Pricing = () => {
    const pricingOption = [
        { id: 1, name: 'Free', price: 0 , benefits :[ 
        'Lifetime Free' , 
        ' Unlimited Projects' ,
        ' locallize Dieals' ,
        'crazy deals'
        ],
    },
        { id: 2, name: 'Regular', price: 9.99 , benefits :[ 
            'Everything Free' , 
            ' Unlimited Projects' ,
            ' locallize Dieals' ,
            'crazy deals'
            ], 
        },
        { id: 1, name: 'Premium', price: 19.99 , benefits :[ 
            'Everything on regular' , 
            ' Unlimited Projects' ,
            ' locallize Dieals' ,
            'crazy deals'
            ],
         },
    ]

    return (
        <div className='bg-indigo-300 p-4 mt-8'>
            <h1 className='text-6xl text-white font-momo'>Best Deals Of </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet facilis culpa facere voluptate fugit optio natus magnam similique deleniti! Tempore?</p>
            <div className='grid md:grid-cols-3 gap-4'>
                {
                    pricingOption.map(option => <PriceOption
                        key={option.id}
                        option={option}
                    ></PriceOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;