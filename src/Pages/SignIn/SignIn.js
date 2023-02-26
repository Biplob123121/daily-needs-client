import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Navbar from '../Shared/Navbar';

function SignIn() {

    const { register, handleSubmit } = useForm();
    const { login } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleSignIn = data => {
        console.log(data);
        login(data.email, data.password)
            .then(result => {
                console.log(result.user)
                navigate('/')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <>
            <Navbar />
            <div className='h-screen flex justify-center items-center'>
                <div className='w-96 p-6 shadow-2xl'>
                    <h2 className='text-2xl text-center font-semibold'>Sign In</h2>
                    <form onSubmit={handleSubmit(handleSignIn)}>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Email</span></label>
                            <input type="email" {...register("email")} className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Password</span></label>
                            <input type="password" {...register("password")} className="input input-bordered w-full" />
                            <label className="label"><span className="label-text">Forget Password?</span></label>
                        </div>
                        <input className='btn w-full btn-accent mt-4' value="Submit" type="submit" />
                    </form>
                    <p className='text-sm mt-2'>Don't have an account? <Link to={'/signup'} className="text-blue-400">Create an account</Link></p>
                    <div className="divider">OR</div>
                    <button className='btn btn-outline w-full'>Continue With Google</button>
                </div>
            </div>
        </>
    )
}

export default SignIn