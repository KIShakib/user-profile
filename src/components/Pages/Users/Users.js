import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../../features/usersSlice/usersSlice';
import Loader from '../Shared/Loader/Loader';
import Modal from '../Shared/Modal/Modal';
import User from '../User/User';

const Users = () => {
    const [likes, setLikes] = useState([]);
    const { users, error, isLoading } = useSelector(state => state.users);


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);


    const handleRemoveUser = user => {
        const index = users.indexOf(user);
    }

    return (
        <div>
            <div>
                {
                    isLoading && <div className='h-screen flex justify-center items-center'><Loader /></div>
                }
            </div>
            <div className='grid grid-cols-4 gap-6 p-3'>
                {
                    users?.map((user, index) =>
                        <User
                            index={index}
                            key={index}
                            user={user}
                            likes={likes}
                            setLikes={setLikes}
                            handleRemoveUser={handleRemoveUser}
                        />)
                }
            </div>
            <Modal />
        </div>
    );
};

export default Users;