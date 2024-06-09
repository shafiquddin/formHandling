import { useState } from "react";

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
    const passwordIsValid = inputForm.password.length >= 4;

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
                <div className="control no-margin">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={inputForm.email}
                        onBlur={() => onBlurHandler('email')}
                        onChange={(event) => onInputChangeHandler('email', event.target.value)}
                    />
                    <div className="control-error">
                        {inputInvalid.email && !emailIsValid && <p>Please enter a valid email</p>}
                    </div>
                </div>

                <div className="control no-margin">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={inputForm.password}
                        onBlur={() => onBlurHandler('password')}
                        onChange={(event) => onInputChangeHandler('password', event.target.value)}
                    />
                    <div className="control-error">
                        {inputInvalid.password && !passwordIsValid && <p>Please enter a valid password</p>}
                    </div>
                </div>
            </div>

            <p className="form-actions">
                <button type="button" className="button button-flat" onClick={() => setInputForm({ email: '', password: '' })}>Reset</button>
                <button type="submit" className="button">Login</button>
            </p>
        </form>
    );
}
