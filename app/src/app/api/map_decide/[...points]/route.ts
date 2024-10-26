import { NextResponse } from "next/server";
import axios from "axios";
import { NextRequest } from "next/server";

const GOOGLE_MAPS_API_URL =
  "https://maps.googleapis.com/maps/api/directions/json";
const API_KEY = process.env.GOOGLE_MAPS_API_KEY; // 環境変数からAPIキーを取得

export async function GET(
  request: NextRequest,
  { params }: { params: { points: string[] } }
) {
  const [origin, destination, departureTime, arrivalTime] = params.points;

  if (!origin || !destination) {
    return NextResponse.json(
      { error: "Missing required parameters" },
      { status: 400 }
    );
  }

  try {
    if (arrivalTime) {
      const params = {
        origin,
        destination,
        mode: "transit",
        arrival_time: new Date(arrivalTime).getTime() / 1000,
        key: API_KEY,
      };
    } else {
      const params = {
        origin,
        destination,
        mode: "transit",
        departure_time: new Date(departureTime).getTime() / 1000,
        key: API_KEY,
      };
    }

    const response = await axios.get(GOOGLE_MAPS_API_URL, { params });

    if (response.data.status !== "OK") {
      throw new Error(`API Error: ${response.data.status}`);
    }

    const routeInfo = response.data.routes[0].legs[0].steps
      .filter((step: any) => step.travel_mode === "TRANSIT")
      .map((step: any) => ({
        lineName: step.transit_details.line.short_name,
        departureStop: step.transit_details.departure_stop.name,
        arrivalStop: step.transit_details.arrival_stop.name,
        departureTime: step.transit_details.departure_time.text,
        arrivalTime: step.transit_details.arrival_time.text,
        numStops: step.transit_details.num_stops,
      }));

    return NextResponse.json(routeInfo);
  } catch (error) {
    console.error("Error fetching transit route:", error);
    return NextResponse.json(
      { error: "Failed to fetch route" },
      { status: 500 }
    );
  }
}
