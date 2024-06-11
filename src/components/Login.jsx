import useInput from "../hooks/useInput";
import Input from "./Input";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation";

export default function Login() {

const {value:emailValue , onBlurHandler:onEmailBlurHandler,onInputChangeHandler:onEmailChangeHandler,error:emailValid} = useInput('',(value)=> isEmail(value) && isNotEmpty(value));
const {value:passwordValue , onBlurHandler:onPasswordBlurHandler,onInputChangeHandler:onPasswordChangeHandler,error:passwordValid} = useInput('',(value)=> hasMinLength(value,6) && isNotEmpty(value));
  const handleSubmit = (event) => {
    event.preventDefault();
    if(emailValid || passwordValid){
      return;
    }
    console.log(emailValue,passwordValue)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
          <Input id="email" value={emailValue} onChange={onEmailChangeHandler} onBlur={onEmailBlurHandler} type="email" name="email" error={emailValid && 'please enter valid email'} />
          <Input id="password" value={passwordValue} onChange={onPasswordChangeHandler} onBlur={onPasswordBlurHandler}  type="password" name="password" error ={passwordValid && 'please enter valid password'} />       
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
