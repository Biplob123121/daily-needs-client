import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Navbar from '../Shared/Navbar'

function Signup() {
    const { register, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignUp = data => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        console.log('Profile Updated');
                        navigate('/')
                    })
                    .catch(error => {
                        console.log(error)
                    })
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <>
            <Navbar />
            <div className='h-screen flex justify-center items-center bg-base-200'>
                <div className='w-96 p-6 shadow-2xl'>
                    <h2 className='text-2xl text-center font-semibold'>Sign Up</h2>
                    <form onSubmit={handleSubmit(handleSignUp)}>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Name</span></label>
                            <input type="text" {...register("name")} className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Email</span></label>
                            <input type="email" {...register("email")} className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Password</span></label>
                            <input type="password" {...register("password")} className="input input-bordered w-full" />
                        </div>
                        <input className='btn w-full btn-accent mt-4' value="Submit" type="submit" />
                        {/* {signupErr && <p className='text-red-600'>{signupErr}</p>} */}
                    </form>
                    <p className='text-sm mt-2'>Already have an account? <Link to={'/signin'} className="text-blue-400">Please sigin in</Link></p>
                    <div className="divider">OR</div>
                    <button className='btn btn-outline w-full'>Continue With Google</button>
                </div>
            </div>
        </>
    )
}

export default Signup