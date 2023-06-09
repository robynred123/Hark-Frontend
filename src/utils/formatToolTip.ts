import Highcharts from "highcharts";

export const formatToolTip = (
  s: string,
  point: Highcharts.TooltipFormatterContextObject
) => {
  switch (point.series.name) {
    case "Anomalies": {
      return `${s}<br /><b style="color:red">Energy Usage Anomaly: true</b>`;
    }
    case "Average Temperature": {
      return `${s}<br />${point.series.name}: ${point.y}&deg C`;
    }
    case "Average Humidity": {
      return `${s}<br />${point.series.name}: ${point.y} RH`;
    }
    default: {
      return `${s}<br />${point.series.name}: ${point.y}`;
    }
  }
};
