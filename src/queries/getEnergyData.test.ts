import { mockData } from "../../mocks/testData";
import getEnergyData from "./getEnergyData";
import axios from "axios";
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
describe("getEnergyData", () => {
  it("should successfully retrieve the energy data", async () => {
    mockedAxios.get.mockImplementation(() =>
      Promise.resolve({ data: mockData })
    );
    const data = await getEnergyData();

    expect(data).toEqual(mockData);
  });

  it("should throw an error on promise rejection", async () => {
    mockedAxios.get.mockImplementation(() => Promise.reject());

    await expect(() => getEnergyData()).rejects.toBeUndefined();
  });
});
