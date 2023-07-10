import { useGetChartProps } from "hooks/useGetChartProps";
import { Pie } from "react-chartjs-2";
import { ChartProps } from "types";

export const PieChartTypesOfGlasses = ({ data }: ChartProps) => {
  const chartProps = useGetChartProps(data);
  return (
    <Pie {...chartProps} style={{ maxHeight: "450px", margin: "1rem 0" }} />
  );
};
