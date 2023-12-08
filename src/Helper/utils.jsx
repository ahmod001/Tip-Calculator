export const sanitizeInput = (e) => {
    const inputElement = e.target;
    const inputValue = inputElement.value;

    const sanitizedValue = inputValue.replace(/[^0-9.]/g, '');

    inputElement.value = sanitizedValue;
}

export const debounce = (fn, delay) => {
    let timeout;

    return (...args) => {
        clearTimeout(timeout);
        
        timeout = setTimeout(() => {
            fn(...args);
        }, delay)
    }
}