import { useGetChartProps } from "hooks/useGetChartProps";
import { Doughnut } from "react-chartjs-2";
import { ChartProps } from "types";

export const DoughnutChartCategory = ({ data }: ChartProps) => {
  const chartProps = useGetChartProps(data);
  return <Doughnut {...chartProps} style={{ maxHeight: "450px" }} />;
};
