import { useFetchDrinkQuery } from "apis/api";

import { useMemo, useState } from "react";
import { Grid, Menu, Segment } from "semantic-ui-react";
import { getAllAlphabets } from "utils/getAllAlphabets";

import { AlphabetDropdownMenu } from "components/home/AlphabetDropdownMenu";
import { ChartModal } from "components/home/ChartModal";
import { GridContent } from "components/home/GridContent";
import { SearchInput } from "components/home/SearchInput";
import { QueryProps } from "types";
import { SearchByQueryOptionEnums } from "enums/SearchByQueryOptionEnums";

export type FetchDrinkResultProps = ReturnType<typeof useFetchDrinkQuery>;

export const Home = () => {
  const alphabets = useMemo(() => getAllAlphabets(), []);

  const queryState = useState<QueryProps>({
    searchAlphabet: alphabets[0],
    searchInput: "",
    searchBy: SearchByQueryOptionEnums.ALPHABET,
  });

  const [query] = queryState;

  const { searchBy, searchAlphabet, searchInput } = query;

  const searchWithAlphabet = searchBy === SearchByQueryOptionEnums.ALPHABET;

  const queryString = `${searchBy}=${
    searchWithAlphabet ? searchAlphabet : searchInput
  }`;

  const fetchDrinkResult = useFetchDrinkQuery(queryString, {
    onError: (err) => {
      // here should send the error to sentry
    },
  });
  const { data } = fetchDrinkResult;

  return (
    <div>
      <Menu attached="top">
        <AlphabetDropdownMenu queryState={queryState} />
        <ChartModal data={data} />
        <SearchInput
          queryState={queryState}
          fetchDrinkResult={fetchDrinkResult}
        />
      </Menu>

      <Segment attached="bottom" className="drink-render-section">
        <Grid relaxed columns={4} stackable>
          <GridContent fetchDrinkResult={fetchDrinkResult} />
        </Grid>
      </Segment>
    </div>
  );
};
