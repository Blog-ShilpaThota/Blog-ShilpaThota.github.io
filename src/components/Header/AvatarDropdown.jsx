import React, { useState, useEffect } from 'react';
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Link from "../../components/Link";
import PageLogin from '../../app/page/LoginPage';
import axios from 'axios';
import { googleLogout } from '@react-oauth/google';
import NcModal from '../NcModal/NcModal';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import Avatar from '../Avatar/Avatar';
import { useItems } from '../../contains/ItemContext';
export default function AvatarDropdown() {
  const {setLoggedin,loggedin,logout} = useItems();
  const [ user, setUser ] = useState(null);
  const navigate = useNavigate();
  useEffect(
      () => {
        console.log(user);
          if (user) {
            console.log(user);
            if(user.email==="itsmeshilpa21@gmail.com"||user.email=="admin@gmail.com"){
            setLoggedin(true);
            }
            else{
              alert("not authenticated user");
              setLoggedin(false);
            }
          }
      },
      [ user ]
  );

  // // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
      googleLogout();
      setUser(null);
      logout();
      setLoggedin(false);
  };
  // const handleLogout = () => {
  //   logOut();
  //   setIsLoggedIn(false);
  // };

  return (
    <div className="AvatarDropdown ">
      <Popover className="relative">
        {({ open, close }) => (
          <>
            <Popover.Button
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none flex items-center justify-center`}
            >
              <svg
                className=" w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                                <path
                  d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Your SVG for avatar icon */}
              </svg>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 w-screen max-w-[260px] px-4 mt-3.5 right-0 sm:px-0">
                <div className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid grid-cols-1 gap-6 bg-white dark:bg-neutral-800 py-7 px-6">
                    {/* Conditionally render menu items based on login status */}
                    {loggedin ? (
                      <>
                       <div className="flex items-center space-x-3">
                      <Avatar imgUrl={user.imgUrl} sizeClass="w-12 h-12" />

                      <div className="flex-grow">
                        <h4 className="font-semibold">{user.name}</h4>
                        {/* <p className="text-xs mt-0.5">Los Angeles, CA</p> */}
                      </div>
                    </div>
                        {/* Your logged-in menu items */}
                        <Link
                          href={"/dashboard"}
                          className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                          onClick={() => close()}
                        >
                          {/* Your dashboard icon */}
                          <div className="ml-4">
                            <p className="text-sm font-medium ">Dashboard</p>
                          </div>
                        </Link>
                        {/* Add more menu items here */}
                        <Link
                          href={"/#"}
                          className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                          onClick={logOut}
                        >
                          {/* Your logout icon */}
                          <div className="ml-4">
                            <p className="text-sm font-medium ">Logout</p>
                          </div>
                        </Link>
                      </>
                    ) : (
                      <>
                      <NcModal
                       renderTrigger={(openModal) => (
                        <div onClick={openModal}>
                          <Button>Login</Button>
                       </div>
                      )}
                      modalTitle="Login"
                      renderContent={() => <PageLogin setUser={setUser} />}

                     />

                      </>
                    )}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
