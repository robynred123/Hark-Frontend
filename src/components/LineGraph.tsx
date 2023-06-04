import Highcharts, { Options, format } from "highcharts";
import { HighchartsReact } from "highcharts-react-official";
import { MappedData } from "../types";
import { mapAnomaly, mapEnergy, mapHumidity, mapTemperature } from "../mappers";

export const LineGraph = (data: { data: MappedData }) => {
  const energyData = mapEnergy(data.data);
  const anomalyData = mapAnomaly(data.data);
  const temperatureData = mapTemperature(data.data);
  const humidityData = mapHumidity(data.data);
  const firstDate = new Date(Object.keys(data.data)[0]).getTime();

  const tooltipText = (s, point) => {
    switch (point.series.name) {
      case "Anomalies": {
        return `${s}<br />Energy Usage Anomaly: true`;
      }
      case "Average Temperature": {
        return `${s}<br />${point.series.name}: ${point.y}&deg C`;
      }
      case "Average Humidity": {
        return `${s}<br />${point.series.name}: ${point.y}&deg RH`;
      }
      default: {
        return `${s}<br />${point.series.name}: ${point.y}`;
      }
    }
  };

  const options: Options = {
    title: {
      text: "Energy and Weather Data In Your Location",
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
          return tooltipText(s, point);
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
