import { mockData } from "../../mocks/testData";
import { determineSeries } from "./seriesSelector";

describe("determineSeries", () => {
  it("should return the expected series information for graph view 1", () => {
    const series = determineSeries(1, { data: mockData });
    expect(series.title).toEqual("Energy and Weather Data In Your Location");
    expect(series.series).toHaveLength(5);
    expect(series.series[0]).toEqual({
      type: "line",
      name: "Energy Consumption",
      data: [
        {
          x: 1577836800000,
          y: 10.33,
        },
        {
          x: 1577838600000,
          y: 0.87,
        },
      ],
      pointInterval: 1000 * 60 * 30,
    });
  });

  it("should return the expected series information for graph view 2", () => {
    const series = determineSeries(2, { data: mockData });
    expect(series.title).toEqual("Energy Consumption In Your Location");
    expect(series.series).toHaveLength(3);
  });

  it("should return the expected series information for graph view 3", () => {
    const series = determineSeries(3, { data: mockData });
    expect(series.title).toEqual("Weather In Your Location");
    expect(series.series).toHaveLength(2);
  });
});
