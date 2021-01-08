import * as React from "react";
import { BaseControl } from "react-map-gl";
import { Icon } from "@material-ui/core";
import Faction from "components/Faction";
import Agent from "components/agent.svg";

class Marker extends BaseControl {
  _render() {
    const {
      id,
      name,
      longitude,
      latitude,
      faction,
      region,
      onClick,
      agents = 1,
      infection = 0,
      incident = 0,
      surveilance = 0,
    } = this.props;

    const [x, y] = this._context.viewport.project([longitude, latitude]);

    const markerStyle = {
      position: "absolute",
      left: x,
      top: y,
    };
    const regionColor = {
      1: "dodgerblue",
      2: "deepskyblue",
      3: "goldenrod",
      4: "darkkhaki",
      5: "peachpuff",
      6: "lightsalmon",
    };
    const cityStyle = {
      padding: "0.5rem",
      borderRadius: 4,
      cursor: "pointer",
      background: "beige",
      borderLeft: `4px solid ${regionColor[region]}`,
    };

    const cityHeader = {
      display: "flex",
      alignItems: "center",
    };
    const handleClick = () => {
      onClick(id);
    };
    return (
      <div ref={this._containerRef} style={markerStyle}>
        <div onClick={handleClick} style={cityStyle}>
          <div style={cityHeader}>
            <div>
              <Faction id={faction.toString()} size="small" />
            </div>
            <div style={{ fontSize: "0.75rem", marginLeft: "0.5rem" }}>
              {name}
            </div>
          </div>
          <div style={{ paddingTop: "0.25rem" }}>
            {Array(agents).map((agent) => (
              <Agent />
            ))}
            <img
              alt="agent"
              style={{ width: "1.25rem", height: "1.25rem" }}
              src={Agent}
            />
          </div>
          <div style={{ paddingTop: "0.25rem" }}>
            {Array(agents).map((agent) => (
              <span
                style={{ color: "limegreen", width: "1rem", height: "1rem" }}
              />
            ))}
            <img
              alt="agent"
              style={{ width: "1.25rem", height: "1.25rem" }}
              src={Agent}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Marker;
