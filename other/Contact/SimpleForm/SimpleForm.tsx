"use client";
import React from "react";
import Image from "next/image";
import { Fragment, useRef, useState } from "react";

const SimpleForm = () => {
  return (
    <section className="w-full max-w-7xl grid grid-cols-1 place-items-center lg:grid-cols-2 mx-auto p-4">
      <Form />
      <Image
        width={900}
        height={900}
        alt=""
        src="https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?q=80&w=1979&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="w-full object-cover aspect-square z-[10] rounded-l-[3rem] lg:-translate-x-6"
      />
    </section>
  );
};

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const { name, email, phone, message } = formData;

  const form: any = useRef();

  const onMutate = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (e.target.validate.checked) {
      console.log("validate");
      console.log("Error");
      return;
    }

    if (!e.target.accpet.checked) {
      console.log("Error");
      return;
    }

    // Wyrażenia regularne do walidacji
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?\d{9,15}$/;

    // Sprawdzanie pola "name"
    if (name.trim() === "") {
      console.log("Error");
      return;
    }

    // Sprawdzanie pola "email"
    if (email.trim() === "") {
      console.log("Error");
      return;
    } else if (!emailRegex.test(email)) {
      console.log("Error");
      return;
    }

    // Sprawdzanie pola "phone"
    if (phone.trim() === "") {
      console.log("Error");
      return;
    } else if (!phoneRegex.test(phone)) {
      console.log("Error");
      return;
    }

    // Sprawdzanie pola "message"
    if (message.trim() === "") {
      console.log("Error");
      return;
    }

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <Fragment>
      <form
        className="w-full flex flex-col gap-4 flex-1 h-full bg-white rounded-r-[5rem] p-8 z-20"
        onSubmit={handleSubmit}
        ref={form}
      >
        <p className="text-xl font-medium">Contact</p>
        <h3 className="text-4xl font-semibold max-w-2xl">
          Contact us via the form!
        </h3>
        <div className="flex gap-2 w-full">
          <input
            placeholder="Name"
            type="text"
            name="name"
            id="name"
            onChange={onMutate}
            value={name}
            className="w-full bg-white p-4 border-2 border-base rounded-md focus:bg-white autofill:bg-white outlne-white ring-white flex-1"
            required
          />

          <input
            placeholder="Phone number"
            type="number"
            name="phone"
            id="phone"
            onChange={onMutate}
            value={phone}
            className="w-full bg-white p-4 border-2 border-base rounded-md focus:bg-white autofill:bg-white outlne-white ring-white flex-1"
            required
          />
        </div>

        <input
          placeholder="Email"
          type="email"
          name="email"
          id="email"
          onChange={onMutate}
          value={email}
          className="w-full bg-white p-4 border-2 border-base rounded-md focus:bg-white autofill:bg-white outlne-white ring-white flex-1"
          required
        />

        <textarea
          placeholder="Message"
          name="message"
          id="message"
          onChange={onMutate}
          value={message}
          className="w-full h-48 bg-white p-4 border-2 border-base rounded-md focus:bg-white autofill:bg-white outlne-white ring-white flex-1 min-h-48"
          required
        />

        <div className="flex gap-2 items-start w-full">
          <input
            type="checkbox"
            name="accpet"
            id="accpet"
            className="block"
            required
          />
          <label htmlFor="accept" className="text-xs text-neutral-700 w-full">
            Accept terms of use...
          </label>
        </div>

        <button
          type="submit"
          className="flex w-fit px-8 items-center gap-4 p-4 font-semibold text-xl text-white duration-300 transition-transform active:scale-90 relative overflow-hidden group z-20"
        >
          Submit
          <div className="absolute w-full h-1/2 top-0 left-0 bg-gradient-to-r from-neutral-800 to-neutral-900 translate-x-[-110%] group-hover:translate-x-[0%] transition-transform duration-700 z-[-1]" />
          <div className="absolute w-full h-1/2 bottom-0 right-0 bg-gradient-to-r from-neutral-800 to-neutral-900 translate-x-[110%] group-hover:translate-x-[0%] transition-transform duration-700 z-[-1]" />
          <div className="absolute inset-0 bg-orange-500 z-[-2]" />
        </button>

        <input
          type="checkbox"
          name="validate"
          id="validate"
          className="scale-0 w-0 h-0"
        />
      </form>
    </Fragment>
  );
};

export default SimpleForm;
