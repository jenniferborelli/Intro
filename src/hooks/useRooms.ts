import { useQuery } from "@tanstack/react-query";
import { fetchRooms } from "../service/fetchRooms";
import { Room } from "../types/room";

const useRooms = () => {
  const query = useQuery<Room[], Error>({
    queryKey: ["room"],
    queryFn: fetchRooms,
  });
  return query;
};
export { useRooms };
