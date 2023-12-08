import { } from 'react';
import { debounce, sanitizeInput } from '../../Helper/utils';

const SmallInputField = ({ name, handleTip, refName }) => {

    const handleChange = (e) => {
        sanitizeInput(e, true);
        (debounce(handleTip, 500))(e);
    }

    const handleEnterKey = (e) => {
        if (e.key === 'Enter') {
            handleTip(e)
        }
    }
    return (
        <input
            onBlur={(event) => handleTip(event)}
            onChange={(event) => handleChange(event)}
            onKeyDown={event => handleEnterKey(event)}
            ref={refName}
            type='text'
            className="bg-gray-50 border border-gray-300 text-cyan-800 text-xl font-semibold rounded-md focus:border-cyan-800 block w-full text-center py-1.5"
            placeholder={name}
        />
    );
};

export default SmallInputField;