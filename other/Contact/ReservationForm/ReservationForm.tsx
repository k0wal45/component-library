"use client";
import { useState } from "react";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    people: "",
    date: "",
    time: "",
  });

  const { name, surname, phone, email, people, date, time } = formData;

  const maxDate = () => {
    const dtToday = new Date();
    let month: any = dtToday.getMonth() + 1;
    let today = dtToday.getDate();
    let day: any = today + 1;
    let year = dtToday.getFullYear();
    if (month < 10) month = "0" + month.toString();
    if (day < 10) day = "0" + day.toString();
    const maxDate = year + "-" + month + "-" + day;
    return maxDate;
  };
  const onMutate = (e: any) => {
    let boolean = null;

    if (e.target.value === "true") {
      boolean = true;
    }
    if (e.target.value === "false") {
      boolean = false;
    }

    // Text/Booleans/Numbers
    if (!e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: boolean ?? e.target.value,
      }));
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
    console.log(
      "Here you have all of data that has been inserted into the form as state `formData`, form now we can do everything we want with it"
    );
    setFormData({
      name: "",
      surname: "",
      phone: "",
      email: "",
      people: "",
      date: "",
      time: "",
    });
  };

  return (
    <section
      id="reservation"
      className="flex flex-col gap-4 w-full p-4 pt-12 pb-0 items-center  justify-start "
    >
      <p className="text-xl tracking-[1rem] uppercase text-white">contact us</p>
      <h6 className="text-5xl font-semibold first-letter:uppercase text-white">
        we always here to help you
      </h6>

      <div className="bg-neutral-100 p-12 flex flex-col-reverse lg:flex-row gap-8 mt-12 ">
        <div className="flex flex-col p-4 justify-between items-start gap-4">
          <div className="flex flex-col justify-center items-start gap-4">
            <h6 className="text-3xl font-semibold flex gap-4">
              <span>Melbourne,</span>
              <span className="text-gray-500">Australia</span>
            </h6>
            <p className="text-xl text-gray-600">
              269 King Str, 05th Floor, Utral House Building
              <br />
              Melbourne, VIC 3000, Autralia
            </p>
            <p className="text-xl text-gray-600 flex gap-2">
              <span className="text-black text-bold">Email:</span>
              <span>info@tastycourtyard.com</span>
            </p>
            <p className="text-xl text-gray-600 flex gap-2">
              <span className="text-black text-bold">Phone:</span>
              <span>32 352 12 35</span>
            </p>
          </div>

          <div className="w-32 border-2 border-black"></div>
        </div>

        <form
          action=""
          className="flex flex-col justify-center items-center gap-4"
          onSubmit={handleSubmit}
        >
          <div className="flex gap-4">
            <input
              onChange={onMutate}
              type="text"
              name="name"
              id="name"
              className="p-4 w-1/2"
              placeholder="Name"
              required
              value={name}
            />
            <input
              onChange={onMutate}
              type="text"
              name="surname"
              id="surname"
              className="p-4 w-1/2"
              placeholder="Surname"
              required
              value={surname}
            />
          </div>
          <input
            onChange={onMutate}
            type="text"
            name="phone"
            id="phone"
            className="p-4 w-full"
            placeholder="Phone Number"
            required
            value={phone}
          />
          <input
            onChange={onMutate}
            type="text"
            name="email"
            id="email"
            className="p-4 w-full"
            placeholder="E-mail (optional)"
            value={email}
          />
          <input
            onChange={onMutate}
            type="number"
            name="people"
            id="people"
            className="p-4 w-full"
            placeholder="How many people (max 12)"
            max={12}
            min={1}
            required
            value={people}
          />
          <input
            onChange={onMutate}
            type="date"
            name="date"
            id="date"
            className="p-4 w-full"
            required
            value={date}
            min={maxDate()}
          />
          <input
            onChange={onMutate}
            type="time"
            name="time"
            id="time"
            className="p-4 w-full"
            required
            value={time}
          />
          <button className="p-4 w-full bg-lime-500 text-xl uppercase">
            Reserve Your Table
          </button>
        </form>
      </div>
    </section>
  );
};

export default ReservationForm;
