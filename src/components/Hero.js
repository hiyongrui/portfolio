import React from 'react'
import HeroImg from '../assets/terminal.jpg'

const Hero = () => {
  return (
    <section className='bg-primary text-white py-32'>

      <div className='container mx-auto grid md:grid-cols-2 justify-center md:justify-between'>

        <div className='hero-info pb-5 md:pb-0'>
          <h1 className='text-4xl lg:text-6xl leading-loose'>
            Hi <br />
            I am yong rui <br />
            a student in <span className='text-accent'>SMU</span>
          </h1>

          <p className='py-5'>I am learning <span className='text-accent'>reactJS</span></p>
          <button onClick={() => window.open("https://github.com/hiyongrui/portfolio", "_blank", rel="noreferrer")}
          className='btn bg-accent border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent'>see projects</button>
        </div>

        <div className='hero-img'>
          <img src={HeroImg} alt="hero coding" className='lgw-[80%] ml-auto'/>
        </div>

      </div>

    </section>
  )
}

export default Hero