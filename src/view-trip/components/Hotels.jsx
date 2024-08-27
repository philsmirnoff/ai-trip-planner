/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const Hotels = ({trip}) => {
  return (
    <div>
        <h2 className='font-bold text-xl mt-5'>Hotel Recommendation</h2>

        <div className='grid grid-cols-2 my-5 md:grid-cols-3 xl:grid-cols-4 gap-5'>
            {trip?.tripData?.hotels?.map((hotel,index)=>(
               <Link key={index} to={'https://www.google.com/maps/search/?api=1&query=' + hotel.hotelName + "," + hotel?.hotelAddress} target='_blank' >
                <div className="hover:scale-105 transition-all cursor-pointer">
                    <img src="/placeholder.jpg" className="h-[340px] w-full object-cover rounded-xl" />
                  <div className='my-2 flex flex-col gap-2'>
                    <h2 className='font-medium '>{hotel?.hotelName}</h2>
                    <h2 className='text-xs text-gray-500 '>📍 {hotel?.hotelAddress}</h2>
                    <h2 className='text-sm'>💰 {hotel?.price}</h2>
                    <h2 className='text-sm'>⭐ {hotel?.rating}</h2>
                  </div>
              </div>
              </Link>
            ))}
        </div>

    </div>
  )
}

export default Hotels
