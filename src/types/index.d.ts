const numbers = [0];

const drinkIngredient = numbers.map(
  (number) => `strIngredient${number}` as const
);

const drinkMeasure = numbers.map((number) => `strMeasure${number}` as const);

type DrinkIngredientProps = {
  [key in (typeof drinkIngredient)[number]]: string | null;
};

type DrinkMeasureProps = {
  [key in (typeof drinkMeasure)[number]]: string | null;
};

export type DrinkProps = {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strDrinkThumb: string;
} & DrinkIngredientProps &
  DrinkMeasureProps;
