import React from 'react'
import PostAuthor from './PostAuthor';
import ReactionButton from './ReactionButton';
import TimeAgo from './TimeAgo';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux"
import {selectPostById} from "../Post/postSlice"


let PostExcerpt = ({postId}) => {
  const post =useSelector(state=>selectPostById(state,postId));
    
    
  return (
    <article  style={{padding:"0px 0px 0 10px"}}>
      <h3>{post.title?.length>30?post.title.substring(0,30):post.title}</h3>
      <p className='except'>{post.body?.length>50?post.body.substring(0,60):post.body}</p>
      <p>
        <Link className='d-block mb-2 text-decoration-none' to={`post/${post.id}`}>veiw more</Link>
         by : <PostAuthor userId={post.userId}/>
         <TimeAgo timeStamp={post.date}/>
      <ReactionButton post={post}/>
      </p>
    </article>  
  )
}
PostExcerpt=React.memo(PostExcerpt)

export default PostExcerpt