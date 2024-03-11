import { FormEvent, useState } from "react";
import styles from "./main-contact-form.module.scss";
import { DecorativeBubbles } from "@theartcode/components";

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
            placeholder={`${lang.email} *`}
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
        <select name="you_find_us" id="you_find_us" aria-label={lang.howFindUs.default}>
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
          {lang.submit}
        </button>
      </div>
      {sent ? (
        <div
          role="alert"
          className={`${styles["success-message"]}`}
        >
          <span>{lang.successMessage.title}</span> {lang.successMessage.description}
          <button
            type="button"
            onClick={() => setSent(false)}
            aria-label={lang.successMessage.close}
          >
            <svg viewBox="0 0 50 50">
              <use href="#close"></use>
            </svg>
          </button>
        </div>
      ) : (
        ""
      )}
    </form>
  );
};

export default MainContactForm;
