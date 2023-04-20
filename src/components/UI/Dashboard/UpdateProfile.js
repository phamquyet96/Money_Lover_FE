import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import MenuLeft from "./MenuLeft";
import Navbar from "./Navbar"
import Swal from "sweetalert2";
import {myAxios} from "../../config/axios";

const UpdateProfile = () => {
  const cloudName='money-lover';
  const uploadPreset='ypxhljuq';
  const [open,setOpen]=useState(true);
  const dispatch=useDispatch();
  const user = useSelector((state) => state.auth.currentUser);

  const [data,setData]=useState({
    name:'',
    image:'',
    email:user.email
  })
  const handleSave=async ()=>{

    await myAxios.put(' /user/update-profile',data,{
      headers: {
        authorization: "Bearer "+ localStorage.getItem('accessToken')
      }
    })
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Update profile success!',
      showConfirmButton: false,
      timer: 1500
    })
  }

  function handleFile(event){
    const file=event.target.files[0];
    const formData=new FormData();
    formData.append('file',file);
    formData.append("upload_preset",uploadPreset);
    axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,formData)
        .then(res=>setData({...data,image:res.data.secure_url}))
        .catch(err=>console.log(err))
  }
  return (
      <>
        <div>
          <Navbar/>
        </div>
        <div className="flex">
          <MenuLeft/>
          {open ? (<div className='w-[100vw] h-[100vh] flex justify-center'>
            <div className='shadow-2xl bg-white rounded-md w-[800px] h-[64px] mt-10'>
              <div className='border-b rounded-t-md bg-white w-[800px] h-[64px] flex '>
                <div className="flex items-start w-[800px] justify-between p-4 border-b rounded-t">
                  <h3 className="text-xl ml-2 font-semibold text-gray-900 ">
                    Profile Update
                  </h3>
                  <button type="button" onClick={()=>setOpen(false)}
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
                  <div className='flex-col justify-center'>
                    <div className='flex justify-center h-32 w-full'>
                      <div className='rounded-full w-28 h-28 bg-gray-100'>
                        <img src={data.image} alt="" className="w-28 h-28 rounded-full"></img>
                      </div>
                    </div>
                    <div className='flex justify-center mx-auto'>
                      <input type="file" className='h-10 border' onChange={handleFile}/>
                    </div>
                  </div>
                  <div className='grid grid-rows-2 gap-6'>
                    <div className=''>
                      <label className='text-left font-roboto'>Name</label>
                      <input
                          className="border h-12 p-2 outline-none w-full text-xl rounded placeholder-gray-400 placeholder:italic"
                          placeholder='Enter new name' id="name" type="text" value={user.name} onChange={(event)=>setData({...data,name:event.target.value})}/>
                    </div>
                    <div className=''>
                      <label className='text-left font-roboto'>Email</label>
                      <input disabled className='border h-12 w-full rounded' id="email" type="email" value={user.email}/>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex shadow-2xl w-[800px] bg-white rounded-b-md gap-2'>
                <button onClick={()=>{handleSave()}}
                    className=' ml-5 my-4 h-10 w-20 bg-green-500 hover:bg-green-600 rounded-lg text-white font-roboto font-semibold'>
                  Save
                </button>
                <button onClick={()=>setOpen(false)}
                        className=' my-4 h-10 w-20 rounded-lg border hover:text-black text-gray-500 bg-white hover:bg-gray-100 font-roboto font-semibold'>
                  Decline
                </button>
              </div>
            </div>
          </div>): "" }
        </div>
      </>
  );
};

export default UpdateProfile;

