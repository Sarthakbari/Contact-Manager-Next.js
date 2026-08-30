"use client"
import React from 'react'
import { loginAction } from '../actions/auth'

function LoginForm() {
    return (
        <form action={loginAction} className='space-x-4'>
            <div>
                <label className='block text-sm font-medium text-gray-700'>Email</label>
                <input type="email"
                    name="email"
                    placeholder='Enter your Email'
                    required
                    className='mt-1 block w-full rounded-md border-gray-300 shadow-md focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2'
                />
            </div>
            <div className='mt-4'>
                <label className='block text-sm font-medium text-gray-700'>Password</label>
                <input type="password"
                    name="password"
                    placeholder='Enter your Password'
                    required
                    className='mt-1 block w-full rounded-md border-gray-300 shadow-md focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2'
                />
            </div>
            <button type='submit' className='mt-5 w-full flex justify-center py-2 px-4 border border-transparent shadow-sm rounded-md  text-white font-medium text-sm bg-blue-600 hover:bg-blue-800 focus:outline'>
                Login
            </button>
        </form>
    )
}

export default LoginForm
