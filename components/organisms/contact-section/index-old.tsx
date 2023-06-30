"use client";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const sendEmail = (serviceId, templateId, publicKey, form) => {
  emailjs
    .sendForm(serviceId, templateId, form, publicKey)
    .then(
      (result) => {
        console.log(result.text);
        console.log('message sent');
      },
      (error) => {
        console.log(error.text);
      }
    );
  form.reset();
};

const ContactSection = ({ emailjsServiceID, emailjsTemplateID, emailjsPublicKey }) => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(emailjsServiceID, emailjsTemplateID, emailjsPublicKey, form.current);
  };

  return (
    <section className="py-20">
       <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                <div className="max-w-md">
                  <h2 className="mb-12 text-4xl font-semibold font-heading">
                    Skontaktuj się&nbsp; ze mną
                  </h2>
                  <h3 className="mb-4 text-2xl font-semibold">Address</h3>
                  <p className="text-gray-500">1686 Geraldine Lane New York,</p>
                  <p className="mb-10 text-gray-500">NY 10013</p>
                  <h3 className="mb-4 text-2xl font-semibold">Contact Us</h3>
                  <p className="text-gray-500">hello@wireframes.org</p>
                  <p className="text-gray-500">+ 7-843-672-431</p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4">
      <form ref={form} onSubmit={handleSubmit}>
      <div className="relative flex flex-wrap mb-6">
                    <input
                      className="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded"
                      type="text"
                      name="user_name"
                      // placeholder="Daniel"
                    />
                    <span className="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">
                      Name
                    </span>
                  </div>
                  <div className="relative flex flex-wrap mb-6">
                    <input
                      className="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded"
                      type="email"
                      name="user_email"
                      // placeholder="e.g hello@shuffle.dev"
                    />
                    <span className="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">
                      Your email address
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
                      // placeholder="Message..."
                      defaultValue={""}
                    />
                    <span className="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">
                      Your message
                    </span>
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-block px-6 py-4 text-sm text-white bg-red-400 hover:bg-red-300 rounded transition duration-200"
                  >
                    Send message
                  </button>
                </form>
              </div>
            </div>
          </div>
    </section>
  );
};

export async function getServerSideProps() {
  const { NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, NEXT_PUBLIC_EMAILJS_PUBLIC_KEY } = process.env;

  return {
    props: {
      emailjsServiceID: NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      emailjsTemplateID: NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      emailjsPublicKey: NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    },
  };
}

export default ContactSection;