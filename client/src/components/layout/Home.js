import React from 'react'

const Home = ()=> {
  return (
    <section className='home'>
        <div className='dark-overlay'>
            <div className='home-inner'>
                <h1 className='xl'> Professional Development </h1>
                <p className='cta' >
                Leearn more, earn more!!    
                </p>
                <div className='buttons' >
                    <a href='register.html' className='btn btn-primary'>Register</a>
                    <a href='login.html' className='btn btn-light'>Login</a>
                </div>
            </div>
        </div>
    </section>
    
  )
}

export default Home