import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

export async function GET(request, { params }) {
  const { cabinId } = params;
  console.log("Cabin :", cabinId)
  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);
    return Response.json({cabin, bookedDates});
    // return Response.json({"CabinID":cabinId})
  } catch {
    return Response.json({message:"Cabin not found"})
  }
}
export async function POST() {
    
}