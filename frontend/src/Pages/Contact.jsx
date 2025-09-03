import React, { useState } from "react";
import axios from "axios"; // Import axios

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send POST request to backend
      const response = await axios.post("http://localhost:3000/contact", formData);
      console.log("Response:", response.data);
      alert("Thank you! Your message has been sent.");
      // Clear the form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your message. Please try again.");
    }
  };

  return (
    <section
      className="bg-gradient-to-r from-blue-100 to-blue-200 p-16 rounded-lg"
      id="contact"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="text-lg mb-10">
          Have questions or want to reach us? We'd love to hear from you!
        </p>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div>
            <h3 className="font-semibold text-xl mb-2">Address</h3>
            <p>Kundule, Baglung District, Gandaki Province, Nepal</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Phone</h3>
            <p>+977-68-520929</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Email</h3>
            <p>info@kunduleschool.edu.np</p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          className="bg-white p-8 rounded-lg shadow-md"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="border border-gray-300 p-3 rounded w-full"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="border border-gray-300 p-3 rounded w-full"
              required
            />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="border border-gray-300 p-3 rounded w-full mb-4"
            rows="5"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;