export const required = value => {
    if(value) return undefined;

    return "Error: Fill in the field";
}

export const maxLengthCreator = (maxLength) => (value) => {
    if(value.length > maxLength) return `Max length is ${maxLength} symbols`;

    return undefined;
}

export const minLength = value => {
    if(value) return undefined;

    return "Error message";
}