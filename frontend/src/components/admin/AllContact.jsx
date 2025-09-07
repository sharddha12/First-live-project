import React, { useEffect, useState } from "react";
import axios from "axios";

const AllContacts = () => {
  const [contacts, setContacts] = useState([]);

  // Fetch contacts from backend
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/contacts"); // your backend URL
        setContacts(response.data); // store data in state
      } catch (error) {
        console.log("Error fetching contacts:", error);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">All Contacts</h2>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Message</th>
            <th className="border px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact._id}>
              <td className="border px-4 py-2">{contact.name}</td>
              <td className="border px-4 py-2">{contact.email}</td>
              <td className="border px-4 py-2">{contact.message}</td>
              <td className="border px-4 py-2">
                {new Date(contact.date).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllContacts;
