import Link from 'next/link'
import React from 'react'
import LogoutButton from "./LogoutButton";
import { getSession } from '../_lib/session';



const Navbar = async () => {
    const session = await getSession();
    // const session = true;
    return (
        <nav
            className='bg-white shadow-sm'>
            <div className="container mx-auto p-4 flex justify-between items-center">
                <Link href="/" className='text-xl font-bold text-blue-600'>
                    Contact Manager
                </Link>

                <div className="flex items-center space-x-4">
                    {session ? (
                        <>
                            <Link href="/contact" className='text-blue-500 hover:text-blue-800 mr-8'>
                                Contacts
                            </Link>
                            <LogoutButton />
                        </>
                    ) : (
                        <>
                            <Link href="/login" className='text-blue-500 hover:text-blue-700 mr-8'>
                                Login
                            </Link>
                            <Link href="/register" className='text-blue-500 hover:text-blue-700 mr-8'>
                                Register
                            </Link>

                        </>
                    )}
                </div>
            </div>

        </nav>
    )
}

export default Navbar
