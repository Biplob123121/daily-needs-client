import React from 'react';
import taka from '../../Logo/taka_logo.png';
import user from '../../Logo/user_logo.png';
import delivery from '../../Logo/delivery_logo.png';

function SpecialCutomer() {
    return (
        <section className='my-16 px-3'>
            <h1 className='text-2xl font-bold text-gray-700 mb-4'>Become A Special Customer:</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                <div className='card text-white p-6 md:card-side shadow-xl bg-gradient-to-r from-primary to-secondary'>
                    <figure>
                        <img src={taka} alt="" width={50} height={50}/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Special Corporate Prices</h2>
                    </div>
                </div>
                <div className='card text-white p-6 md:card-side shadow-xl bg-accent'>
                    <figure>
                        <img src={user} alt="" width={50} height={50}/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">24 Hours Support</h2>
                    </div>
                </div>
                <div className='card text-white p-6 md:card-side shadow-xl bg-gradient-to-r from-primary to-secondary'>
                    <figure>
                        <img src={delivery} alt="" width={50} height={50}/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Flexiable Delivery</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SpecialCutomer