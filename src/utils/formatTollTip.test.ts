import { mock } from "jest-mock-extended";
import { formatToolTip } from "./formatToolTip";

describe("formatToolTip", () => {
  it("should return the correct string for Energy Usage Anomaly series name", () => {
    const point = mock<Highcharts.TooltipFormatterContextObject>({
      series: {
        name: "Anomalies",
      },
      y: 10,
    });
    const string = formatToolTip("", point);
    expect(string).toEqual(
      '<br /><b style="color:red">Energy Usage Anomaly: true</b>'
    );
  });

  it("should return the correct string for Average Temperature series name", () => {
    const point = mock<Highcharts.TooltipFormatterContextObject>({
      series: {
        name: "Average Temperature",
      },
      y: 10,
    });
    const string = formatToolTip("", point);
    expect(string).toEqual("<br />Average Temperature: 10&deg C");
  });

  it("should return the correct string for Average Humidity series name", () => {
    const point = mock<Highcharts.TooltipFormatterContextObject>({
      series: {
        name: "Average Humidity",
      },
      y: 10,
    });
    const string = formatToolTip("", point);
    expect(string).toEqual("<br />Average Humidity: 10 RH");
  });

  it("should return the default formatted string for other series' name", () => {
    const point = mock<Highcharts.TooltipFormatterContextObject>({
      series: {
        name: "Other name",
      },
      y: 10,
    });
    const string = formatToolTip("", point);
    expect(string).toEqual("<br />Other name: 10");
  });
});
