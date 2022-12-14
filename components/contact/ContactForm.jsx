import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";

const ContactForm = () => {
  const [submit, setSubmit] = useState(0);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_65cvvuq",
        "template_bd4vyad",
        form.current,
        "Ws5qwtrmWHERMQYKH"
      )
      .then(
        (result) => {
          setSubmit(1);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      enctype="multipart/form-data"
      method="post"
    >
      <div className="flex space-x-7">
        <div className="mb-6 w-1/2 ">
          <label className="font-display text-jacarta-700 mb-1 block text-sm dark:text-white">
            Name<span className="text-red">*</span>
          </label>
          <input
            name="name"
            className="contact-form-input dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white"
            id="name"
            type="text"
            required
          />
        </div>

        <div className="mb-6 w-1/2">
          <label className="font-display text-jacarta-700 mb-1 block text-sm dark:text-white">
            Email<span className="text-red">*</span>
          </label>
          <input
            name="email"
            className="contact-form-input dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white"
            id="email"
            type="email"
            required
          />
        </div>
      </div>
      <div className="flex ">
        <div className="mb-6 w-full">
          <label className="font-display text-jacarta-700 mb-1 block text-sm dark:text-white">
            Subject<span className="text-red">*</span>
          </label>
          <input
            name="subject"
            className="contact-form-input dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white"
            id="subject"
            type="text"
            required
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="font-display text-jacarta-700 mb-1 block text-sm dark:text-white">
          Message<span className="text-red">*</span>
        </label>
        <textarea
          id="message"
          className="contact-form-input dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white"
          required
          name="message"
          rows="5"
        ></textarea>
      </div>

      <div className="flex ">
        <div className="mb-6 w-full">
          <label className="font-display text-jacarta-700 mb-1 block text-sm dark:text-white">
            Attach your work<span className="text-red">*</span>
          </label>
          <input
            name="attachment"
            className="contact-form-input dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="attachment"
            type="file"
            multiple
            required
          />
        </div>
      </div>
      <div className="mb-6 flex items-center space-x-2">
        <input
          type="checkbox"
          id="contact-form-consent-input"
          name="agree-to-terms"
          className="checked:bg-accent dark:bg-jacarta-600 text-accent border-jacarta-200 focus:ring-accent/20 dark:border-jacarta-500 h-5 w-5 self-start rounded focus:ring-offset-0 cursor-pointer"
        />
        <label className="dark:text-jacarta-200 text-sm">
          I agree to the{" "}
          <Link href="/tarms">
            <a className="text-accent">Terms of Service</a>
          </Link>
        </label>
      </div>

      {submit == 1 ? (
        <span className="bg-green   rounded-full py-3 px-8 text-center font-semibold text-white transition-all">
          Submitted
        </span>
      ) : (
        <button
          type="submit"
          className="bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
          id="contact-form-submit"
        >
          Submit
        </button>
      )}

      <div
        id="contact-form-notice"
        className="relative mt-4 hidden rounded-lg border border-transparent p-4"
      >
        Submitted
      </div>
    </form>
  );
};

export default ContactForm;
