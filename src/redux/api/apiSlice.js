import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LOCAL_API_URL } from '../../constants';
import { API_URL } from '../../constants/Environments';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: LOCAL_API_URL || API_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('authorization', `${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => {
    return {
      login: builder.mutation({
        query: ({ email, password }) => ({
          url: "/users/login",
          method: "POST",
          body: { email, password },
        }),
      }),
      createCupboard: builder.mutation({
        query: ({ name, organizationId }) => ({
          url: `/cupboards?organizationId=${organizationId}`,
          method: "POST",
          body: { name },
        }),
      }),
      listCupboards: builder.query({
        query: ({ organizationId }) => ({
          url: `/cupboards?organizationId=${organizationId}`,
          method: "GET",
        }),
      }),
      listRayons: builder.query({
        query: ({ cupboardId }) => ({
          url: `/rayons?cupboardId=${cupboardId}`,
          method: "GET",
        }),
      }),
      listBards: builder.query({
        query: ({ rayonId }) => ({
          url: `/bards?rayonId=${rayonId}`,
          method: "GET",
        }),
      }),
      createRayon: builder.mutation({
        query: ({ name, cupboardId }) => ({
          url: `/rayons?cupboardId=${cupboardId}`,
          method: "POST",
          body: { name },
        }),
      }),
      createBard: builder.mutation({
        query: ({ name, rayonId }) => ({
          url: `/bards?rayonId=${rayonId}`,
          method: "POST",
          body: { name },
        }),
      }),
      createCompanyContact: builder.mutation({
        query: ({ name, mail, phoneNumber, address, company }) => ({
          url: `/companyContacts`,
          method: "POST",
          body: {
            name,
            mail,
            phoneNumber,
            address,
            company,
          },
        }),
      }),
      getCompanyContact: builder.query({
        query: () => ({
          url: `/companyContacts`,
          method: "GET",
        }),
      }),
      createStaffMember: builder.mutation({
        query: ({ name, email, phone, address }) => ({
          url: `/staffMembers`,
          method: "POST",
          body: {
            name,
            email,
            phone,
            address,
          },
        }),
      }),
      getStaffMember: builder.query({
        query: () => ({
          url: `/staffMembers`,
          method: "GET",
        }),
      }),
      getSingleStaffMember: builder.query({
        query: ({ id }) => ({
          url: `/staffMembers/${id}`,
          method: "GET",
        }),
      }),
      createTimeTable: builder.mutation({
        query: ({ day, fromTime, toTime, staffId }) => ({
          url: `/timeTables/${staffId}`,
          method: "POST",
          body: {
            day,
            fromTime,
            toTime,
          },
        }),
      }),
      getstaffSchedule: builder.query({
        query: () => ({
          url: `/staffMembers/timetable/all`,
          method: "GET",
        }),
      }),
      createNote: builder.mutation({
        query: ({ title, description }) => ({
          url: `/notes`,
          method: "POST",
          body: {
            title,
            description,
          },
        }),
      }),
      getNotes: builder.query({
        query: () => ({
          url: `/notes`,
          method: "GET",
        }),
      }),
      getSingleNote: builder.query({
        query: ({ id }) => ({
          url: `/notes/${id}`,
          method: "GET",
        }),
      }),
    };
  },
});

export const {
  useLoginMutation,
  useCreateCupboardMutation,
  useLazyListCupboardsQuery,
  useLazyListRayonsQuery,
  useLazyListBardsQuery,
  useCreateRayonMutation,
  useCreateBardMutation,
  useCreateCompanyContactMutation,
  useLazyGetCompanyContactQuery,
  useCreateStaffMemberMutation,
  useLazyGetStaffMemberQuery,
  useLazyGetSingleStaffMemberQuery,
  useCreateTimeTableMutation,
  useLazyGetstaffScheduleQuery,
  useCreateNoteMutation,
  useLazyGetNotesQuery,
  useLazyGetSingleNoteQuery,
} = apiSlice;
