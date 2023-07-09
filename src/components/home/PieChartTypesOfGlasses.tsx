import { useTextThemeColor } from "hooks/useTextThemeColor";
import { Pie } from "react-chartjs-2";
import { ChartProps } from "types";
import { getRandomHexColorCode } from "utils/getRandomHexColorCode";

export const PieChartTypesOfGlasses = ({ data }: ChartProps) => {
  const labels = [...new Set(data)];
  const colors = labels.map(() => getRandomHexColorCode());
  const textThemeColor = useTextThemeColor();
  return (
    <Pie
      data={{
        labels,
        datasets: [
          {
            data: labels.map(
              (label) => data.filter((info) => info === label).length
            ),
            backgroundColor: colors.map((color) => `${color}33`),
            borderColor: colors,
            borderWidth: 1,
          },
        ],
      }}
      options={{
        plugins: {
          legend: {
            labels: {
              color: textThemeColor, // not 'fontColor:' anymore

              font: {
                size: 14, // 'size' now within object 'font {}'
              },
            },
          },
        },
        responsive: true,
      }}
      style={{ maxHeight: "450px", margin: "1rem 0" }}
    />
  );
};
