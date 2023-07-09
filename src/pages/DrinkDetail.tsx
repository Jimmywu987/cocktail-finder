import { useFetchDrinkQuery } from "apis/api";
import { DrinkInfo } from "components/drinkDetails/DrinkInfo";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Grid, Image, Table } from "semantic-ui-react";

import { DrinkDetailSkeleton } from "components/drinkDetails/DrinkDetailSkeleton";
import {
  selectedDrinkSelector,
  updateSelectedDrink,
} from "redux/selectedDrink";

const TOTAL_INGREDIENT_NUM = 15;

export const DrinkDetail = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { selectedDrink } = useSelector(selectedDrinkSelector);

  const { isLoading, isError } = useFetchDrinkQuery(
    `s=${pathname.replace("/", "")}`,
    {
      enabled: !selectedDrink,
      onError: (err) => {
        // here should send the error to sentry
      },
      onSuccess: (data) => {
        if (!data || !data.drinks) {
          navigate("/");
          return;
        }
        const { drinks } = data;
        dispatch(updateSelectedDrink({ selectedDrink: drinks[0] }));
      },
    }
  );

  useEffect(() => {
    return () => {
      dispatch(updateSelectedDrink({ selectedDrink: null }));
    };
  }, []);

  const ingredientNum = useMemo(() => {
    if (!selectedDrink) return 0;
    for (let i = 1; i <= TOTAL_INGREDIENT_NUM; i++) {
      if (!selectedDrink[`strIngredient${i}`]) {
        return i;
      }
    }
    return TOTAL_INGREDIENT_NUM;
  }, [selectedDrink]);

  if (!selectedDrink) {
    return <></>;
  }

  const {
    strDrink,
    strDrinkThumb,
    strInstructions,
    strAlcoholic,
    strCategory,
    strGlass,
  } = selectedDrink;
  if (isError) {
    return (
      <div className="fetch-data-error-text">
        Something went wrong, please try again later
      </div>
    );
  }
  if (isLoading) {
    return <DrinkDetailSkeleton />;
  }

  return (
    <section className="drink-detail-section">
      <Grid stackable className="drink-detail-grid">
        <Grid.Column width={6}>
          <div className="drink-name">
            <h1>{strDrink} </h1>
            <span>({strAlcoholic})</span>
          </div>
          <Image src={strDrinkThumb} ui={false} style={{ width: "100%" }} />
        </Grid.Column>
        <Grid.Column width={10}>
          <DrinkInfo title="Category: " info={strCategory} />
          <DrinkInfo title="Types of glasses: " info={strGlass} />
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
                      {selectedDrink && selectedDrink[`strIngredient${number}`]}
                    </Table.Cell>
                    <Table.Cell textAlign="right">
                      {selectedDrink && selectedDrink[`strMeasure${number}`]}
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
          <DrinkInfo title="Instructions: " info={strInstructions} />
        </Grid.Column>
      </Grid>
    </section>
  );
};
