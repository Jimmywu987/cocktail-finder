import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

import { FetchDrinkResultProps } from "pages/Home";
import { QueryProps, QueryStateType } from "types";
import { SearchByQueryOptionEnums } from "enums/SearchByQueryOptionEnums";

type SearchInputProps = {
  fetchDrinkResult: FetchDrinkResultProps;
} & QueryStateType<QueryProps>;

export const SearchInput = ({
  fetchDrinkResult,
  queryState,
}: SearchInputProps) => {
  const { isFetching, data } = fetchDrinkResult;
  const [query, setQuery] = queryState;
  const searchWithAlphabet =
    query.searchBy === SearchByQueryOptionEnums.ALPHABET;
  return (
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
                  setQuery((prevState: QueryProps) => ({
                    ...prevState,
                    searchInput: value,
                    searchBy:
                      value.length < 3
                        ? SearchByQueryOptionEnums.ALPHABET
                        : SearchByQueryOptionEnums.NAME,
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
  );
};
