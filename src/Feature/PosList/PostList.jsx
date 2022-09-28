import React,{useEffect} from 'react'
import { useSelector } from "react-redux";
import { selectPostIds } from '../Post/postSlice';
import PostExcerpt from './PostExcerpt';
import "./postlist.css"
import { useGetPostQuery } from '../Post/postSlice';

const PostList = () => {
  const {isLoading,isSuccess,isError,error}=useGetPostQuery();
  const  OrderPosts= useSelector( selectPostIds);
  console.log(OrderPosts)
 let content;
 if(isLoading){
  content=<p>"loading"</p>
 }else if(isError){
  content=<p>{error}</p>
 }else if(isSuccess){
  if(OrderPosts.length>0){

    content = OrderPosts.map(postId =><PostExcerpt key={postId} postId={postId}/>)
  }
 }
  return (
    <section className='section'>
      <h2>Posts</h2>
      {content}
    </section>
  )
}

export default PostList