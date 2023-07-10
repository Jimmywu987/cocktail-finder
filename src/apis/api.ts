import { req } from "apis/https";
import { HttpMethodEnums } from "enums/HttpMethodEnums";
import { useQuery, UseQueryOptions } from "react-query";
import { DrinkProps } from "types";

const fetcher = async (url: string, params?: unknown) => {
  const res = await req(HttpMethodEnums.GET, url, params);
  if (res && res.data && res.status === 200) {
    return res.data;
  }

  throw Error(res?.data.errorMessage);
};

type UseReactQueryOption = Omit<
  UseQueryOptions<any, unknown, any>,
  "queryKey" | "queryFn"
>;

export const useFetchDrinkQuery = (
  variable: string,
  options?: UseReactQueryOption
) =>
  useQuery<{
    drinks: DrinkProps[];
  }>(
    ["drinks", variable],
    async () => {
      return await fetcher(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?${variable}`
      );
    },
    options
  );
