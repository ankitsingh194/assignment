import { createApi , fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { GetUserResponse } from "./types";


export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    reducerPath: "main",
    tagTypes:["kpis" ],
    endpoints: (build) => ({
        getKpis: build.query<Array <GetUserResponse>, void>({
            query:() => "/users",
            providesTags: ["kpis"]
        })
      
    })
})

console.log("data",api)

export const {useGetKpisQuery} = api;