import { MainContactForm } from "@theartcode/components";

export const ContactsSection = ({ lang }: any) => {
  return (
    <section
      className={`pt-[4rem] pb-[0rem] sm:pb-[10rem]`}
      id="contacts"
    >
      <div className="container mx-auto text-center pb-16">
        <h2 className="pb-4">
          <span className={`decoration-title`}>{lang.title}</span>
        </h2>
        <p>{lang.subtitle}</p>
      </div>
      <MainContactForm lang={lang.form} />
    </section>
  );
};

export default ContactsSection;
