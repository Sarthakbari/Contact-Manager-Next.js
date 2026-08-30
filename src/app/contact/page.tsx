import React from 'react'
import Form from 'next/form'
import { getSession } from '../_lib/session'
import { getContacts } from '../api/contact';
import ContactList from '../_components/ContactList';

async function page() {
  const user = await getSession();
  if (!user) {
    return (
      <div>
        Please {" "}
        <a href='/login' className='text-blue-600 hover:underline'>
          login
        </a> {" "}
        to view contacts
      </div>
    );
  }
  const contacts = await getContacts(user?.id);
  console.log("Contact list ", contacts)


  if (!contacts || contacts.length === 0) {
    return (
      <div>
        Please {" "}
        <a href='/contact/new' className='text-blue-600 hover:underline'>
          Add a contact
        </a>{" "}
        to your contacts list
      </div>
    );
  }

  return (
    <div>
        <h1 className='text-4xl  text-center mb-6 text-gray-500 font-bold'>Contacts Details</h1>
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-lg'>Your Contacts</h1>
        <a href="/contact/new"
          className='bg-blue-600 text-lg hover:bg-blue-700 text-white px-4 py-2 rounded-md'
        >Add Contacts</a>
      </div>
      <ContactList contacts = {contacts}/>
    </div>
  )
}

export default page


