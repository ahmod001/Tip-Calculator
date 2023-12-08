export const sanitizeInput = (e, smallInput) => {
    const inputElement = e.target;
    const inputValue = inputElement.value;

    const sanitizedValue = inputValue.replace(/[^0-9.]/g, '');

    if (smallInput) {
        inputElement.value = sanitizedValue.slice(0, 3); //Max input length 3 Digits
    } else {
        inputElement.value = sanitizedValue;
    }
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