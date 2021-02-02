import Head from "next/head";
import { Success } from "../components/useGeoLocation";
import { Location } from "../components/location";

import { FormattedDate, FormattedTime } from "react-intl";
import React from "react";
import { usePasses } from "../components/usePasses";

const ShowData = ({ position }: { position: Success }) => {
  const { data } = usePasses(position.coords);
  if (!data) {
    return <div>no data</div>;
  }
  return (
    <>
      <h1>ISS</h1>

      <table style={{ border: "1px solid #eee" }}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Start</th>
            <th>TCA</th>
            <th>End</th>
            <th>Max Elevation</th>
          </tr>
        </thead>
        <tbody>
          {data.passes.map((pass) => (
            <tr key={pass.start}>
              <td>
                <FormattedDate
                  value={pass.start}
                  weekday="short"
                  month="short"
                  day="numeric"
                />
              </td>
              <td>
                <FormattedTime value={pass.start} />
              </td>
              <td>
                <FormattedTime value={pass.tca} />
              </td>
              <td>
                <FormattedTime value={pass.end} />
              </td>
              <td>{pass.max_elevation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>ISS</title>
      </Head>
      <Location render={({ position }) => <ShowData position={position} />} />
    </div>
  );
}
