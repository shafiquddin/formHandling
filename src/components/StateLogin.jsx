import { useState } from "react";
import Input from "./Input";

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
        setInputForm(preState => ({
            ...preState,
            [identifier]: value
        }));
        setInputInvalid(preState => ({
            ...preState,
            [identifier]: false
        }));
    };

    const onBlurHandler = (identifier) => {
        setInputInvalid(preState => ({
            ...preState,
            [identifier]: true
        }));
    };

    const emailIsValid = inputForm.email.includes('@');
    const passwordIsValid = inputForm.password.trim().length >= 6;

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!emailIsValid || !passwordIsValid) {
            setInputInvalid({
                email: !emailIsValid,
                password: !passwordIsValid
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
                    error={(inputInvalid.email && !emailIsValid) && 'Please enter a valid email'} />
                <Input label="Password" type="password" name="password" id="password" value={inputForm.password}
                    onBlur={() => onBlurHandler('password')}
                    onChange={(event) => onInputChangeHandler('password', event.target.value)}
                    error={(inputInvalid.password && !passwordIsValid) && 'Please enter a valid Password'} />
            </div>

            <p className="form-actions">
                <button type="button" className="button button-flat" onClick={() => setInputForm({ email: '', password: '' })}>Reset</button>
                <button type="submit" className="button">Login</button>
            </p>
        </form>
    );
}
