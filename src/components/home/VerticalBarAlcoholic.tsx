import { useTextThemeColor } from "hooks/useTextThemeColor";
import { Bar } from "react-chartjs-2";
import { ChartProps } from "types";

export const VerticalBarAlcoholic = ({ data }: ChartProps) => {
  const isAlcoholic = data.filter((info) => info === "Alcoholic").length;
  const isNonAlcoholic = data.length - isAlcoholic;
  const textThemeColor = useTextThemeColor();

  return (
    <Bar
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
        scales: {
          y: {
            grid: {
              color: textThemeColor,
            },
            ticks: {
              color: textThemeColor,
            },
          },
          x: {
            grid: {
              color: textThemeColor,
            },
          },
        },
      }}
      data={{
        labels: [""],
        datasets: [
          {
            label: "Non-Alcoholic",
            data: [isNonAlcoholic],
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
          {
            label: "Alcoholic",
            data: [isAlcoholic],
            backgroundColor: "rgba(53, 162, 235, 0.5)",
            borderColor: "rgba(53, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      }}
    />
  );
};
