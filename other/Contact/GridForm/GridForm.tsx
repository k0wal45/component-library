"use client";

import { Fragment, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify"; // you need to install react-toastify or replace it with your notifications
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const GridForm = () => {
  return (
    <section
      className={`relative bg-[#ededed] lg:bg-contain flex flex-col mx-auto gap-4 p-4 py-12 w-ful items-center justify-center shadow-inner w-full`}
    >
      <h6 className="text-3xl lg:text-6xl font-bold text-center">Contact me</h6>
      <p className="text-center">
        If you are interested in my services and want to get in touch, write to
        me here or just put your email so I can contact you
      </p>
      <div className="flex flex-col lg:flex-row my-8 w-full items-center justify-center">
        <Description />
        <Form />
      </div>
    </section>
  );
};

export default GridForm;

const Description = () => {
  return (
    <div className="m-4 flex-1  flex flex-col gap-4 items-center lg:items-end justify-center lg:max-w-[30rem]">
      <Image
        height={700}
        width={700}
        src="https://images.unsplash.com/photo-1624835567150-0c530a20d8cc?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="aspect-square object-cover rounded-xl"
      />
      <div className="flex flex-col gap-4 items-center justify-center w-full border-2 border-base rounded-xl p-4 bg-white">
        <a
          href=""
          className="flex gap-4  items-center justify-start w-full text-xl font-bold p-4 border-2 border-base rounded-xl"
        >
          <FaPhone />
          +1 113(151)-7611
        </a>
        <a
          href=""
          className="flex gap-4  items-center justify-start w-full text-xl font-bold p-4 border-2 border-base rounded-xl"
        >
          <FaEnvelope />
          contact@contact.com
        </a>
        <div className="flex gap-4  items-center justify-start w-full text-xl font-bold p-4 border-2 border-base rounded-xl">
          <FaLocationDot />
          New York, USA
        </div>
      </div>
    </div>
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
      toast.error("Error", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    if (!e.target.accpet.checked) {
      toast.error("Error", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    // Wyrażenia regularne do walidacji
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?\d{9,15}$/;

    // Sprawdzanie pola "name"
    if (name.trim() === "") {
      toast.error("Error", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    // Sprawdzanie pola "email"
    if (email.trim() === "") {
      toast.error("Error", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    } else if (!emailRegex.test(email)) {
      toast.error("Error", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    // Sprawdzanie pola "phone"
    if (phone.trim() === "") {
      toast.error("Error", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    } else if (!phoneRegex.test(phone)) {
      toast.error("Error", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    // Sprawdzanie pola "message"
    if (message.trim() === "") {
      toast.error("Error", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    toast.success("Sukces", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <Fragment>
      <form
        className="p-4 border-2 border-base rounded-xl w-[90vw] lg:w-[40rem] bg-white h-full"
        onSubmit={handleSubmit}
        ref={form}
      >
        <p className="text-lg font-bold text-purple-500">
          Have some questions?
        </p>
        <p className="text-4xl font-bold">Text here!</p>

        <label htmlFor="name" className="">
          Name and surname
        </label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={onMutate}
          value={name}
          className="w-full bg-white p-4 border-2 border-base rounded-xl focus:bg-white autofill:bg-white outlne-white ring-white"
          required
        />

        <label htmlFor="email" className="">
          E-mail
        </label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={onMutate}
          value={email}
          className="w-full bg-white p-4 border-2 border-base rounded-xl focus:bg-white autofill:bg-white outlne-white ring-white"
          required
        />

        <label htmlFor="phone" className="">
          Phone Number
        </label>
        <input
          type="number"
          name="phone"
          id="phone"
          onChange={onMutate}
          value={phone}
          className="w-full bg-white p-4 border-2 border-base rounded-xl focus:bg-white autofill:bg-white outlne-white ring-white"
          required
        />

        <input
          type="checkbox"
          name="validate"
          id="validate"
          className="scale-0 w-0 h-0"
        />

        <label htmlFor="message" className="">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          onChange={onMutate}
          value={message}
          className="w-full h-48 bg-white p-4 border-2 border-base rounded-xl focus:bg-white autofill:bg-white outlne-white ring-white"
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
            Accept terms of service
          </label>
        </div>

        <button
          type="submit"
          className="p-4 px-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-md text-white font-bold grid mt-4 place-items-center text-xl w-full transition-all duration-300
      hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] 
      active:translate-x-[0px] active:translate-y-[0px] active:shadow-none"
        >
          Submit
        </button>

        <ToastContainer />
      </form>
    </Fragment>
  );
};
