import { db } from "@/service/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserTripCardItem from "./components/UserTripCardItem";

const MyTrips = () => {
  const navigate = useNavigate();
  const [userTrips, setUserTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserTrips = async () => {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) {
        navigate("/");
        return;
      }

      try {
        const q = query(
          collection(db, "AITrips"),
          where("userEmail", "==", user.email)
        );
        const querySnapshot = await getDocs(q);
        const trips = querySnapshot.docs.map((doc) => doc.data());
        setUserTrips(trips);
      } catch (error) {
        console.error("Failed to fetch user trips:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserTrips();
  }, [navigate]);

return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
      <h2 className="font-bold text-3xl">My Trips</h2>
       <div className="grid grid-cols-2 mt-10 md:grid-cols-3 gap-5">
            {loading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-[220px] w-full bg-slate-200 animate-pulse rounded-xl"
            ></div>
          ))
        ) : userTrips.length > 0 ? (
          userTrips.map((trip, index) => (
            <UserTripCardItem trip={trip} key={index} />
          ))
        ) : (
          <p>No trips found</p>
        )}
      </div>
    </div>
  );
};

export default MyTrips;
