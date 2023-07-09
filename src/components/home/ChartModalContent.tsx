import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";

import { DoughnutChartCategory } from "components/home/DoughnutChartCategory";
import { PieChartTypesOfGlasses } from "components/home/PieChartTypesOfGlasses";
import { VerticalBarAlcoholic } from "components/home/VerticalBarAlcoholic";
import { DrinkProps } from "types";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type ChartModalContentProps = {
  data: DrinkProps[];
};

export const ChartModalContent = ({ data }: ChartModalContentProps) => {
  return (
    <div className="chart-modal-content">
      <DoughnutChartCategory
        data={data.map((drinkInfos) => drinkInfos.strCategory)}
      />
      <PieChartTypesOfGlasses
        data={data.map((drinkInfos) => drinkInfos.strGlass)}
      />
      <VerticalBarAlcoholic
        data={data.map((drinkInfos) => drinkInfos.strAlcoholic)}
      />
    </div>
  );
};
