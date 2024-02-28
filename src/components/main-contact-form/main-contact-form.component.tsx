/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { FormEvent, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

interface ContactFormData {
  name: string;
  surname: string;
  company?: string; // Optional
  email: string;
  phone?: string; // Optional
  you_find_us?: string; // Optional
  speak_about_your_project: string;
}

export const MainContactForm = () => {
  const [agreed, setAgreed] = useState(false)
  
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Previene il comportamento di default del form

    // Raccogli i dati dal form
    // const formData: ContactFormData = {
    //   "name": `James ${new Date().toISOString()}`,
    //   "surname": "Rossi",
    //   "company": "Esempio Srl",
    //   "email": "mario.rossi@example.com",
    //   "phone": "1234567890",
    //   "you_find_us": "Internet",
    //   "speak_about_your_project": "Descrizione del progetto..."
    // }
    const formData: ContactFormData = {
    name: (document.getElementById('name') as HTMLInputElement).value,
    surname: (document.getElementById('surname') as HTMLInputElement).value,
    company: (document.getElementById('company') as HTMLInputElement).value,
    email: (document.getElementById('email') as HTMLInputElement).value,
    phone: (document.getElementById('phone') as HTMLInputElement).value,
    you_find_us: (document.getElementById('you_find_us') as HTMLInputElement).value,
    speak_about_your_project: (document.getElementById('speak_about_your_project') as HTMLTextAreaElement).value,
  };

    try {
      const response = await fetch('https://theartcode-be-app-x8t4f.ondigitalocean.app/api/main-contacts-form/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Success:', data);
      // Gestisci qui il successo, ad esempio mostrando un messaggio all'utente
    } catch (error) {
      console.error('Error:', error);
      // Gestisci qui l'errore, ad esempio mostrando un messaggio all'utente
    }
  };

  return (
   <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
  <div className="mx-auto max-w-2xl text-center">
    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contattaci</h2>
    <p className="mt-2 text-lg leading-8 text-gray-600">
      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </div>
  <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      
      <div>
        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
          First name
        </label>
        <div className="mt-2.5">
          <input
            type="text"
            name="firstName"
            id="name"
            autoComplete="given-name"
            className="block w-full rounded-md border-gray-300 px-3.5 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
          Last name
        </label>
        <div className="mt-2.5">
          <input
            type="text"
            name="lastName"
            id="surname"
            autoComplete="family-name"
            className="block w-full rounded-md border-gray-300 px-3.5 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
      </div>
      
      <div className="sm:col-span-2">
        <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
          Company
        </label>
        <div className="mt-2.5">
          <input
            type="text"
            name="company"
            id="company"
            autoComplete="organization"
            className="block w-full rounded-md border-gray-300 px-3.5 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
      </div>
      
      <div className="sm:col-span-2">
        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
          Email
        </label>
        <div className="mt-2.5">
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            className="block w-full rounded-md border-gray-300 px-3.5 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
      </div>
      
      <div className="sm:col-span-2">
        <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
          Phone
        </label>
        <div className="mt-2.5">
          <input
            type="tel"
            name="phone"
            id="phone"
            autoComplete="tel"
            className="block w-full rounded-md border-gray-300 px-3.5 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
      </div>
      
      <div className="sm:col-span-2">
        <label htmlFor="speak-about-your-project" className="block text-sm font-semibold leading-6 text-gray-900">
          Speak about your project
        </label>
        <div className="mt-2.5">
          <textarea
            name="speak_about_your_project"
            id="speak_about_your_project"
            rows={4}
            className="block w-full rounded-md border-gray-300 px-3.5 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          ></textarea>
        </div>
      </div>
      
      <div className="sm:col-span-2">
        <label htmlFor="you-find-us" className="block text-sm font-semibold leading-6 text-gray-900">
          How did you find us?
        </label>
        <div className="mt-2.5">
          <select
            name="you_find_us"
            id="you_find_us"
            className="block w-full rounded-md border-gray-300 px-3.5 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="James">James</option>
            <option value="Word of mouth">Word of mouth</option>
            <option value="Social">Social</option>
          </select>
        </div>
      </div>
    </div>
    <div className="mt-10">
      <button
        type="submit"
        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Let&apos;s talk
      </button>
    </div>
  </form>
</div>

  )
}

export default MainContactForm;