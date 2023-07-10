import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Table } from "semantic-ui-react";

import { selectedDrinkSelector } from "redux/selectedDrink";

const TOTAL_INGREDIENT_NUM = 15;

export const IngredientTable = () => {
  const { selectedDrink } = useSelector(selectedDrinkSelector);

  // get how many ingredients are there in the selected drink
  const ingredientNum = useMemo(() => {
    if (!selectedDrink) return 0;
    for (let i = 1; i <= TOTAL_INGREDIENT_NUM; i++) {
      if (!selectedDrink[`strIngredient${i}`]) {
        return i;
      }
    }
    return TOTAL_INGREDIENT_NUM;
  }, [selectedDrink]);

  if (!selectedDrink) return <></>;

  return (
    <Table celled padded unstackable className="ingredient-table">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell singleLine>Ingredients</Table.HeaderCell>
          <Table.HeaderCell>Measures</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {Array.from(Array(ingredientNum).keys()).map((index) => {
          const number = index + 1;
          return (
            <Table.Row key={index}>
              <Table.Cell singleLine>
                {selectedDrink[`strIngredient${number}`]}
              </Table.Cell>
              <Table.Cell textAlign="right">
                {selectedDrink[`strMeasure${number}`]}
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};
