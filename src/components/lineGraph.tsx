import { useState } from "react";
import Highcharts, { Options } from "highcharts";
import { HighchartsReact } from "highcharts-react-official";
import {
  FaRegArrowAltCircleRight,
  FaRegArrowAltCircleLeft,
} from "react-icons/fa";
import { formatToolTip } from "../utils/formatToolTip";
import { MappedData } from "../types";
import { determineSeries } from "../utils/seriesSelector";
import { Button } from "./button";

export const LineGraph = (data: { data: MappedData }) => {
  const [graphView, setGraphView] = useState<number>(1);

  const setView = (direction: string) => {
    switch (direction) {
      case "forward": {
        if (graphView === 3) {
          return setGraphView(1);
        } else return setGraphView(graphView + 1);
      }
      case "back": {
        if (graphView === 1) {
          return setGraphView(3);
        } else return setGraphView(graphView - 1);
      }
    }
  };

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
    <>
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          immutable={false}
        />
      </div>
      <div className="buttonContainer">
        <Button
          onClick={() => setView("back")}
          icon={<FaRegArrowAltCircleLeft className="icon" size={"35px"} />}
        />
        <Button
          onClick={() => setView("forward")}
          icon={<FaRegArrowAltCircleRight className="icon" size={"35px"} />}
        />
      </div>
    </>
  );
};
