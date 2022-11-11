import React from 'react'
import { Link } from 'react-router-dom';

const Home = ()=> {
  return (
    <section className='home'>
        <div className='dark-overlay'>
            <div className='home-inner'>
                <h1 className='xl'> Professional Development </h1>
                <p className='cta' > Learn more, earn more!! </p>
                <div className='buttons' >
                    <Link to='/register' className='btn btn-primary '><center>Register</center></Link>
                    <Link to='/login' className='btn btn-light'><center>Login</center></Link>
                </div>
            </div>
        </div>
    </section>
  )
} 

export default Home;