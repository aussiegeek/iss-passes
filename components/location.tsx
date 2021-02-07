import * as React from "react";
import { useGeoLocation, Success } from "./useGeoLocation";

export const Location: React.FC<{
  render: (props: { position: Success }) => JSX.Element;
}> = ({ render }) => {
  const position = useGeoLocation();

  if (position.state != "success") {
    return <div>Fetching location</div>;
  }

  return render({ position });
};
