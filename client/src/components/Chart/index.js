import React from "react";
import PropTypes from "prop-types";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import ReactFC from "react-fusioncharts";
import dataSource from "./test";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const Chart = ({ config }) => {
  return <ReactFC {...config} />;
};

Chart.defaultProps = {
  config: {
    type: "column2d",
    width: "100%",
    height: "90%",
    dataFormat: "json",
    dataSource,
  },
};

Chart.propTypes = {
  config: PropTypes.object,
};

export default Chart;
