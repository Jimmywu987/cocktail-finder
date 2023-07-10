import { useMemo } from "react";
import { Dropdown } from "semantic-ui-react";
import { getAllAlphabets } from "utils/getAllAlphabets";

import { QueryProps, QueryStateType } from "types";
import { SearchByQueryOptionEnums } from "enums/SearchByQueryOptionEnums";

export const AlphabetDropdownMenu = ({
  queryState,
}: QueryStateType<QueryProps>) => {
  const alphabets = useMemo(() => getAllAlphabets(), []);
  const [query, setQuery] = queryState;
  return (
    <Dropdown item text={query.searchAlphabet} scrolling>
      <Dropdown.Menu className="drop-down-menu">
        {alphabets.map((alphabet, index) => (
          <Dropdown.Item
            onClick={() => {
              setQuery((prevState: QueryProps) => ({
                ...prevState,
                searchAlphabet: alphabet,
                searchBy: SearchByQueryOptionEnums.ALPHABET,
              }));
            }}
            key={index}
          >
            {alphabet}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};
