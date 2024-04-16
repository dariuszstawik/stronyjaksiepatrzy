"use client";
import React, { ReactNode } from "react";

interface TestimonialCardProps {
  name: string;
  title: string;
  children: ReactNode;
}

export default function TestimonialCard({
  name,
  title,
  children,
}: TestimonialCardProps) {
  return (
    <section className="py-4">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="py-10 lg:py-20 px-8 lg:px-24 mb-6 bg-gray-50 rounded-lg">
            <span className="inline-block mb-6 lg:mb-8">
              <svg
                width="48"
                height="36"
                viewBox="0 0 48 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26 23.45C26 13.3858 33.4577 2.86747 45.2297 0.164427C45.6793 0.0611986 46.1364 0.294669 46.3301 0.713275L47.5161 3.27572C47.7602 3.80299 47.5031 4.42383 46.9877 4.69196C43.3044 6.60799 40.1644 11.1966 39.3647 14.8059C39.2493 15.3268 39.6241 15.8042 40.1413 15.9351C44.6581 17.0784 48 21.1681 48 26.042C48 32.406 42.832 36 37.602 36C31.572 36 26 31.39 26 23.45ZM0 23.45C0 13.3858 7.45772 2.86747 19.2297 0.164427C19.6793 0.0611986 20.1364 0.294669 20.3301 0.713274L21.5161 3.27572C21.7602 3.80299 21.5031 4.42383 20.9877 4.69196C17.3044 6.60799 14.1644 11.1966 13.3647 14.8059C13.2493 15.3268 13.6241 15.8042 14.1413 15.9351C18.6581 17.0784 22 21.1681 22 26.042C22 32.406 16.832 36 11.602 36C5.572 36 0 31.39 0 23.45Z"
                  fill="#45C1FF"
                />
              </svg>
            </span>
            <p className=" leading-loose">{children}</p>
            <p className="text-sm text-gray-500 text-right max-w-sm ml-auto mt-4">
              {name}, {title}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
