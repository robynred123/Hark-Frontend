import Highcharts, { Options } from "highcharts";
import { HighchartsReact } from "highcharts-react-official";
import { formatToolTip } from "../utils/formatToolTip";
import { MappedData } from "../types";
import { mapEnergy, mapAnomaly, mapTemperature, mapHumidity } from "../mappers";

export const LineGraph = (data: { data: MappedData }) => {
  const energyData = mapEnergy(data.data);
  const anomalyData = mapAnomaly(data.data);
  const temperatureData = mapTemperature(data.data);
  const humidityData = mapHumidity(data.data);
  const firstDate = new Date(Object.keys(data)[0]).getTime();

  const options: Options = {
    title: {
      text: "Energy and Weather Data In Your Location",
    },
    accessibility: {
      enabled: true,
    },
    time: {
      useUTC: true,
    },
    xAxis: {
      type: "datetime",
      title: {
        text: "Date",
      },
    },
    yAxis: {
      title: {
        text: undefined,
      },
    },
    tooltip: {
      formatter: function () {
        return this.points.reduce(function (s, point) {
          return formatToolTip(s, point);
        }, "<b>" +
          Highcharts.dateFormat("%a %d %b %Y %H:%M", this.x as number) +
          "</b>");
      },
      shared: true,
    },
    series: [
      {
        type: "line",
        name: "Energy Consumption",
        data: energyData,
        pointInterval: 1000 * 60 * 30,
        pointStart: firstDate,
      },
      {
        type: "line",
        lineWidth: 0,
        name: "Anomalies",
        data: anomalyData,
        pointStart: firstDate,
        showInLegend: false,
      },
      {
        type: "scatter",
        name: "Energy Usage Anomalies",
        enableMouseTracking: false,
        data: anomalyData,
        pointStart: firstDate,
      },
      {
        type: "line",
        name: "Average Temperature",
        data: temperatureData,
      },
      {
        type: "line",
        name: "Average Humidity",
        data: humidityData,
      },
    ],
  };

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        immutable={false}
      />
    </div>
  );
};
