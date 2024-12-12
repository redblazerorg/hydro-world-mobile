import {
  SpeciesDetailsSchema,
  SpeciesSchema,
} from "@/app/scheme/species_details";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const HydroAPIslice = createApi({
  reducerPath: "hydro",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.harizasyraf.com/api/fishs",
  }),
  endpoints: (builder) => {
    return {
      getCategory: builder.query({
        query: (keyword: string) => `/${keyword}`,
        transformResponse: (response: unknown) => {
          console.log("run only once please");

          const parsedResponse = SpeciesSchema.parse(response);
          return parsedResponse;
        },
      }),
    };
  },
});

export const { useGetCategoryQuery } = HydroAPIslice;
