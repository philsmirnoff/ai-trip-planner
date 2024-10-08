/* eslint-disable react/prop-types */
import { getPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApi";
import { useEffect, useState } from "react";

const InfoSection = ({ trip }) => {
  const [photoUrl, setPhotoUrl] = useState();

  useEffect(() => {
    trip && getPlacePhoto();
  }, [trip]);

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
    <div>
      <img
        src={photoUrl}
        className="h-[340px] w-full object-cover rounded-xl"
      />
     <div className="flex justify-between items-center">
        <div className=" my-5 flex flex-col gap-2">
          <h2 className="font-bold text-2xl">
            {trip?.userSelection?.location?.label}
          </h2>
          <div className=" hidden sm:flex gap-5">
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500">
              📅 {trip.userSelection?.noOfDays} Day
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500">
              💰 {trip.userSelection?.budget} Budget
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500">
              🥂 No. Of Traveler: {trip.userSelection?.traveler}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
