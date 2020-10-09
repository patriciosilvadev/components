import type { Validation } from "./types";

export const validateForm = <T>(validations: Validation<T>[]) => {
    let fieldsAreValid: boolean[] = [];
    let errorMessages: { [name: string]: string } = {};
    for (let i = 0; i < validations.length; i++) {
        let state = validations[i];
        let fieldIsValid = state.validation(state.value);
        fieldsAreValid.push(fieldIsValid);
        errorMessages[state.name] = fieldIsValid ? "" : state.message;
    }
    const formIsValid = fieldsAreValid.every((field) => field);
    return [formIsValid, errorMessages] as [typeof formIsValid, typeof errorMessages];
};
