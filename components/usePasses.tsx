import { QueryObserverResult, useQuery } from "react-query";

export interface Iss {
  api_status: string;
  norad_id: number;
  satellite_name: string;
  lat: number;
  lon: number;
  hours: number;
  min_elevation: number;
  passes: Pass[];
}

export interface Pass {
  start: string;
  tca: string;
  end: string;
  aos_azimuth: number;
  los_azimuth: number;
  max_elevation: number;
}

export function usePasses(
  coords: GeolocationCoordinates
): QueryObserverResult<Iss, Error> {
  const result = useQuery<Iss, Error>("repoData", () =>
    fetch(
      `https://api.g7vrd.co.uk/v1/satellite-passes/25544/${coords.latitude}/${coords.longitude}.json?minelevation=10&hours=72`
    ).then((res) => res.json())
  );

  return result;
}
