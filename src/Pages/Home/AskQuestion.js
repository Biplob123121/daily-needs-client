import React from 'react'
import { useForm } from 'react-hook-form';

function AskQuestion() {

    const { register, handleSubmit, reset } = useForm();
    const handleAskQuestion = data => {
        console.log(data)
        reset();
    }

    return (
        <section className='my-16 mx-3'>
            <div className='flex justify-center items-center'>
                <div className='p-6 shadow-2xl'>
                    <h2 className='text-xl md:text-2xl text-center font-semibold'>Stay Connected With Us:</h2>
                    <form onSubmit={handleSubmit(handleAskQuestion)}>
                        <div className="form-control mt-3">
                            <input type="text" {...register("name")} className="input input-bordered w-full" placeholder='Your Name' />
                        </div>
                        <div className="form-control mt-3">
                            <input type="text" {...register("email")} className="input input-bordered w-full" placeholder='Your Email' />
                        </div>
                        <div className="form-control mt-3">
                            <textarea type="text" {...register("opinion")} className="textarea textarea-bordered w-full" placeholder='Give Your Opinion' />
                        </div>
                        <input className='btn btn-accent mt-4 w-full' value="Submit" type="submit" />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default AskQuestion