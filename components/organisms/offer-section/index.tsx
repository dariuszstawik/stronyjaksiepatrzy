import React from "react";

const OfferSection = () => {
  return (
    <section className="relative py-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-start -mx-4">
          <div className="relative w-full md:w-1/2 px-4 mb-12 md:mb-0">
            <img
              className="hidden lg:block absolute bottom-0 left-0 -mb-10 -ml-28"
              src="blue-dot-left-bars.svg"
              alt=""
            />
            <img
              className="h-96 lg:h-128 w-full rounded-xl object-cover"
              src="jaksiepatrzy-kwadrat1.jpg"
              alt=""
            />
          </div>
          <div className="relative w-full md:w-1/2 px-4 pb-20 lg:pb-0">
            <div className="lg:ml-auto max-w-md">
              <h2 className="mb-6 lg:mb-10 text-4xl font-semibold font-heading" />
              <h2
                className="mb-6 lg:mb-10 text-4xl font-semibold font-heading"
                // style={{borderColor: 'rgba(230, 234, 241, var(--tw-border-opacity))', -twBorderOpacity: 1, -twShadow: '0 0 #0000', -twRingInset: 'var(--tw-empty,/*!*/ /*!*/)', -twRingOffsetWidth: 0, -twRingOffsetColor: '#fff', -twRingColor: 'rgba(10, 173, 255, 0.5)', -twRingOffsetShadow: '0 0 #0000', -twRingShadow: '0 0 #0000', outline: 'none', userSelect: 'text'}}
              >
                Oferta
              </h2>
              <p className="mb-6 lg:mb-10 text-gray-500 text-lg">
                Chętnie wykonam dla Ciebie prostą stronę internetową lub
                aplikację, np.:
              </p>

              <div className="mb-10 border rounded-lg">
                <div className="flex p-4 border-b">
                  <svg
                    className="mr-4 mt-1"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
                      fill="#45C1FF"
                    />
                  </svg>
                  <h3 className="font-semibold font-heading">
                    stronę firmową,
                  </h3>
                </div>
                <div className="flex p-4 border-b">
                  <svg
                    className="mr-4 mt-1"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
                      fill="#45C1FF"
                    />
                  </svg>
                  <h3 className="font-semibold font-heading">
                    stronę projektu,
                  </h3>
                </div>

                <div className="flex p-4">
                  <svg
                    className="mr-4 mt-1"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
                      fill="#45C1FF"
                    />
                  </svg>
                  <h3 className="font-semibold font-heading">
                    landing page produktu.
                  </h3>
                </div>
              </div>
            </div>
            <p
              className="mb-6 lg:mb-10 text-gray-500 text-lg"
              contentEditable="false"
            >
              Moje projekty są w pełni responsywne oraz posiadają CMS.
            </p>
            <a
              className="inline-block px-10 py-4 bg-red-400 hover:bg-red-300 text-sm text-white font-medium leading-normal rounded transition duration-200"
              href="#"
            >
              Activate Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
