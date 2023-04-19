// import React, { useState } from "react";
// import MenuLeft from "./MenuLeft";
// import NavBar from "./Navbar";
// function UpdateProfile() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//
//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };
//
//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };
//
//   const handleSaveClick = () => {
//     // Save the name and email data
//   };
//
//   return (
//     <>
//       <NavBar />
//       <br/>
//       <div className="flex">
//         <MenuLeft />
//
//         <div className="max-w-md mx-auto">
//           <div className="text-center mb-6">
//             <h1 className="text-2xl font-bold">Edit Profile</h1>
//           </div>
//           <div>
//             <label
//               className="block text-gray-700 font-bold mb-2"
//               htmlFor="name"
//             >
//               Name
//             </label>
//             <input
//               className="w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
//               id="name"
//               type="text"
//               value={name}
//               onChange={handleNameChange}
//             />
//           </div>
//           <div className="mt-4">
//             <label
//               className="block text-gray-700 font-bold mb-2"
//               htmlFor="email"
//             >
//               Email
//             </label>
//             <input
//               className="w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
//               id="email"
//               type="email"
//               value={email}
//               onChange={handleEmailChange}
//             />
//           </div>
//           <div className="mt-6">
//             <span
//               href="#"
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
//               onClick={handleSaveClick}
//             >
//               Save
//             </span>
//           </div>
//         </div>
//     </div>
//     </>
//   );
// }
//
// export default UpdateProfile;


import React from 'react';

const UpdateProfile = () => {
    return (
        <>
            <div className='w-[100vw] h-[100vh] flex justify-center'>
                <div className='shadow-2xl bg-white rounded-md w-[800px] h-[64px] mt-10'>
                    <div className='border-b rounded-t-md bg-white w-[800px] h-[64px] flex '>
                        <div className="flex items-start w-[800px] justify-between p-4 border-b rounded-t">
                            <h3 className="text-xl ml-2 font-semibold text-gray-900 ">
                                Profile Update
                            </h3>
                            <button type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-hide="changePasswordModal">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd"
                                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                          clipRule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className='h-auto shadow-2xl bg-white justify-center border-b-2'>
                        <div className='grid grid-cols-2 gap-4 pt-8 flex justify-between p-8'>
                            <div>dsada</div>
                            <div className='grid grid-rows-2 gap-6'>
                                <div className=''>
                                    <label className='text-left font-roboto'>Name</label>
                                    <input className="border h-12 p-2 outline-none w-full text-xl rounded"/>
                                </div>
                                <div className=''>
                                    <label className='text-left font-roboto'>Email</label>
                                    <input disabled className='border h-12 w-full rounded'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex shadow-2xl w-[800px]
                        justify-center bg-white rounded-b-md '>
                        <button className=' my-4  w-20 bg-green-400 text-white font-roboto font-semibold'>
                            SAVE
                        </button>
                        <button className=''>
                            DECLINE
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdateProfile;
