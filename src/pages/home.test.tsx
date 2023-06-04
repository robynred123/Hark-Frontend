import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Home } from "./home";
import { MappedData } from "../types";
import { QueryClient, QueryClientProvider } from "react-query";
import * as ReactQuery from "react-query";

const mockData: MappedData = {
  "2020-01-01T00:00:00.000Z": {
    anomalyConsumption: "10.33",
    avgHumidity: "0.93",
    avgTemperature: "9.25",
    dateTime: "2020-01-01T00:00:00.000Z",
    energyConsumption: "10.33",
  },
  "2020-01-01T00:30:00.000Z": {
    avgHumidity: "0.93",
    avgTemperature: "9.25",
    dateTime: "2020-01-01T00:30:00.000Z",
    energyConsumption: "0.87",
  },
};

const queryClient = new QueryClient();
const querySpy = jest.spyOn(ReactQuery, "useQuery");

describe("<Home />", () => {
  it("should render the page as expected with a loading header", () => {
    querySpy.mockImplementation(
      jest.fn().mockReturnValueOnce({
        data: { ...mockData },
        isLoading: true,
        error: {},
      })
    );
    render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    );

    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent("Loading...");
  });

  it("should render the page as expected with an error message on fetch error", () => {
    querySpy.mockImplementation(
      jest.fn().mockReturnValueOnce({
        data: { ...mockData },
        isLoading: false,
        isError: true,
        error: { message: "Something bad happened" },
      })
    );
    render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    );

    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent("Something bad happened");
  });

  it("should render the page as expected with the line graph", () => {
    querySpy.mockImplementation(
      jest.fn().mockReturnValueOnce({
        data: { ...mockData },
        isLoading: false,
        isError: false,
        error: {},
      })
    );
    render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    );

    const chart = screen.getByTestId("lineGraphContainer");
    expect(chart).toBeInTheDocument();
  });
});
