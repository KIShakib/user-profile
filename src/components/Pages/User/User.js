import React, { useState } from 'react';
import envelope from "../../../assets/envelope.png";
import phoneLogo from "../../../assets/phone-call.png";
import globe from "../../../assets/globe.png";
import heartStroke from "../../../assets/herat-stroke.png";
import heartFull from "../../../assets/heart-full.png";
import Modal from '../Shared/Modal/Modal';

const User = ({ user, handleRemoveUser, index }) => {
    const [like, setLike] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.phone);
    const [website, setWebsite] = useState(user.website);

    const handleInput = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const website = form.website.value;
        setName(name);
        setEmail(email);
        setPhone(phone);
        setWebsite(website);
        setModalOpen(!modalOpen);
    }
    return (
        <div className='rounded-sm border'>
            <div className='bg-[#F5F5F5] flex justify-center'>
                <img className='w-52' src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`} alt="" />
            </div>
            <div className='p-6 flex flex-col gap-y-1 tracking-wide'>
                <h2 className='font-bold tracking-widest text-lg'>{name}</h2>
                <div className='flex items-center gap-x-2 text-sm'>
                    <img className='w-4' src={envelope} alt="" />
                    <h4>{email}</h4>
                </div>
                <div className='flex items-center gap-x-2 text-sm'>
                    <img className='w-4' src={phoneLogo} alt="" />
                    <h4>{phone}</h4>
                </div>
                <div className='flex items-center gap-x-2 text-sm'>
                    <img className='w-4' src={globe} alt="" />
                    <h4>http://{website}</h4>
                </div>
            </div>
            <div className='bg-[#F5F5F5] flex justify-evenly py-3'>
                <div className='flex items-center'>
                    <button onClick={() => setLike(!like)}>
                        {
                            like ? <img className='w-4' src={heartFull} alt="" />
                                : <img className='w-4' src={heartStroke} alt="" />
                        }
                    </button>
                </div>
                <div className='opacity-25'>|</div>
                <div className='flex items-center'>
                    <button onClick={() => setModalOpen(!modalOpen)} className="">
                        <i className="fa-regular fa-pen-to-square text-gray-500 hover:text-blue-500"></i>
                    </button>
                </div>
                <div className='opacity-25'>|</div>
                <div className='flex items-center'>
                    <button onClick={() => handleRemoveUser(user.id)}>
                        <i className="fa-sharp fa-solid fa-trash text-gray-500 hover:text-blue-500"></i>
                    </button>
                </div>
            </div>
            {
                modalOpen && <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} user={user} handleInput={handleInput} />
            }
        </div>
    );
};

export default User;