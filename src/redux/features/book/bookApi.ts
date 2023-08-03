/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "@/redux/api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getLatestBook: builder.query({
      query: () => `/books?page=1&limit=10`,
      providesTags: ["books"]
    }),

    getBooks: builder.query({
      query: (searchAndFilterTerms) => `books?${searchAndFilterTerms}`,
      providesTags: ["books"]
    }),

    singleBook: builder.query({
      query: (id: string) => `/product/${id}`
    }),

    postBook: builder.mutation({
      query: ({ data }) => ({
        url: `/books`,
        method: "POST",
        body: data
      }),
      invalidatesTags: ["books"]
    }),

    getComments: builder.query({
      query: (id: string) => `/comment/${id}`,
      providesTags: ["books"]
    })
  })
});

export const {
  useGetBooksQuery,
  useGetLatestBookQuery,
  usePostBookMutation
} = bookApi;

