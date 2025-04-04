import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import { Auth_context } from "../Api/Context";
import { useContext } from "react";

const useBooked = () => {
  const { user } = useContext(Auth_context);
  const userUid = user?.uid;
  // get booked data
  const { data: BookedRoom = [], refetch } = useQuery({
    queryKey: ["room"],
    queryFn: async () => {
      const res = await useAxios.get(`/myBookedroomp/${userUid}`);
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

  //   update booking date
  const updateDate = async (updateddate, roomId) => {
    const data = await useAxios.put(`/b_date_update/${roomId}`, updateddate);
    refetch();
    return data.data;
  };

  return {
    BookedRoom,
    updateDate,
    // checkAvailable,
    addnewBooking,
    refetch,
  };
};

export default useBooked;
