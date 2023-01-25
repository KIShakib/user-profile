import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../../features/usersSlice/usersSlice';
import Loader from '../Shared/Loader/Loader';
import User from '../User/User';

const Users = () => {
    const { users, error, isLoading } = useSelector(state => state.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const [userArray, setUserArray] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => {
                setUserArray(data);
                setLoading(false);
            })
    }, [])



    const handleRemoveUser = id => {
        const remainingUser = userArray.filter(user => user.id !== id)
        setUserArray(remainingUser);
    }


    return (
        <div>
            <div>
                {
                    (loading || userArray.length === 0) &&
                    <div className='h-screen flex justify-center items-center'><Loader /></div>
                }
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 p-3'>
                {
                    userArray?.map((user, index) =>
                        <User
                            index={index}
                            key={index}
                            user={user}
                            handleRemoveUser={handleRemoveUser}
                        />)
                }
            </div>
        </div>
    );
};

export default Users;