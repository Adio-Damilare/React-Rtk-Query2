import React from 'react'
import { useAddReactionMutation } from '../Post/postSlice'
const reactionEmoji={
    thumbUp:"👍",
    wow:"😲",
    heart:"💖",
    rocket:"🚀",
    coffee:"☕"
}

const ReactionButton = ({post}) => {
   const [addReaction] =useAddReactionMutation();
    const reactionButtons=Object.entries(reactionEmoji).map(([name,emoji])=>{    
   return (
  
    <button key={name} type="button" className='reactButton btn text-dark  mx-1 bg-light' onClick={()=>{
        const newValue=post.reactions[name]+1;
        addReaction({postId:post.id,reactions:{...post.reactions,[name]:newValue}})
    }}>
        {emoji} {post.reactions[name]}
    </button>
    )
}

  )
  return <div>{reactionButtons}</div>
}

export default ReactionButton