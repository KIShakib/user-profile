import React from 'react';

const Modal = ({ setModalOpen, modalOpen, user, handleInput }) => {


    return (
        <div className="fixed w-full h-full top-0 left-0 flex items-center justify-center">
            <div onClick={() => setModalOpen(!modalOpen)} className="absolute w-full h-full opacity-60 bg-blend-overlay bg-black"></div>
            <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded z-50 overflow-y-auto">
                <div className="modal-content py-4 text-left">
                    <div className="flex justify-between items-center pb-3 px-6">
                        <p className="text-2xl font-bold">Edit Details</p>
                        <div className="modal-close cursor-pointer z-50">
                            <button className='w-8 h-8 border flex justify-center items-center rounded-full border-gray-400' onClick={() => setModalOpen(!modalOpen)}>
                                <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 18">
                                    <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <hr className='my-2' />
                    <div className='px-6 py-6'>
                        <form onSubmit={handleInput} className="flex flex-col gap-y-8">
                            <label className='flex justify-center items-center gap-x-2'>
                                <h5><span className='text-red-500'>*</span> Name:</h5>
                                <input className='border px-2' name='name' defaultValue={user.name} required type="text" />
                            </label>
                            <label className='flex justify-center items-center gap-x-2'>
                                <h5><span className='text-red-500'>*</span> Email:</h5>
                                <input className='border px-2' name='email' defaultValue={user.email} required type="email" />
                            </label>
                            <label className='flex justify-center items-center gap-x-2'>
                                <h5><span className='text-red-500'>*</span> Phone:</h5>
                                <input className='border px-2' name='phone' defaultValue={user.phone} required type="tel" />
                            </label>
                            <label className='flex justify-center items-center gap-x-2'>
                                <h5><span className='text-red-500'>*</span> Website:</h5>
                                <input className='border px-2' name='website' defaultValue={user.website} required type="text" />
                            </label>
                            <hr className='' />
                            <div className="flex justify-end gap-x-4 px-6">
                                <button onClick={() => setModalOpen(!modalOpen)} className="border px-4 font-semibold rounded">Cancel</button>
                                <button className="px-4 py-1 rounded bg-blue-500 text-white font-bold">OK</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Modal;