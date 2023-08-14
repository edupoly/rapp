import React,{useState} from 'react'
import { useAddCommentMutation, useDeleteCommentMutation, useGetAllCommentsQuery,useLazyGetAllCommentsQuery } from '../../services/commentsApi'

function AddCmt() {
    const [comment, setComment] = useState({title:'',content:''})
    var [addCmtFn] = useAddCommentMutation();
    var [getComments] = useLazyGetAllCommentsQuery();

    function addComment(){
        addCmtFn(comment).then((res)=>{
            console.log("res",res)
            if(res.error && res.error.status==='FETCH_ERROR'){
                alert("Some thing went wrong")
            }
            else{
                alert("added success")
                getComments();
            }
        })
        
    }
  return (
    <div className='mybox'>
        <h3>AddCmt</h3>
        <input type="text" onChange={(e)=>{setComment({...comment,title:e.target.value})}} placeholder='title'/>
        <input type="text" onChange={(e)=>{setComment({...comment,content:e.target.value})}} placeholder='content'/>
        <button onClick={addComment}>Add Comment</button>
    </div>
  )
}

export default AddCmt