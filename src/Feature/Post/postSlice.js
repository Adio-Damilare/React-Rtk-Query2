import { nanoid,createSelector,createEntityAdapter} from "@reduxjs/toolkit";
import { sub } from "date-fns";
import { apiSlice } from "../api/apiSlice";

const postAdapter=createEntityAdapter({
    sortComparer:(a,b)=>b.date.localeCompare(a.date)
})
const initialState =postAdapter.getInitialState()

 export const extendedPostslice=apiSlice.injectEndpoints({
    endpoints:builder=>({
        getPost:builder.query({
            query:()=>"/posts",
            transformResponse:responseData=>{
                let min=1;
                const loadPost=responseData.map(post=>{
                    if(!post?.date){
                        post.date=sub(new Date(),{minutes:min++}).toISOString();
                    }
                    if(!post?.reactions){
                        post.reactions={
                            thumbUp:0,
                            wow:0,
                            heart:0,
                            rocket:0,
                            coffee:0
                        }
                    }
                    return post
                })
                return postAdapter.setAll(initialState,loadPost)
            },
            providesTags:(result,error,arg)=>[
                {type:"Post",id:"LIST"} 
                ,...result.ids.map(id=>({type:"Post",id}))
            ]
        }),
        getPostsByUserId:builder.query({
            query:id=>`/posts/?userId=${id}`,
            transformResponse:responseData=>{
                let min=1;
                const loadPost=responseData.map(post=>{
                    if(!post?.date){
                        post.date=sub(new Date(),{minutes:min++}).toISOString();
                    }
                    if(!post?.reactions){
                        post.reactions={
                            thumbUp:0,
                            wow:0,
                            heart:0,
                            rocket:0,
                            coffee:0
                        }
                    }
                    return post
                })
                return postAdapter.setAll(initialState,loadPost)
            },
            providesTags:(result,error,arg)=>{
                return [
                {type:"Post",id:"LIST"} 
                ,...result.ids.map(id=>({type:"Post",id}))]
            }


        }),
        AddNewPost:builder.mutation({
            query:initialPost=>({
                url:`/posts`,
                method:"POST",
                body:{
                    ...initialPost,userId:Number(initialPost.userId),date:new Date().toISOString(),reactions:{
                        thumbUp:0,
                        wow:0,
                        heart:0,
                        rocket:0,
                        coffee:0
                    }
                }


            }),
            invalidatesTags:[{type:"Post",id:"LIST"}]
        }),
        updatePost:builder.mutation({
            query:initialPost=>({
                url:`/posts/${initialPost.id}`,
                method:"PUT",
                body:{
                    ...initialPost,date: new Date().toISOString()
                }
            }),
            invalidatesTags:(result,error,arg)=>[{type:"Post",id:arg.id}]
        }),
        deletePost:builder.mutation({
            query:({id})=>({
                url:`/posts/${id}`,
                method:"DELETE",
                body:{id}
            }),
            invalidatesTags:(result,error,arg)=>[{type:"Post",id:arg.id}]
        }),
        addReaction:builder.mutation({
            query:({postId,reactions})=>({
                url:`/posts/${postId}`,
                method:"PUT",
                body:{reactions}
                
            }),
            async onQueryStarted({postId,reactions},{dispatch,queryFulfilled}){
                const patchResult=dispatch(extendedPostslice.util.updateQueryData("getPost",undefined,draft=>{
                    const post =draft.entities[postId];
                    if(post){
                        post.reactions=reactions
                    }
                }))
                try{
                    await queryFulfilled
                }catch{
                    patchResult.undo()
                }

            }
        })
    })
 })

 export const {
    useGetPostQuery
    ,useGetPostsByUserIdQuery,
    useAddNewPostMutation,
    useDeletePostMutation,
    useUpdatePostMutation,
    useAddReactionMutation


} =extendedPostslice;
 export const selectPostsResult=extendedPostslice.endpoints.getPost.select();
const selectPostsData=createSelector(
    selectPostsResult, postsResult=>postsResult.data
)
export const {selectAll:selectAllPosts,selectById:selectPostById,selectIds:selectPostIds}=postAdapter.getSelectors(state=>selectPostsData(state) ?? initialState )
// export const selectAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;
export const getPostsCount= (state) => state.posts.count;
// export const selectPostById = (state, postId) => state.posts.posts.find(post=>post.id===postId);
// export const selectPostByUserId=createSelector([selectAllPosts,(state,userId)=>userId],(posts,userId)=>posts.filter(post=>post.userId===userId))
// export const selectPostByUserId=(state,userId)=>state.posts.posts.filter(post=>post.userId===userId)

