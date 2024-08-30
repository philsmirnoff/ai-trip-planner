import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
      <h1 className='font-extrabold text-[60px] text-center'>
      <span className='text-[#f56551]'>Discover Your Next Adventure with AI:</span>
      <br />
        <span className='text-[#333]'>Personalized Itineraries at Your Fingertips</span></h1>
      <p className='text-xl text-gray-500 text-center w-full'>Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.</p>
      <Link to={'/create-trip'}>
        <Button> Get Started, It&apos;s Free </Button>
      </Link>
      <img src='/landing.png' className='w-full object-cover'/>
    </div>
  )
}

export default Hero
