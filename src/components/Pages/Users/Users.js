import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../../features/usersSlice/usersSlice';
import Loader from '../Shared/Loader/Loader';
import Modal from '../Shared/Modal/Modal';
import User from '../User/User';

const Users = () => {
    const { users, error, isLoading } = useSelector(state => state.users);


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);


    return (
        <div>
            <div>
                {
                    isLoading && <div className='h-screen flex justify-center items-center'><Loader /></div>
                }
            </div>
            <div className='grid grid-cols-4 gap-6 p-3'>
                {
                    users?.map((user, i) => <User key={i} user={user} />)
                }
            </div>
            <Modal />
        </div>
    );
};

export default Users;