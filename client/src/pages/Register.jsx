import { Form,redirect,useNavigation,Link } from "react-router-dom";
import '../assets/Wrappers/RegisterPage.css';
import { FormRow } from "../components";
import customFetch from '../../src/utils/customFetch.js'
import { toast } from 'react-toastify';
import { useState } from "react";


//cok onemli burayi cok arasdir burayla register pagene data gonderiyoruz
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post('/auth/register', data);
    toast.success('Registration successful');
    return redirect('/login');
  } catch (error) {
    toast.error(error?.response?.data?.msg);

    return error;
  }
};
const Register = () => {
  const [showPassword,setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);
  const navigation = useNavigation()
  console.log(navigation);
  const isSubmitting = navigation.state === 'submitting'
  return (
    <div>
      <Form method='post' className="form">
        <img src="../alphabet-m-icon.svg" alt="murad" className="logo"/>
        <h4>Register</h4>
        <FormRow type="text" name="name" defaultValue="DefaultName"/>
        <FormRow type="text" name="lastName" labelText="lastName" defaultValue="DefaultLastName"/>
        <FormRow type="text" name="location" defaultValue="DefaultLocation"/>
        <FormRow type="email" name="email" defaultValue="defaultmail@gmail.com"/>
        <FormRow type="password" name="password" labelText="Password" defaultValue="secret123" togglePassword={togglePassword} showPassword={showPassword}/>
        <button type="submit" className="btn btn-block" disabled={isSubmitting}>{isSubmitting ? 'submitting...' : 'submit'}</button>
        <p className="registerP">Already a member? <Link to='/login' className="member-btn">Login</Link></p>
      </Form>
    </div>
  )
}

export default Register;
