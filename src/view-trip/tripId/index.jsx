import { db } from "@/service/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const ViewTrip = () => {
  const { tripId } = useParams();
  // eslint-disable-next-line no-unused-vars
  const [trip, setTrip] = useState([]);

  useEffect(() => {
    tripId && getTripData();
  }, [tripId]);

  /**
   * Used to get Trip Information from Firebase
   */
  const getTripData = async () => {
    const docRef = doc(db, "AITrips", tripId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document:", docSnap.data());
      setTrip(docSnap.data());
    } else {
      console.log("No Such Document");
      toast("No Trip Found!");
    }
  };

  return (
    <div className="p-10 md:px-20 lg:px-44 xl:px-56">Information Section
    </div>
  );
};

export default ViewTrip;
