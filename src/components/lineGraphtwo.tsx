import Highcharts, { Options } from "highcharts";
import { HighchartsReact } from "highcharts-react-official";
import { formatToolTip } from "../utils/formatToolTip";
import { MappedData } from "../types";
import { useState } from "react";
import { determineSeries } from "../utils/seriesSelector";

export const LineGraph = (data: { data: MappedData }) => {
  const [graphView, setGraphView] = useState<number>(1);

  const options: Options = {
    title: {
      text: determineSeries(graphView, data).title,
    },
    accessibility: {
      enabled: true,
    },
    time: {
      useUTC: true,
    },
    xAxis: {
      type: "datetime",
      title: {
        text: "Date",
      },
    },
    yAxis: {
      title: {
        text: undefined,
      },
    },
    tooltip: {
      formatter: function () {
        return this.points.reduce(function (s, point) {
          return formatToolTip(s, point);
        }, "<b>" +
          Highcharts.dateFormat("%a %d %b %Y %H:%M", this.x as number) +
          "</b>");
      },
      shared: true,
    },
    series: determineSeries(graphView, data).series,
  };

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        immutable={false}
      />
    </div>
  );
};
