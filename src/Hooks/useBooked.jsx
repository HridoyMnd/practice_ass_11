import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useBooked = () => {
  // get booked data
  const { data: BookedRoom = [], refetch } = useQuery({
    queryKey: ["room"],
    queryFn: async () => {
      const res = await useAxios.get("/myBookedroomp");
      return res.data;
    },
  });

  //   add a new data
  const addnewBooking = async (newRoom) => {
    const roomId = newRoom?.id;
    const data = await useAxios.post(`/addBooked/${roomId}`, newRoom);
    refetch();
    return data.data;
  };

  return {
    BookedRoom,
    // checkAvailable,
    addnewBooking,
    refetch,
  };
};

export default useBooked;
