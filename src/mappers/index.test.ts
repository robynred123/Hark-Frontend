import { mapAnomaly, mapEnergy, mapHumidity, mapTemperature } from ".";
import { mockData } from "../../mocks/testData";

describe("mappers", () => {
  describe("mapEnergy", () => {
    it("should return an array with energy data x & y values", () => {
      const data = mapEnergy(mockData);
      expect(data).toEqual([
        { x: 1577836800000, y: 10.33 },
        { x: 1577838600000, y: 0.87 },
      ]);
    });

    it("should return an empty array with empty data object", () => {
      const data = mapEnergy({});
      expect(data).toEqual([]);
    });

    it("should return an empty array with empty data object", () => {
      const data = mapEnergy(undefined);
      expect(data).toEqual([]);
    });
  });

  describe("mapAnomaly", () => {
    it("should return an array with anomaly data x & y values", () => {
      const data = mapAnomaly(mockData);
      expect(data).toEqual([{ x: 1577836800000, y: 10.33 }]);
    });

    it("should return an empty array with empty data object", () => {
      const data = mapAnomaly({});
      expect(data).toEqual([]);
    });

    it("should return an empty array with empty data object", () => {
      const data = mapAnomaly(undefined);
      expect(data).toEqual([]);
    });
  });

  describe("mapTemperature", () => {
    it("should return an array with temperature data x & y values", () => {
      const data = mapTemperature(mockData);
      expect(data).toEqual([
        { x: 1577836800000, y: 9.25 },
        { x: 1577838600000, y: 9.25 },
      ]);
    });

    it("should return an empty array with empty data object", () => {
      const data = mapTemperature({});
      expect(data).toEqual([]);
    });

    it("should return an empty array with empty data object", () => {
      const data = mapTemperature(undefined);
      expect(data).toEqual([]);
    });
  });

  describe("mapHumidity", () => {
    it("should return an array with humidity data x & y values", () => {
      const data = mapHumidity(mockData);
      expect(data).toEqual([
        { x: 1577836800000, y: 0.93 },
        { x: 1577838600000, y: 0.93 },
      ]);
    });

    it("should return an empty array with empty data object", () => {
      const data = mapHumidity({});
      expect(data).toEqual([]);
    });

    it("should return an empty array with empty data object", () => {
      const data = mapHumidity(undefined);
      expect(data).toEqual([]);
    });
  });
});
