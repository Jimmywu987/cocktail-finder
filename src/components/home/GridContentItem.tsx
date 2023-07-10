import { NavLink } from "react-router-dom";
import { Card, Grid, Image } from "semantic-ui-react";
import { DrinkProps } from "types";

import { useDispatch } from "react-redux";
import { updateSelectedDrink } from "redux/selectedDrink";

type GridContentItemProps = {
  drink: DrinkProps;
};

export const GridContentItem = ({ drink }: GridContentItemProps) => {
  const dispatch = useDispatch();

  const { idDrink, strDrinkThumb, strDrink, strAlcoholic, strInstructions } =
    drink;
  return (
    <Grid.Column
      key={idDrink}
      mobile={16}
      tablet={8}
      computer={4}
      className="grid-item"
    >
      <NavLink
        to={`/${strDrink}`}
        onClick={() => {
          dispatch(updateSelectedDrink({ selectedDrink: drink }));
        }}
      >
        <Card link>
          <Image
            src={strDrinkThumb}
            wrapped
            ui={false}
            alt={`${strDrink} image`}
          />
          <Card.Content>
            <Card.Header>{strDrink}</Card.Header>
            <Card.Meta>{strAlcoholic}</Card.Meta>
            <Card.Description className="drink-description">
              {strInstructions}
            </Card.Description>
          </Card.Content>
          <Card.Content>
            <span>view details</span>
          </Card.Content>
        </Card>
      </NavLink>
    </Grid.Column>
  );
};
