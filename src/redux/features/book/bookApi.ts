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
      query: (id: string) => `/books/${id}`,
      providesTags: ["books"]
    }),

    postBook: builder.mutation({
      query: ({ data }) => ({
        url: `/books`,
        method: "POST",
        body: data
      }),
      invalidatesTags: ["books"]
    }),

    updateBook: builder.mutation({
      query: ({ id, bookData }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: bookData
      }),
      invalidatesTags: ["books"]
    }),

    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["books"]
    }),

    postReview: builder.mutation({
      query: ({ reviewId, data }) => ({
        url: `/books/add-review/${reviewId}`,
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
  usePostBookMutation,
  useSingleBookQuery,
  usePostReviewMutation,
  useDeleteBookMutation,
  useUpdateBookMutation
} = bookApi;

