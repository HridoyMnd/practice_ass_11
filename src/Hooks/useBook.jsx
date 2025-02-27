// import { useQuery } from "@tanstack/react-query";
// import useAxiso from "./useAxios";


// const useBook = () => {
//     const { data: coupon = [], refetch } = useQuery({
//         queryKey: ["coupon"],
//         queryFn: async () => {
//             const res = await useAxiso.get('/all_booked_room')
//             return res.data;
//         }
//     })

//     return {
//         coupon, refetch
//     }

// };

// export default useBook;