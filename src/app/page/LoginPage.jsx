import { GoogleLogin } from '@react-oauth/google';
import DashboardLayout from '../dashboard/dashboardLayout';
import Heading2 from '../../components/Heading/Heading2';
import { jwtDecode } from 'jwt-decode';
import ButtonPrimary from '../../components/Button/ButtonPrimary';
import Input from '../../components/Input/Input';
import { useState } from 'react';
import { useItems } from '../../contains/ItemContext';

const PageLogin = ({setUser}) => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const {  setLoggedin } = useItems();

    const handleOnClick = () => {
        if (username === "admin@gmail.com" && password === "Admin@21") {
            const user = {
              email:'admin@gmail.com',
              name:'Shilpa Thota',
              imgUrl:'/shilpa.jpg'
            }
            setUser(user);
            setLoggedin(true);
        } else {
            setLoggedin(false);
        }
    };
    const handleSuccess = (credentialResponse) => {
       const decoded= jwtDecode(credentialResponse.credential);
       setUser(decoded);
       console.log(decoded);
      };
    const responseMessage = (response) => {
        console.log(response);
        handleSuccess(response);
      };
    const errorMessage = (error) => {
        console.log(error);
    };
    return (
      <DashboardLayout>
        <header className="text-center max-w-2xl mx-auto - mb-14 sm:mb-16 lg:mb-20 ">
          <Heading2>Login</Heading2>
          <span className="block text-sm mt-2 text-neutral-700 sm:text-base dark:text-neutral-200">
            Welcome to our blog magazine Community
          </span>
        </header>
  
        <div className="max-w-md mx-auto space-y-6">
          <div className="grid gap-3">
          <GoogleLogin onSuccess={responseMessage} onError={errorMessage} flow="auth-code"/>

          </div>
          <form className="grid grid-cols-1 gap-6" action="#" method="post">
          <label className="block">
            <span className="text-neutral-800 dark:text-neutral-200">
              Email address
            </span>
            <Input
              type="email"
              placeholder="example@example.com"
              className="mt-1"
              onChange={(e)=>{setUsername(e.target.value)}}
            />
          </label>
          <label className="block">
            <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
              Password
              {/* <NcLink href="/forgot-pass" className="text-sm underline">
                Forgot password?
              </NcLink> */}
            </span>
            <Input type="password" className="mt-1"  onChange={(e)=>{setPassword(e.target.value)}}/>
          </label>
          <ButtonPrimary type="submit" onClick={handleOnClick}>Continue</ButtonPrimary>
        </form>
        </div>
      </DashboardLayout>
    );
  };
  
  export default PageLogin;
  