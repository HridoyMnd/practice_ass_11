import { useQuery } from "@tanstack/react-query";
import useAxiso from "./useAxios";


const useBook = () => {
    const { data: All_rooms = [], refetch } = useQuery({
        queryKey: ["coupon"],
        queryFn: async () => {
            const res = await useAxiso.get('/all_room')
            return res.data;
        }
    })

    return {
        All_rooms, refetch
    }

};

export default useBook;