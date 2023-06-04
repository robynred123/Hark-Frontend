import { mapEnergy, mapAnomaly, mapTemperature, mapHumidity } from "../mappers";
import { GraphDataArray } from "../types";

export const determineSeries = (graphView, data) => {
  const energyData: GraphDataArray = mapEnergy(data.data);
  const anomalyData: GraphDataArray = mapAnomaly(data.data);
  const temperatureData: GraphDataArray = mapTemperature(data.data);
  const humidityData: GraphDataArray = mapHumidity(data.data);
  const firstDate: number = new Date(Object.keys(data)[0]).getTime();

  const energySeries = {
    type: "line",
    name: "Energy Consumption",
    data: energyData,
    pointInterval: 1000 * 60 * 30,
    pointStart: firstDate,
  };

  const anomalySeries = {
    type: "line",
    lineWidth: 0,
    name: "Anomalies",
    data: anomalyData,
    pointStart: firstDate,
    showInLegend: false,
  };

  const anomalyPointsSeries = {
    type: "scatter",
    name: "Energy Usage Anomalies",
    enableMouseTracking: false,
    data: anomalyData,
    pointStart: firstDate,
  };

  const humiditySeries = {
    type: "line",
    name: "Average Humidity",
    data: humidityData,
    showInLegend: true,
  };

  const temperatureSeries = {
    type: "line",
    name: "Average Temperature",
    data: temperatureData,
  };

  const seriesSelector = {
    1: {
      title: "Energy and Weather Data In Your Location",
      series: [
        energySeries,
        anomalySeries,
        anomalyPointsSeries,
        temperatureSeries,
        humiditySeries,
      ],
    },
    2: {
      title: "Energy Consumption In Your Location",
      series: [energySeries, anomalySeries, anomalyPointsSeries],
    },
    3: {
      title: "Weather In Your Location",
      series: [temperatureSeries, humiditySeries],
    },
  };
  return seriesSelector[graphView];
};
