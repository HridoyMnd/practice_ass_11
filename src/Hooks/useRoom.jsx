import { useQuery } from "@tanstack/react-query";
// import useAxiso from "./useAxios";
import useAxios from "./useAxios";

const useRoom = () => {
  const { data: All_rooms = [], refetch } = useQuery({
    queryKey: ["coupon"],
    queryFn: async () => {
      const res = await useAxios.get("/all_room", {
        withCredentials: true,
      });
      return res.data;
    },
  });

  return {
    All_rooms,
    refetch,
  };
};

export default useRoom;
