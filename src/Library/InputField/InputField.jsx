import { } from 'react';
import { sanitizeInput } from '../../Helper/utils';

const InputField = ({ name, icon, showError, errorMsg, refName }) => {

    return (
        <div className='space-y-2'>
            <div className='flex justify-between'>
                {/* Title */}
                <h1 className='text-cyan-700 font-semibold tracking-wide'>{name}</h1>

                {/* Error Message */}
                {showError && (<h1 className='text-red-500 font-semibold tracking-wide'>{errorMsg}</h1>)}
            </div>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    {/* Icon */}
                    <img src={icon} alt="" />
                </div>

                <input
                    onChange={(event) => sanitizeInput(event)}
                    type='text'
                    className={`bg-gray-50 border border-gray-300 text-xl text-end font-semibold rounded-md focus:border-cyan-800 block w-full ps-10 px-2.5 py-1.5 ${showError ? "text-red-500" : "text-cyan-800"}`}
                    placeholder="0"
                    ref={refName}
                />
            </div>

        </div>
    );
};

export default InputField;