import { NextResponse, NextRequest } from "next/server";
import axios from "axios";
import { env } from "@/env.mjs";

const GOOGLE_MAPS_API_URL =
  "https://maps.googleapis.com/maps/api/directions/json";
const API_KEY = env.GOOGLE_MAP_API_KEY;

export async function GET(
  request: NextRequest,
  { params }: { params: { points: string[] } }
) {
  // try {
  const [origin, destination, departureTime, arrivalTime] = params.points;

  if (!origin || !destination) {
    return NextResponse.json(
      {
        error:
          "Missing required parameters: origin and destination are mandatory.",
      },
      { status: 400 }
    );
  }

  const queryParams = {
    origin: origin,
    destination: destination,
    mode: "transit",
    key: API_KEY,
    departure_time: departureTime,
  };

  const { data } = await axios.get(GOOGLE_MAPS_API_URL, {
    params: queryParams,
  });

  if (data.status !== "OK") {
    console.error(`Google API Error: ${data.status}`);
    return NextResponse.json(
      { error: data.error_message || data.status },
      { status: 500 }
    );
  }

  const routeInfo = data.routes[0].legs[0].steps
  .filter((step: any) => step.travel_mode === "TRANSIT")
  .map((step: any) => ({
    departureStop: step.transit_details.departure_stop.name,
    arrivalStop: step.transit_details.arrival_stop.name,
    departureTime: step.transit_details.departure_time.text,
    arrivalTime: step.transit_details.arrival_time.text,
  }));

  return NextResponse.json(routeInfo);
  // } catch (error: any) {
  //   console.error("Error fetching transit route:", error.message || error);
  //   return NextResponse.json(
  //     {
  //       error: `Failed to fetch route.\n Error fetching transit route: ${error} `,
  //     },
  //     { status: 500 }
  //   );
  // }
}
