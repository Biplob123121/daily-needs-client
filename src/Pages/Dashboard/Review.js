import React from 'react'
import { useForm } from 'react-hook-form';

function Review() {

  const { register, handleSubmit, reset } = useForm();

  const handleReview = data => {
    console.log(data);
  }

  return (
    <div className='flex justify-center items-center'>
      <div className='w-96 p-6 shadow-2xl'>
        <h2 className='text-2xl text-center font-semibold'>Give A Review</h2>
        <form onSubmit={handleSubmit(handleReview)}>
          <div className="form-control w-full">
            <label className="label"><span className="label-text">Name</span></label>
            <input type="text" {...register("name")} className="input input-bordered w-full" />
          </div>
          <div className="form-control w-full">
            <label className="label"><span className="label-text">Email</span></label>
            <input type="text" {...register("email")} className="input input-bordered w-full" />
          </div>
          <div className="form-control w-full">
            <label className="label"><span className="label-text">Your Review</span></label>
            <textarea type="text" {...register("review")} className="textarea textarea-bordered w-full" />
          </div>
          <input className='btn w-full btn-accent mt-4' value="Submit Review" type="submit" />
        </form>
      </div>
    </div>
  )
}

export default Review