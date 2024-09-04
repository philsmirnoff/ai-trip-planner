/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { getPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApi";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HotelCardItem = ({ hotel }) => {
  const [photoUrl, setPhotoUrl] = useState();

  useEffect(() => {
    hotel && getPlacePhoto();
  }, [hotel]);

  const getPlacePhoto = async () => {
    try {
      const data = {
        textQuery: hotel?.hotelName,
      };
      const res = await getPlaceDetails(data);
      const photoUrl = PHOTO_REF_URL.replace(
        "{NAME}",
        res.data.places[0].photos[3].name
      );
      setPhotoUrl(photoUrl);
    } catch (error) {
      console.error('Failed to fetch hotel photo:', error);
      setPhotoUrl('/placeholder.jpg');
    }
  };

  return (
    <Link
      to={
        "https://www.google.com/maps/search/?api=1&query=" +
        hotel.hotelName +
        "," +
        hotel?.hotelAddress
      }
      target="_blank"
    >
      <div className="hover:scale-105 transition-all cursor-pointer">
        <img
          src={photoUrl ? photoUrl : "/placeholder.jpg"}
          className="rounded-xl h-[180px] w-full object-cover"
          alt={hotel?.hotelName || "Hotel Image"}
        />
        <div className="my-2 flex flex-col gap-2">
          <h2 className="font-medium ">{hotel?.hotelName}</h2>
          <h2 className="text-xs text-gray-500 ">📍 {hotel?.hotelAddress}</h2>
          <h2 className="text-sm">💰 {hotel?.price}</h2>
          <h2 className="text-sm">⭐ {hotel?.rating}</h2>
        </div>
      </div>
    </Link>
  );
};

export default HotelCardItem;
