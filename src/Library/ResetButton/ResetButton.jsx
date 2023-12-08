import { } from 'react';

const ResetButton = ({handleReset}) => {
    return (
        <button onClick={handleReset} className='block font-semibold sm:text-xl text-lg hover:bg-cyan-400 bg-cyan-300 text-cyan-900 transition-all duration-150 mx-auto w-full py-2 rounded-md '>
            RESET
        </button>
    );
};

export default ResetButton;