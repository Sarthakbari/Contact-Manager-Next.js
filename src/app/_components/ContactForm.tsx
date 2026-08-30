"use client"
import React, { useActionState } from 'react'
import { ContactType } from '../_types/contact';
import { useRouter } from "next/navigation";
import { useEffect } from 'react';
import { useState } from 'react';

type ContactFormProps = {
  action: (prevState: any, formData: FormData) => Promise<any>;
  contact?: ContactType;
}

function ContactForm({ action, contact }: ContactFormProps) {
  const router = useRouter();
  const [state, formAction] = useActionState(action, null);

  useEffect(() => {
    if (state?.success){
      router.push("/contact");
    }
  }, [state, router])
  

  return (
    <form action={formAction} className='space-x-4'>
      <input type="hidden" name='id' value={contact?.id} />
      <div>
        <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Name</label>
        <input 
          type="text"
          name="name"
          defaultValue={contact?.name || " "}
          placeholder='Enter your name'
          required
          className='mt-1 block w-full rounded-md border-gray-300 shadow-md focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2'
        />
      </div>
      <div className='mt-4'>
        <label className='block text-sm font-medium text-gray-700'>Email</label>
        <input 
          type="email"
          name="email"
          defaultValue={contact?.email || " "}
          placeholder='Enter your Email'
          required
          className='mt-1 block w-full rounded-md border-gray-300 shadow-md focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2'
        />
      </div>
      {state?.error && (
        <div className='text-red-500 text-md mt-3'>{state.error}</div>
      )}
      <button 
         type='submit' 
         className='mt-5 w-full flex justify-center py-2 px-4 border border-transparent shadow-sm rounded-md  text-white font-medium text-sm bg-blue-600 hover:bg-blue-800 focus:outline'>
        Save Contact
      </button>
    </form>
  )
}

export default ContactForm
