import React, { useState } from "react";
import MenuLeft from "../Dashboard/MenuLeft";
import NavBar from "../Dashboard/Navbar";
function EditProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSaveClick = () => {
    // Save the name and email data
  };

  return (
    <>
      <NavBar />
      <br/>
      <div className="flex">
        <MenuLeft />
        
        <div className="max-w-md mx-auto">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold">Edit Profile</h1>
          </div>
          <div>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
              id="name"
              type="text"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="mt-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
              id="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="mt-6">
            <span
              href="#"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={handleSaveClick}
            >
              Save
            </span>
          </div>
        </div>
    </div>
    </>
  );
}

export default EditProfile;
