export const sanitizeInput = (e) => {
    const inputElement = e.target;
    const inputValue = inputElement.value;

    const sanitizedValue = inputValue.replace(/[^0-9.]/g, '');

    inputElement.value = sanitizedValue;
}