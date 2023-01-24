import React, { useState } from 'react';
import envelope from "../../../assets/envelope.png";
import phone from "../../../assets/phone-call.png";
import globe from "../../../assets/globe.png";
import heartStroke from "../../../assets/herat-stroke.png";
import heartFull from "../../../assets/heart-full.png";
import edit from "../../../assets/write.png";
import remove from "../../../assets/bin.png";

const User = ({ user }) => {
    const [nam, setNam] = useState(user.name);
    const handleInput = e => {
        e.preventDefault()
        const value = e.target.name.value;
        setNam(value)
    }
    return (
        <div className='rounded-sm border'>
            <div className='bg-[#F5F5F5] flex justify-center'>
                <img className='w-52' src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`} alt="" />
            </div>
            <div className='p-6 flex flex-col gap-y-1 tracking-wide'>
                <h2 className='font-bold tracking-widest text-lg'>{nam}</h2>
                <div className='flex items-center gap-x-2 text-sm'>
                    <img className='w-4' src={envelope} alt="" />
                    <h4>{user.email}</h4>
                </div>
                <div className='flex items-center gap-x-2 text-sm'>
                    <img className='w-4' src={phone} alt="" />
                    <h4>{user.phone}</h4>
                </div>
                <div className='flex items-center gap-x-2 text-sm'>
                    <img className='w-4' src={globe} alt="" />
                    <h4>http://{user.website}</h4>
                </div>
            </div>
            <div className='bg-[#F5F5F5] flex justify-evenly py-3'>
                <div className='flex items-center'>
                    <button>
                        <img className='w-4' src={heartStroke} alt="" />
                    </button>
                </div>
                <div className='opacity-25'>|</div>
                <div className='flex items-center'>
                    <button class="modal-open bg-transparent border border-gray-500 hover:border-indigo-500 text-gray-500 hover:text-indigo-500 font-bold py-2 px-4 rounded-full">
                        <img className='w-4' src={edit} alt="" />
                    </button>
                </div>
                <div className='opacity-25'>|</div>
                <div className='flex items-center'>
                    <button>
                        <img className='w-4' src={remove} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default User;