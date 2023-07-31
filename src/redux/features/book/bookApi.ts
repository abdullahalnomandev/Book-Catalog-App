import { api } from "@/redux/api/apiSlice";

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBook: builder.query({
      query: () => `books`,
    }),

    singleBook: builder.query({
      query: (id) => `/product/${id}`,
    }),
    

    postBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/book/${id}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['books'],
    }),
    
    getComments: builder.query({
      query: (id) => `/comment/${id}`,
      providesTags: ['books'],
    }),
  }),
});

export const {
  useGetBookQuery
} = productApi;

