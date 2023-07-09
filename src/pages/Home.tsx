import { useFetchDrinkQuery } from "apis/api";

import { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Button,
  Card,
  Dropdown,
  Grid,
  Image,
  Menu,
  Segment,
} from "semantic-ui-react";
import { getAllAlphabets } from "utils/getAllAlphabets";

import { SkeletonSection } from "components/home/SkeletonSection";
import { useDispatch } from "react-redux";
import { updateSelectedDrink } from "redux/selectedDrink";
import { ToggleListAndChart } from "components/home/ToggleListAndChart";

export type FetchDrinkQueryProps = Pick<
  ReturnType<typeof useFetchDrinkQuery>,
  "data" | "isLoading" | "error"
>;

export const Home = () => {
  const alphabets = useMemo(() => getAllAlphabets(), []);

  const dispatch = useDispatch();

  const [query, setQuery] = useState({
    searchAlphabet: alphabets[0],
    searchInput: "",
    searchBy: "f",
  });

  const { searchBy, searchAlphabet, searchInput } = query;

  const searchWithAlphabet = searchBy === "f";

  const queryString = `${searchBy}=${
    searchWithAlphabet ? searchAlphabet : searchInput
  }`;

  const { data, isFetching, isLoading, isError } = useFetchDrinkQuery(
    queryString,
    {
      onError: (err) => {
        // here should send the error to sentry
      },
      onSuccess: (data) => {},
    }
  );

  return (
    <div>
      <Menu attached="top">
        <Dropdown item text={query.searchAlphabet} scrolling>
          <Dropdown.Menu className="drop-down-menu">
            {alphabets.map((alphabet, index) => (
              <Dropdown.Item
                onClick={() => {
                  setQuery((prevState) => ({
                    ...prevState,
                    searchAlphabet: alphabet,
                    searchBy: "f",
                  }));
                }}
                key={index}
              >
                {alphabet}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <ToggleListAndChart />

        <Menu.Menu position="right">
          <div className="ui right aligned category search item">
            <div className="input-section">
              <div className="ui category search">
                <div className="ui transparent icon input">
                  <input
                    className="prompt"
                    type="text"
                    onChange={(event) => {
                      if (isFetching) return;
                      const { value } = event.target;
                      setQuery((prevState) => ({
                        ...prevState,
                        searchInput: value,
                        searchBy: value.length < 3 ? "f" : "s",
                      }));
                    }}
                    placeholder="Search drink..."
                  />
                  <i className="search link icon"></i>
                </div>
                <div className="results"></div>
              </div>
              {!searchWithAlphabet && query.searchInput.length > 2 && data && (
                <div className="search-pop-up">
                  {data.drinks ? (
                    data.drinks.map(({ strDrink, idDrink }) => (
                      <NavLink to={`/${strDrink}`} key={idDrink}>
                        {strDrink}
                      </NavLink>
                    ))
                  ) : (
                    <div className="no-found-text">Not drink is found</div>
                  )}
                </div>
              )}
              {query.searchInput.length > 0 && query.searchInput.length < 3 && (
                <div className="ui pointing red basic label error-text">
                  Must be 3 characters or more
                </div>
              )}
            </div>
          </div>
        </Menu.Menu>
      </Menu>

      <Segment attached="bottom" className="drink-render-section">
        <Grid relaxed columns={4} stackable>
          {!data || isLoading ? (
            <SkeletonSection />
          ) : isError ? (
            <div className="fetch-data-error-text">Something went wrong</div>
          ) : !data?.drinks ? (
            <div className="no-found-text">Not drink is found</div>
          ) : (
            data?.drinks.map((drink) => {
              const {
                idDrink,
                strDrinkThumb,
                strDrink,
                strAlcoholic,
                strInstructions,
              } = drink;

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
                    <Card>
                      <Image src={strDrinkThumb} wrapped ui={false} />
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
            })
          )}
        </Grid>
      </Segment>
    </div>
  );
};
