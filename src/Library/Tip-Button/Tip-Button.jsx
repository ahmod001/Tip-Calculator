import { } from 'react';

const TipButton = ({ value, clickHandler }) => {
    return (
        <button className='block text-white font-semibold sm:text-xl text-lg bg-cyan-900 hover:bg-cyan-300 hover:text-cyan-900 transition-all duration-150 mx-auto w-full py-2 rounded-md'
            onClick={event => clickHandler(event)}
            value={value}>
            {value}%
        </button>
    );
};

export default TipButton;