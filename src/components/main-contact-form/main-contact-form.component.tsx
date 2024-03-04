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
import styles from './main-contact-form.module.scss'
import { DecorativeBubbles } from "@theartcode/components"

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
    <form onSubmit={handleSubmit} className={`${styles['form']}`}>
      <DecorativeBubbles direction="right" position="top-right" animation="true" />
      <div className={`${styles['form__decoration-balls']}`}></div>
      <h3>You&apos;re just one email away...</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
        <div>
          <input type="text" placeholder="Name *" name="firstName" id="name" autoComplete="given-name" required />
        </div>
        <div>
          <input type="text" placeholder="Surname *" name="lastName" id="surname" autoComplete="family-name" required />
        </div>
        <div>
          <input type="text" placeholder="Company" name="company" id="company" autoComplete="organization" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
        <div>
          <input type="email" placeholder="Email *" name="email" id="email" autoComplete="email" required />
        </div>
        <div>
          <input type="tel" placeholder="Phone" name="phone" id="phone" autoComplete="tel" />
        </div>
      </div>
      <div>
        <select name="you_find_us" id="you_find_us">
          <option value="">How you find us?</option>
          <option value="James">Valore 1</option>
          <option value="Word of mouth">Valore 2</option>
          <option value="Social">Valore 3</option>
        </select>
      </div>
      <div>
        <textarea name="speak_about_your_project" placeholder="Speak about your project" id="speak_about_your_project" rows={8} required></textarea>
      </div>
      <div className={`${styles['custom-checkbox']}`}>
        <input type="checkbox" name="acceptance" id="acceptance" required />
        <label htmlFor="acceptance">I accept the <a href="#" target="_blank" title="Privacy Policy">Privacy&nbsp;Policy</a> and agree to data processing</label>
      </div>
      <div>
        <button type="submit">Let&apos;s talk</button>
      </div>
    </form>
  )
}

export default MainContactForm;