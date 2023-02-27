import React from 'react'

function Reviews() {
    return (
        <section className='my-16 px-3'>
            <h1 className='text-2xl font-bold text-gray-700 mb-4'>Our Client's Feedback:</h1>
            <div className="hero bg-base-200 rounded-2xl">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="avatar flex flex-col justify-center items-center">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                        <p className='mt-2'>Name</p>
                    </div>
                    <div>
                        <p className="py-6 pl-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reviews