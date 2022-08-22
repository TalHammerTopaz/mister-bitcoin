import { Component } from "react";
import React from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";

export function Chart({ data }) {
  return (
    <div className="chart">
      <Sparklines data={data}>
        <SparklinesLine color="blue" />
      </Sparklines>
    </div>
  );
}
