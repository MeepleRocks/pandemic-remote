import * as React from "react";
import { useState } from "react";
import { Layer, Source, StaticMap } from "react-map-gl";
import Marker from "./Marker";
import useConnections from "./useConnections";

const Map = ({ data }) => {
  const [viewport, setViewport] = useState({
    mapStyle: "mapbox://styles/mapbox/dark-v9",
    width: "100%",
    height: "100%",
    latitude: 10,
    longitude: 25,
    zoom: 2,
  });

  const connections = {
    type: "Feature",
    properties: {},
    geometry: {
      type: "LineString",
      coordinates: [
        [-122.48369693756104, 37.83381888486939],
        [-122.48348236083984, 37.83317489144141],
        [-122.48339653015138, 37.83270036637107],
        [-122.48356819152832, 37.832056363179625],
        [-122.48404026031496, 37.83114119107971],
        [-122.48404026031496, 37.83049717427869],
        [-122.48348236083984, 37.829920943955045],
        [-122.48356819152832, 37.82954808664175],
        [-122.48507022857666, 37.82944639795659],
        [-122.48610019683838, 37.82880236636284],
        [-122.48695850372314, 37.82931081282506],
        [-122.48700141906738, 37.83080223556934],
        [-122.48751640319824, 37.83168351665737],
        [-122.48803138732912, 37.832158048267786],
        [-122.48888969421387, 37.83297152392784],
        [-122.48987674713133, 37.83263257682617],
        [-122.49043464660643, 37.832937629287755],
        [-122.49125003814696, 37.832429207817725],
        [-122.49163627624512, 37.832564787218985],
        [-122.49223709106445, 37.83337825839438],
        [-122.49378204345702, 37.83368330777276],
      ],
    },
  };

  return (
    <StaticMap
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      <Source id="connections" type="geojson" data={connections}>
        <Layer
          id="connection-route"
          type="line"
          paint={{
            "line-color": "#EAEAEA",
            "line-width": 30,
          }}
        />
      </Source>
      {/*data.map((item) => (
        <Marker
          id={item.id}
          name={item.name}
          latitude={item.latitude}
          longitude={item.longitude}
          faction={item.faction}
          region={item.region}
          draggable={true}
          offsetLeft={-100}
          offsetTop={-100}
          onClick={(value) => console.log(value)}
        />
      ))*/}
    </StaticMap>
  );
};

export default Map;
