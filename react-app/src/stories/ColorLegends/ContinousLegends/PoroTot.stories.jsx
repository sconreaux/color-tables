import colorTables from "../../../component/color-tables.json";
import React from "react";
import { ContinuousLegend } from "../../../component/Legend/ContinuousLegend";
export default {
  component: ContinuousLegend,
  title: "Legends/ContinousLegend",
};

const min = 0;
const max = 0.35;
const dataObjectName = "Wells / POROTOT";
const position = [16, 10];
const horizontal = true;
const colorName = "Porosity";
const isRangeShown = true;

const Template = (args) => {
  return <ContinuousLegend {...args} />;
};

export const PoroTotTemplate = Template.bind({});
PoroTotTemplate.args = {
  min,
  max,
  dataObjectName,
  position,
  colorName,
  colorTables,
  horizontal,
  isRangeShown,
  legendFontSize: 13,
  tickFontSize: 13,
  numberOfTicks: 3,
  legendScaleSize: 300,
};
