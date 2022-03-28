import React, { useState } from 'react';
import Linkes from '../Linkes/Linkes';
import { MenuIcon, XIcon } from '@heroicons/react/solid';

const Navber = () => {

    const [open , setOpen] = useState(false)
    const routes = [
        { id: 1, name: 'Home', link: '/home' },
        { id: 1, name: 'Shop', link: '/Shop' },
        { id: 1, name: 'Deals', link: '/Deals' },
        { id: 1, name: 'Coupons', link: '/Coupons' }
    ]
    return (
        <nav className='bg-indigo-400'>
            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <ul className={`md:flex justify-center p-2 bg-indigo-400 w-full md:static absolute duration-500 ${open ? 'top-6' : 'top-[-120px]'} `}>
                {
                    routes.map(route => <Linkes key={route.id} route={route}></Linkes>)
                }

            </ul>
        </nav>
    );
};

export default Navber;