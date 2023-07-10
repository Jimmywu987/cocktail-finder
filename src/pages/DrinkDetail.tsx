import { useFetchDrinkQuery } from "apis/api";
import { DrinkInfo } from "components/drinkDetails/DrinkInfo";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Grid, Image } from "semantic-ui-react";

import { DrinkDetailSkeleton } from "components/drinkDetails/DrinkDetailSkeleton";
import { IngredientTable } from "components/drinkDetails/IngredientTable";
import {
  selectedDrinkSelector,
  updateSelectedDrink,
} from "redux/selectedDrink";

export const DrinkDetail = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { selectedDrink } = useSelector(selectedDrinkSelector);

  const { isLoading, isError } = useFetchDrinkQuery(
    `s=${pathname.replace("/", "")}`,
    {
      // disable the query when there is a data for the selected drink
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
      // clear the selected drink when the component is unmounted
      dispatch(updateSelectedDrink({ selectedDrink: null }));
    };
  }, []);

  if (isError) {
    return (
      <div className="fetch-data-error-text">
        Something went wrong, please try again later
      </div>
    );
  }

  if (isLoading || !selectedDrink) {
    return <DrinkDetailSkeleton />;
  }

  const {
    strDrink,
    strDrinkThumb,
    strInstructions,
    strAlcoholic,
    strCategory,
    strGlass,
  } = selectedDrink;
  return (
    <section className="drink-detail-section">
      <Grid stackable className="drink-detail-grid">
        <Grid.Column width={6}>
          <div className="drink-name">
            <h1>{strDrink} </h1>
            <span>({strAlcoholic})</span>
          </div>
          <Image
            src={strDrinkThumb}
            ui={false}
            style={{ width: "100%" }}
            alt={`${strDrink} image`}
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <DrinkInfo title="Category: " info={strCategory} />
          <DrinkInfo title="Types of glasses: " info={strGlass} />
          <IngredientTable />
          <DrinkInfo title="Instructions: " info={strInstructions} />
        </Grid.Column>
      </Grid>
    </section>
  );
};
