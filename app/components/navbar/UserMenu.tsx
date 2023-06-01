'use client';

import { useState, useCallback, useEffect } from 'react';
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";

const UserMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(
        () => {
            setIsOpen((value) => !value);
        },
        [],
    )

    const [theme, setTheme] = useState("light");
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }
    
    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-2">
                <div onClick={() => {}}
                    className="dark:text-white hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-400 transition cursor-pointer"
                >
                    Designer Platform
                </div>

                {/* sign in button  */}
                <div onClick={toggleOpen}
                    className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
                    
                    <div className='hidden md:block'>
                        <Avatar />
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg> */}

                    </div>
                </div>

                {/* dark mode */}
                <div onClick={handleThemeSwitch}
                    className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-400 transition cursor-pointer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 dark:fill-yellow-300">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                    </svg>
                </div>
            </div>

            {isOpen && (
                <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
                    <div className="flex flex-col cursor-pointer">
                        <>
                            <MenuItem 
                                onClick={() => {}}
                                label="Login"
                            />
                            <MenuItem 
                                onClick={() => {}}
                                label="Sign up"
                            />
                        </>
                    </div>
                </div>
            )}
        </div>
     );
}

export default UserMenu;