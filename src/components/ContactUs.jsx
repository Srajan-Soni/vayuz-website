import React, { useState } from "react";

const ContactUs = () => {
  const [lists, setLists] = useState([
    { name: "Events", url: "#" },
    { name: "Gen AI", url: "#" },
    { name: "Careers", url: "#" },
    { name: "Case Study", url: "#" },
    { name: "SME Talks", url: "#" },
  ]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });

    const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    }
const validateForm = (data) => {
  const { fullName, email, phoneNumber } = data;
  if (!fullName || !email || !phoneNumber) {
    alert("All fields are required");
    return false;
  }

  return true;
};

const submitData = (e) => {
  
  e.preventDefault();
  if (validateForm(formData)) {
    console.log("Form submitted successfully", formData);
    alert("Form submitted successfully!");
    setFormData({ fullName: "", email: "", phoneNumber: "" });
  }
};


  return (
    <div className="my-5 p-8 flex justify-between" id="contactUs">
      <div className="flex flex-col w-1/2 pr-12 mb-5 space-y-4">
        <div className="flex justify-evenly items-center">
          {lists.map((item, index) => (
            <a
              key={index}
              href={item.url}
              className="text-gray-300 font-semibold hover:text-white transition"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex flex-col items-start justify-center font-sans my-8 p-10">
          <span className=" text-3xl my-4">
            For any collaborative projects or enquiries feel free to connect
            with us.
          </span>
          <span className="text-3xl my-2">vayuz.com </span>
        </div>
      </div>

      <div className="w-1/3 flex flex-col items-center justify-center pr-4">
        <h1 className="font-serif text-5xl my-4">Connect With Us</h1>
        <form className="flex flex-col mt-4 space-y-4 w-full max-w-md" onSubmit={submitData}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleInputChange}
            className="p-2   text-white border-b-1 border-gray-200 focus:outline-none focus:border-cyan-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="p-2   text-white border-b-1 border-gray-200 focus:outline-none focus:border-cyan-500"
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="p-2 text-white border-b-1 border-gray-200 focus:outline-none focus:border-cyan-500"
          />
            <div className="flex justify-end w-full">
          <button type="submit" className="bg-cyan-800 hover:bg-cyan-600 border border-cyan-600 cursor-pointer text-white mt-5 font-semibold px-6 py-3 rounded-full w-fit text-sm">
            SUBMIT
          </button>
        </div>
        </form>
      
      </div>
    </div>
  );
};

export default ContactUs;
