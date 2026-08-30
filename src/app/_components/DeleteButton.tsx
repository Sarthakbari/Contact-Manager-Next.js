"use client"
import React, { useActionState } from 'react'
import { ContactType } from '../_types/contact'
import { FiTrash, FiTrash2 } from 'react-icons/fi';

type DeleteButtonProps = {
    action : (prevState: any, formData: FormData) => Promise <any>;
    contact? : ContactType;
}

function DeleteButton({action, contact} : DeleteButtonProps) {
    const [state, formAction] = useActionState(action, null);
    return (
        <form action={formAction} method='post'>
        <input type='hidden' name='id' value= {contact?.id} />
        <button 
        type='submit' 
        className='flex items-center text-red-500  gap-2 px-3 py-1 border rounded-lg border-red-400 hover:text-red-600 hover:bg-red-100 hover:border-red-400 cursor-pointer'
        onClick={(e) =>{
            if(!confirm("Are you sure you want to delete this contact ?")){
                e.preventDefault();
            }
        }} 
        >   
            <FiTrash2 className='text-red-500 text-lg'/>Delete
        </button>
    </form>
  )
}

export default DeleteButton
