import { Room } from "../types/room";
export const fetchRooms = async (): Promise<Room[]> => {
  const response = await fetch("https://apimocha.com/homestock/rooms");
  const data = await response.json();
  return data["room"];
};
