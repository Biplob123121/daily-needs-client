import React from 'react'

function Banner() {
    return (
        <section className=''>
            <div className="hero h-5/6 px-[-12px]" style={{ backgroundImage: `url("/images/banner.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="w-full h-1/2">
                        <h2 className="mb-10 text-2xl font-bold mt-6 md:mt-24">We delivery your order within 30 minutes. Please stay with us.</h2>
                        <div className="input-group text-gray-700 mb-8">
                            <input type="text" placeholder="Search Product (eg. rice, oil)" className="input input-bordered w-full" />
                            <button className="btn btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner