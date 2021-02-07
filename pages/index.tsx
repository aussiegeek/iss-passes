import Head from "next/head";
import { Success } from "../components/useGeoLocation";
import { Location } from "../components/location";

import { FormattedDate, FormattedTime } from "react-intl";
import React from "react";
import { Pass, usePasses } from "../components/usePasses";
import Spin from "../components/Spin";

const Th: React.FC = ({ children }) => (
  <th className="text-right border p-1">{children}</th>
);

const Td: React.FC = ({ children }) => (
  <td className="text-right border p-1">{children}</td>
);
const ShowData = ({ position }: { position: Success }) => {
  const { data, isLoading } = usePasses(position.coords);

  if (isLoading) {
    return <Spin />;
  }
  if (!data) {
    return <div>Error loading data</div>;
  }
  return (
    <div className="container-md">
      <h1 className="text-xl mb-10">ISS</h1>

      <table className="table-auto w-full">
        <thead>
          <tr>
            <Th>Date</Th>
            <Th>Start</Th>
            <Th>TCA</Th>
            <Th>End</Th>
            <Th>Max Elevation</Th>
          </tr>
        </thead>
        <tbody>
          {data.passes.map((pass) => (
            <PassRow key={pass.start} pass={pass} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const PassRow: React.FC<{ pass: Pass }> = ({ pass }) => {
  return (
    <tr className={textClassSize(pass.max_elevation)} key={pass.start}>
      <Td>
        <FormattedDate
          value={pass.start}
          weekday="short"
          month="short"
          day="numeric"
        />
      </Td>
      <Td>
        <FormattedTime value={pass.start} />
      </Td>
      <Td>
        <FormattedTime value={pass.tca} />
      </Td>
      <Td>
        <FormattedTime value={pass.end} />
      </Td>
      <Td>{pass.max_elevation}</Td>
    </tr>
  );
};

const textClassSize = (max_elevation: number): string => {
  if (max_elevation > 80) {
    return "text-5xl";
  } else if (max_elevation > 60) {
    return "text-4xl";
  } else if (max_elevation > 40) {
    return "text-3xl";
  } else {
    return "text-base";
  }
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
