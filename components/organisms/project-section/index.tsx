import React from "react";

const ProjectSection = () => {
  return (
    <section className="relative py-20 overflow-x-hidden">
      <div className="container px-4 mx-auto">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-wrap sm:max-w-md">
            <h2 className="mb-10 text-4xl font-semibold font-heading">
              Lorem Ipsum dolor sit amet
            </h2>
            <p className="mb-10 text-lg text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan
              aliquet orci.
            </p>
            <div className="flex items-center mb-8 pb-8 border-b">
              <span className="mr-6 flex items-center justify-center w-12 h-12 bg-blue-400 rounded-full">
                <svg
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
                    fill="white"
                  />
                </svg>
              </span>
              <div className="max-w-sm">
                <p className="text-xl">Lorem Ipsum dolor</p>
              </div>
            </div>
            <div className="flex items-center mb-8 pb-8 border-b">
              <span className="mr-6 flex items-center justify-center w-12 h-12 bg-blue-400 rounded-full">
                <svg
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
                    fill="white"
                  />
                </svg>
              </span>
              <div className="max-w-sm">
                <p className="text-xl">Phasellus sit amet blandit ligula</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="mr-6 flex items-center justify-center w-12 h-12 bg-blue-400 rounded-full">
                <svg
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
                    fill="white"
                  />
                </svg>
              </span>
              <div className="max-w-sm">
                <p className="text-xl">Donec sodales nibh</p>
              </div>
            </div>
          </div>
        </div>
        <img className="mt-24 w-full lg:hidden" src="laptop.svg" alt="" />
      </div>
      <div className="hidden lg:block lg:absolute lg:top-0 lg:mt-32 lg:-mr-40 lg:right-0 lg:w-1/2 h-112">
        <img className="h-full w-full" src="laptop.svg" alt="" />
      </div>
    </section>
  );
};

export default ProjectSection;
