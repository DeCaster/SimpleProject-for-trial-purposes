import { Form, Link, useNavigation,redirect } from "react-router-dom";
import '../assets/Wrappers/LoginPage.css';
import { FormRow } from "../components";
import {toast} from 'react-toastify'
import customFetch from '../utils/customFetch.js'



// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({request}) =>{

  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post('/auth/login',data)
    toast.success('Login successful')
    return redirect('/dashboard')
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    return error
  }
}

const Login = () => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'Submitting'
  const exploringApp = navigation.state === 'Exploring'

  return (
    <div>
      <Form method='post' className="form">
        <img src="../../public/alphabet-m-icon.svg" alt="murad" className="logo"/>
        <h4>Login</h4>
        <FormRow type="email" name='email' defaultValue='defaultmail@gmail.com'/>
        <FormRow type='password' name='password' defaultValue='secret123'/>
        {/* onClick yerine, formun onSubmit olayı kullanılır */}
        <button className="btn" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit'}</button>
        <button className="btn" type="button" disabled={exploringApp} >{exploringApp ? 'Exploring...' : 'Explore The App'}</button>
        <p className="Login-p">
          Not Member Yet?<span><Link to='/register' className="member-btn">Register</Link></span>
        </p>
      </Form>
    </div>
  );
}

export default Login;
