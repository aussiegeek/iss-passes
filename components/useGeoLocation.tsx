import { useEffect, useState } from "react";
interface Waiting {
  state: "waiting";
}
export interface Success extends GeolocationPosition {
  state: "success";
}

interface PositionError extends GeolocationPositionError {
  state: "error";
}
export type HookState = Waiting | Success | PositionError;

export function useGeoLocation(): HookState {
  const [state, setState] = useState<HookState>({ state: "waiting" });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { coords, timestamp } = position;
        const newState: Success = { coords, state: "success", timestamp };
        setState(newState);
      },
      (error) => {
        setState({ ...error, state: "error" });
        console.warn(error);
      }
    );
  }, []);

  return state;
}
