import React from 'react';

const Linkes = (props) => {
    const { name, link } = props.route;
    return (
        <li className='mr-12'>
            <a href={link}>{name}</a>
        </li>
    );
};

export default Linkes;     