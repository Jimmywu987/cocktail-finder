import { SkeletonSection } from "components/home/SkeletonSection";

import { GridContentItem } from "components/home/GridContentItem";
import { FetchDrinkResultProps } from "pages/Home";

type GridContentProps = {
  fetchDrinkResult: FetchDrinkResultProps;
};

export const GridContent = ({ fetchDrinkResult }: GridContentProps) => {
  const { data, isLoading, isError } = fetchDrinkResult;

  if (!data || isLoading) {
    return <SkeletonSection />;
  }
  if (isError) {
    return <div className="fetch-data-error-text">Something went wrong</div>;
  }
  if (!data?.drinks) {
    return <div className="no-found-text">No drink is found</div>;
  }
  return (
    <>
      {data.drinks.map((drink) => (
        <GridContentItem drink={drink} key={drink.idDrink} />
      ))}
    </>
  );
};
