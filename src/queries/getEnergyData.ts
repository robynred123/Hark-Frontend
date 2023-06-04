import axios from "axios";
import { MappedData } from "../types";

const getEnergyData = async () => {
  const { data } = await axios.get("http://localhost:8080/");
  return data as MappedData;
};

export default getEnergyData;
