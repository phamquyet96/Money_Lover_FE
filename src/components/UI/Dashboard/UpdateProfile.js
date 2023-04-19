import React, { useState } from "react";
import MenuLeft from "./MenuLeft";
import NavBar from "./Navbar";
import { InputText } from 'primereact/inputtext';
import flag from "../../img/Flag.svg"
import {Button} from "primereact/button";
import { Dialog } from 'primereact/dialog';
import Avatar from "react-avatar-edit";
import {useSelector} from "react-redux";
function UpdateProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState([]);
  const [image, setImage] = useState("");
  const [view, setView] = useState(false);
  const [imageCrop, setImageCrop] = useState(false);
  const [src, setSrc] = useState(false);

  const user = useSelector((state) => state.auth.currentUser);

  const profileFinal=profile.map((item)=>item.view)

  const onClose=()=>{
    setView(null)
  }
  const onCrop=(view)=>{
    setView(view)
  }
  const saveImage=()=>{
    setProfile([...profile,{view}]);
    setImageCrop(false)
  }
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
        <div className="mx-auto justify-content-center align-items-center">
          <img style={{width:"200px",height:"200px",borderRadius:"50%",objectFit:"cover",border:"4px solid green"}}
               onClick={()=>{setImageCrop(true)}} src={profileFinal.length ? profileFinal : flag} alt=""/>
          <Dialog visible={imageCrop}
                  onHide={()=>{setImageCrop(false)}}>
          <div className=" align-items-center">
            <Avatar width={500} height={400} onCrop={onCrop} onClose={onClose} src={src} backgroundColor={"#474649"} shadingColor={"#474649"}/>
            <Button onClick={saveImage} label="Save" style={{display:"flex",width:"6rem",height:"3rem",backgroundColor:"gray",justifyContent:"center",borderRadius:"2px solid red"}}/>
          </div>
          </Dialog>
          <InputText type="file" style={{display:"none"}} onChange={(event)=>{
            const file=event.target.files[0];
            if(file && file.type.substring(0,5)==="image"){
                setImage(file)
            }else{
              setImage(null)
            }
          }}/>
        </div>
        <div className="max-w-md mx-auto">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold">Update Profile</h1>
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
              value={user.email}
              disabled="true"
              // onChange={handleEmailChange}
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

export default UpdateProfile;
