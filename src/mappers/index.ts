import { MappedData } from "../types";

export const mapEnergy = (data: MappedData) => {
  const energyData: { x: number; y: number }[] = [];
  Object.entries(data).map(([key, value]) => {
    if (value.energyConsumption) {
      const dateTime = new Date(key).getTime();
      energyData.push({ x: dateTime, y: parseFloat(value.energyConsumption) });
    }
  });
  return energyData;
};

export const mapAnomaly = (data: MappedData) => {
  const energyData: { x: number; y: number }[] = [];
  Object.entries(data).map(([key, value]) => {
    if (value.anomalyConsumption) {
      const dateTime = new Date(key).getTime();
      energyData.push({ x: dateTime, y: parseFloat(value.anomalyConsumption) });
    }
  });
  return energyData;
};

export const mapTemperature = (data: MappedData) => {
  const energyData: { x: number; y: number }[] = [];
  Object.entries(data).map(([key, value]) => {
    if (value.avgTemperature) {
      const dateTime = new Date(key).getTime();
      energyData.push({ x: dateTime, y: parseFloat(value.avgTemperature) });
    }
  });
  return energyData;
};

export const mapHumidity = (data: MappedData) => {
  const energyData: { x: number; y: number }[] = [];
  Object.entries(data).map(([key, value]) => {
    if (value.avgHumidity) {
      const dateTime = new Date(key).getTime();
      energyData.push({ x: dateTime, y: parseFloat(value.avgHumidity) });
    }
  });
  return energyData;
};
