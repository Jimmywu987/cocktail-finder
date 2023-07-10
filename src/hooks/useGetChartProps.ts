import { getRandomHexColorCode } from "utils/getRandomHexColorCode";
import { useTextThemeColor } from "hooks/useTextThemeColor";

export const useGetChartProps = (data: string[]) => {
  const labels = [...new Set(data)];
  const colors = labels.map(() => getRandomHexColorCode());
  const textThemeColor = useTextThemeColor();
  return {
    data: {
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
    },
    options: {
      plugins: {
        // 'legend' now within object 'plugins {}'
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
    },
  };
};
