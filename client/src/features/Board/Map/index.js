import * as React from "react";
import { useState } from "react";
import { StaticMap } from "react-map-gl";
import Marker from "./Marker";

const Map = ({ data }) => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 10,
    longitude: 25,
    zoom: 2,
  });

  return (
    <StaticMap
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {data.map((item) => (
        <Marker
          name={item.name}
          latitude={item.latitude}
          longitude={item.longitude}
          faction={item.faction}
          region={item.region}
          draggable={true}
          offsetLeft={-100}
          offsetTop={-100}
        />
      ))}
    </StaticMap>
  );
};

export default Map;
