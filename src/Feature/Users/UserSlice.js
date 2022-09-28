import { createSlice,createAsyncThunk,createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
const userAdapter=createEntityAdapter();
const initialState=userAdapter.getInitialState()



export const userSlice= apiSlice.injectEndpoints({
    endpoints:builder=>({
        getUsers:builder.query({
            query:()=>`/users`,
            transformResponse:response=>{
                return userAdapter.setAll(initialState,response)
            },
            providesTags:(result,error,arg)=>{
                console.log(result)
               return[{type:"Post",id:"LIST"}, ...result.ids.map(id=>({type:"Post",id}))]
            }
        }),
        addNewUser:builder.mutation({
            query:initialPost=>({
                url:`/users`,
                method:"POST",
                body:initialPost
            }),
            invalidatesTags:()=>[{type:"Post",id:"LIST"}]
        }),
        deleteUser:builder.mutation({
            query: (id )=>({
                url:`/users/${id}`,
                method:"DELETE",
                body:{id}
            }),
            invalidatesTags:(result,error,arg)=>[{type:"Post",id:arg.id}]

        })
    })
})
// console.log(initialState)

export const {useGetUsersQuery,useAddNewUserMutation,useDeleteUserMutation}=userSlice;
export const selectAllResult=userSlice.endpoints.getUsers.select();
const userData=createSelector(selectAllResult,result=>result.data);
export const {selectAll:selectAllUsers,selectById:selectUserById,selectIds:selectUserSByIds,selectTotal:totalUser}=userAdapter.getSelectors((state)=>userData(state) ?? initialState);