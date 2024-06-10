import { useState } from "react";

const useInput = (defaultValue,validateFn) =>{
    const [didEdit, setDidEdit] = useState(false);
    const [enteredValue, setEnteredValue] = useState(defaultValue);

    const isValid = validateFn(enteredValue);

    const onInputChangeHandler = (event) => {
        setEnteredValue(event.target.value);
        setDidEdit(false);
    };

    const onBlurHandler = () => {
        setDidEdit(true);
    };

    return {
        value:enteredValue,
        onInputChangeHandler,
        onBlurHandler,
        error:didEdit && !isValid,
    }

}

export default useInput;