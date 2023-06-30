"use client";
import EmailIcon from "@/components/atoms/email-icon";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { useRef } from "react";


const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e: Event) => {
    e.preventDefault();

    emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ? process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID : "" , process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ? process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID : " ", form.current ? form.current : "", process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ? process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY : "")
    .then(
              (result) => {
                console.log(result.text);
                console.log("message sent");
              },
              (error) => {
                console.log(error.text);
              }
            );
          e.target && e.target.reset();
  };

  return (
        <section className="py-20" id="contactSection">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                <div className="max-w-md">
                  <h2 className="mb-12 text-4xl font-semibold font-heading">
                    Skontaktuj się<br/> ze mną
                  </h2>
                  <div className="my-2">
                  <h3 className="mb-4 text-2xl font-semibold">E-mail</h3>
                  
                  <p className="text-gray-500">Jeżeli od formularz wolisz tradycyjny mail, napisz:</p>
                  <div className="my-6 flex items-center"><EmailIcon/>
                  <p className="text-gray-500"><a href="mailto: hello@wireframes.org">dariusz.stawik@gmail.com</a></p>
                  </div>
                  </div>
                  <div className="my-8">
                  <h3 className="mb-4 text-2xl font-semibold">Linkedin i Github</h3>
                  
                  <p className="text-gray-500">Sprawdź moje profile w serwisach:</p>
                  <div className="my-6 flex items-center">
                    <img src="Linkedin.svg" className="mr-4"></img> <img src="Github.svg" className="mr-4"></img>
                  </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="relative flex flex-wrap mb-6">
                    <input
                      className="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded"
                      type="text"
                      name="user_name"
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

                    />
                    <span className="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">
                     Adres e-mail
                    </span>
                  </div>
                  <div className="relative flex flex-wrap mb-6">
                    <textarea
                      className="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded resize-none"
                      id={1}
                      type="message"
                      name="message"
                      cols={30}
                      rows={10}

                      defaultValue={""}
                    />
                    <span className="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">
                      Wiadomość
                    </span>
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-block px-6 py-4 text-sm text-white bg-red-400 hover:bg-red-300 rounded transition duration-200"
                  >
                    Wyślij
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      );
};

export default ContactSection;