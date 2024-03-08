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
import { FormEvent, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";
import styles from "./main-contact-form.module.scss";
import { DecorativeBubbles } from "@theartcode/components";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
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

export const MainContactForm = ({ lang }: any) => {
  const [agreed, setAgreed] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const fieldName = document.getElementById("name") as HTMLInputElement;
    const fieldSurname = document.getElementById("surname") as HTMLInputElement;
    const fieldCompany = document.getElementById("company") as HTMLInputElement;
    const fieldEmail = document.getElementById("email") as HTMLInputElement;
    const fieldPhone = document.getElementById("phone") as HTMLInputElement;
    const fieldFindUs = document.getElementById(
      "you_find_us",
    ) as HTMLInputElement;
    const findAcceptance = document.getElementById(
      "acceptance",
    ) as HTMLInputElement;
    const fieldSpeakAboutProject = document.getElementById(
      "speak_about_your_project",
    ) as HTMLTextAreaElement;

    const formData: ContactFormData = {
      name: fieldName.value,
      surname: fieldSurname.value,
      company: fieldCompany.value,
      email: fieldEmail.value,
      phone: fieldPhone.value,
      you_find_us: fieldFindUs.value,
      speak_about_your_project: fieldSpeakAboutProject.value,
    };

    try {
      const response = await fetch(
        "https://theartcode-be-app-x8t4f.ondigitalocean.app/api/main-contacts-form/send-email",
        {
          method: "POST",
          headers: {
            Authorization: process.env.CONTACTFORM || "",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Success:", data);
      setSent(true);
      setTimeout(() => {
        setSent(false);
      }, 10000);

      fieldName.value = "";
      fieldSurname.value = "";
      fieldCompany.value = "";
      fieldEmail.value = "";
      fieldPhone.value = "";
      fieldFindUs.value = "";
      findAcceptance.checked = false;
      fieldSpeakAboutProject.value = "";
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`${styles["form"]}`}>
      <DecorativeBubbles
        direction="right"
        position="top-right"
        animation="true"
      />
      <div className={`${styles["form__decoration-balls"]}`}></div>
      <h3>{lang.title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
        <div>
          <input
            type="text"
            placeholder={`${lang.name} *`}
            name="firstName"
            id="name"
            autoComplete="given-name"
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder={`${lang.surname} *`}
            name="lastName"
            id="surname"
            autoComplete="family-name"
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder={`${lang.company}`}
            name="company"
            id="company"
            autoComplete="organization"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
        <div>
          <input
            type="email"
            placeholder={`${lang.email}`}
            name="email"
            id="email"
            autoComplete="email"
            required
          />
        </div>
        <div>
          <input
            type="tel"
            placeholder={`${lang.phone}`}
            name="phone"
            id="phone"
            autoComplete="tel"
          />
        </div>
      </div>
      <div>
        <select name="you_find_us" id="you_find_us">
          <option value="">{lang.howFindUs.default}</option>
          <option value={lang.howFindUs.valueOne}>
            {lang.howFindUs.valueOne}
          </option>
          <option value={lang.howFindUs.valueTwo}>
            {lang.howFindUs.valueTwo}
          </option>
          <option value={lang.howFindUs.valueThree}>
            {lang.howFindUs.valueThree}
          </option>
          <option value={lang.howFindUs.valueFour}>
            {lang.howFindUs.valueFour}
          </option>
          <option value={lang.howFindUs.valueFive}>
            {lang.howFindUs.valueFive}
          </option>
        </select>
      </div>
      <div>
        <textarea
          name="speak_about_your_project"
          placeholder={lang.speakAboutProject}
          id="speak_about_your_project"
          rows={8}
          required
        ></textarea>
      </div>
      <div className={`${styles["custom-checkbox"]}`}>
        <input
          type="checkbox"
          name="acceptance"
          id="acceptance"
          onClick={() => setAgreed(!agreed)}
          required
        />
        <label htmlFor="acceptance">
          {lang.privacy.firstFrag}{" "}
          <a
            href="https://www.iubenda.com/privacy-policy/40428943/legal"
            target="_blank"
            title="Privacy Policy"
          >
            Privacy&nbsp;Policy
          </a>{" "}
          {lang.privacy.secondFrag}
        </label>
      </div>
      <div>
        <button
          type="submit"
          className={`${!agreed ? `pointer-events-none opacity-50` : ""} ${styles["form__submit"]}`}
        >
          Let&apos;s talk
        </button>
      </div>

      {sent ? (
        <div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-30 flex items-center w-full max-w-xs p-4 rtl:space-x-reverse text-white bg-[#D0FF7A] rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800 border border-[#8EDD00]"
          role="alert"
          style={{ marginBottom: "30px" }}
        >
          <div className="flex-grow flex items-center space-x-4 divide-x divide-white">
            <svg
              className="w-5 h-5 text-white dark:text-blue-500 rotate-45"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
              />
            </svg>
            <div className="ps-4 text-sm font-normal">
              {lang.successMessage}
            </div>
          </div>
          <button
            type="button"
            onClick={() => setSent(false)}
            className="ml-auto -mr-2 -mt-2 p-1.5 inline-flex items-center justify-center text-white hover:text-gray-200 relative"
            style={{ top: "5px" }}
            aria-label="Close"
          >
            <span className="inline-flex">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      ) : (
        ""
      )}
    </form>
  );
};

export default MainContactForm;
