type formattedData = {
  dateTime?: string;
  energyConsumption?: string;
  anomalyConsumption?: string;
  avgTemperature?: string;
  avgHumidity?: string;
};

export type MappedData = { [key: string]: formattedData };
export interface IChildProps {
  children: React.ReactNode;
}
