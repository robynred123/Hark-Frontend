import { useQuery } from "react-query";
import getEnergyData from "../queries/getEnergyData";
import { MappedData } from "../types";
import { LineGraph } from "../components/lineGraph";

export const Home = () => {
  const { data, isError, error, isLoading } = useQuery<MappedData, Error>(
    "energyData",
    getEnergyData
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div data-testid="lineGraphContainer">
      <LineGraph data={data} />
    </div>
  );
};
