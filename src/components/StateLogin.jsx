import { useState } from "react";
import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation.js'

export default function StateLogin() {
    const [inputInvalid, setInputInvalid] = useState({
        email: false,
        password: false
    });

    const [inputForm, setInputForm] = useState({
        email: '',
        password: ''
    });

    const onInputChangeHandler = (identifier, value) => {
        setInputForm(prevState => ({
            ...prevState,
            [identifier]: value
        }));
        setInputInvalid(prevState => ({
            ...prevState,
            [identifier]: false
        }));
    };

    const onBlurHandler = (identifier) => {
        setInputInvalid(prevState => ({
            ...prevState,
            [identifier]: true
        }));
    };

    const emailIsValid = inputInvalid.email && (!isEmail(inputForm.email) || !isNotEmpty(inputForm.email));
    const passwordIsValid = inputInvalid.password && !hasMinLength(inputForm.password, 6);

    const handleSubmit = (event) => {
        event.preventDefault();
        const emailIsInvalid = !isEmail(inputForm.email) || !isNotEmpty(inputForm.email);
        const passwordIsInvalid = !hasMinLength(inputForm.password, 6);

        if (emailIsInvalid || passwordIsInvalid) {
            setInputInvalid({
                email: emailIsInvalid,
                password: passwordIsInvalid
            });
            return;
        }
        console.log(inputForm);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                <Input label="Email" type="email" name="email" id="email" value={inputForm.email}
                    onBlur={() => onBlurHandler('email')}
                    onChange={(event) => onInputChangeHandler('email', event.target.value)}
                    error={emailIsValid && 'Please enter a valid email'} />
                <Input label="Password" type="password" name="password" id="password" value={inputForm.password}
                    onBlur={() => onBlurHandler('password')}
                    onChange={(event) => onInputChangeHandler('password', event.target.value)}
                    error={passwordIsValid && 'Please enter a valid password'} />
            </div>

            <p className="form-actions">
                <button type="button" className="button button-flat" onClick={() => {
                    setInputForm({ email: '', password: '' });
                    setInputInvalid({ email: false, password: false });
                }}>Reset</button>
                <button type="submit" className="button">Login</button>
            </p>
        </form>
    );
}
