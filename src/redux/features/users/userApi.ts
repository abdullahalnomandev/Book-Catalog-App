import { api } from "@/redux/api/apiSlice";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: ({ data }) => ({
        url: `/auth/login`,
        method: "POST",
        body: data
      })
    }),

    signUpUser: builder.mutation({
      query: ({ data }) => ({
        url: `/auth/signup`,
        method: "POST",
        body: data
      })
    })
  })
});

export const { useLoginUserMutation, useSignUpUserMutation } = userApi;
