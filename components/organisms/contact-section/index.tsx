"use client";
import EmailIcon from "@/components/atoms/email-icon";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { SyntheticEvent, useRef, useState, useEffect } from "react";

const ContactSection = () => {
  const form = useRef<HTMLFormElement>(null);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  const sendEmail = (e: SyntheticEvent) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
        ? process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
        : "",
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
        ? process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
        : " ",
      form.current ? form.current : "",
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        ? process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        : ""
    );

    setShowNotification(true);

    e.target && (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="py-32" id="contactSection">
      <div className="container px-4 mx-auto relative">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="max-w-md">
              <h2 className="mb-12 text-4xl font-semibold font-heading">
                Skontaktuj się
                <br /> ze mną
              </h2>
              <div className="my-2">
                <h3 className="mb-4 text-2xl font-semibold">E-mail</h3>

                <p className="text-gray-500">
                  Jeżeli od formularz wolisz tradycyjny mail, napisz:
                </p>
                <div className="my-6 flex items-center">
                  <EmailIcon />
                  <p className="text-gray-500">
                    <a href="mailto: dariusz@stronyjaksiepatrzy.pl">
                      dariusz@stronyjaksiepatrzy.pl
                    </a>
                  </p>
                </div>
              </div>
              <div className="my-8">
                <h3 className="mb-4 text-2xl font-semibold">
                  Linkedin i Github
                </h3>

                <p className="text-gray-500">
                  Sprawdź moje profile w serwisach:
                </p>
                <div className="my-6 flex items-center">
                  <a href="https://linkedin.com/in/dariusz-stawik">
                    <Image
                      src="/linkedin.svg"
                      className="mr-4"
                      alt="ikona Linkedin"
                      width={32}
                      height={32}
                    />
                  </a>
                  <a href="https://github.com/dariuszstawik">
                    <Image
                      src="/github.svg"
                      className="mr-4"
                      alt="ikona Github"
                      width={32}
                      height={32}
                    />
                  </a>
                </div>
              </div>
              <div></div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <form ref={form} onSubmit={sendEmail}>
              <div className="relative flex flex-wrap mb-6">
                <input
                  className="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded"
                  type="text"
                  name="user_name"
                  required
                />
                <span className="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">
                  Imię i nazwisko
                </span>
              </div>
              <div className="relative flex flex-wrap mb-6">
                <input
                  className="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded"
                  type="email"
                  name="user_email"
                  required
                />
                <span className="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">
                  Adres e-mail
                </span>
              </div>
              <div className="relative flex flex-wrap mb-6">
                <textarea
                  className="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded resize-none"
                  id="1"
                  name="message"
                  cols={30}
                  rows={10}
                  defaultValue={""}
                  required
                />
                <span className="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">
                  Wiadomość
                </span>
              </div>
              <button
                type="submit"
                className="w-full inline-block px-6 py-4 text-sm text-white bg-red-400 hover:bg-blue-400 rounded transition duration-200"
              >
                Wyślij
              </button>
            </form>
            {showNotification && (
              <div className="text-green-500 py-2 px-4 absolute top-100 right-0 mt-2 mr-2 rounded">
                Wiadomość wysłana. Dziękujemy!
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
