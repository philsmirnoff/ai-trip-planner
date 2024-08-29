/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { getPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApi"
import { Link } from 'react-router-dom';

const PlaceCardItem = ({place}) => {

  const [photoUrl, setPhotoUrl] = useState();

  useEffect(()=>{
    place && getPlacePhoto();
  },[place])

  const getPlacePhoto = async () => {
    try {
      const data = {
        textQuery: place.placeName
      };
      const res = await getPlaceDetails(data);
      const photoUrl = PHOTO_REF_URL.replace('{NAME}', res.data.places[0].photos[3].name);
      setPhotoUrl(photoUrl);
    } catch (error) {
      console.error('Failed to fetch place photo:', error);
      setPhotoUrl('/placeholder.jpg');
    }
  };


  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query='+place.placeName} target='_blank'>
        <div className='border rounded-xl p-3 mt-2 flex gap-5
        hover:scale-105 transition-all hover:shadow-md cursor-pointer'>
            <img src={photoUrl}
            alt={place.placeName}
            className='w-[130px] h-[130px] rounded-xl object-cover'
            />
            <div>
                <h2 className='font-bold text-lg'>{place.placeName}</h2>
                <p className='text-sm text-gray-400'>{place.placeDetails}</p>
                <h2 className='mt-2'>🕙 {place.timeToTravel}</h2>
                <h2 className='mt-2'>🎟️ {place.ticketPricing}</h2>
            </div>
        </div>
    </Link>
  )
}

export default PlaceCardItem
