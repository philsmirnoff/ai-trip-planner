/* eslint-disable react/prop-types */
import { getPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const UserTripCardItem = ({trip}) => {
  const [photoUrl,setPhotoUrl]=useState();

  useEffect(()=>{
    trip && getPlacePhoto();
  },[trip])

  const getPlacePhoto = async () => {
    try {
      const data = {
        textQuery: trip?.userSelection?.location?.label,
      };
      const res = await getPlaceDetails(data);
      const photoUrl = PHOTO_REF_URL.replace(
        "{NAME}",
        res.data.places[0].photos[3].name
      );
      setPhotoUrl(photoUrl);
    } catch (error) {
      console.error('Failed to fetch place photo:', error);
      setPhotoUrl('/placeholder.jpg');
    }
  };

  return (
    <Link to={'/view-trip/'+trip?.id}>
    <div className='hover:scale-105 transition-all '>
        <img src={photoUrl}
        className="object-cover rounded-xl h-[220px]"/>
        <div>
            <h2 className='font-bold text-lg'>{trip?.userSelection?.location?.label}</h2>
            <h2 className='text-sm text-gray-500'>{trip?.userSelection.noOfDays} Days trip with {trip?.userSelection?.budget} Budget</h2>
        </div>
    </div>
    </Link>
  )
}

export default UserTripCardItem
