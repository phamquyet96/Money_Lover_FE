import React, {useEffect, useState} from 'react';
import UserService from "../../../services/user.service";

const AvatarIcon = () => {
    const [user, setUser] = useState({});
    useEffect(() => {
        UserService.getProfile().then(res => {
            setUser(res.data.data)
        })
    }, [user])
    return (
        <div className='border-2 rounded-full border-black '>
            <img className='w-[25px] h-[25px] rounded-full' src={user.image}/>
        </div>
    );
};

export default AvatarIcon;
