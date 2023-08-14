import React,{useEffect, useState} from 'react'
import { useUpdateCommentMutation, useDeleteCommentMutation, useGetAllCommentsQuery,useLazyGetAllCommentsQuery } from '../../services/commentsApi'
function EditCmt(props) {
    console.log(props)

    const [comment, setComment] = useState({})
    useEffect(()=>{
        setComment({...props.selectedComment})
    },[props.selectedComment])
    var [updateCmtFn] = useUpdateCommentMutation();
    var [getComments] = useLazyGetAllCommentsQuery();

    function updateComment(){
        updateCmtFn(comment).then((res)=>{
            console.log("res",res)
            if(res.error && res.error.status==='FETCH_ERROR'){
                alert("Some thing went wrong")
            }
            else{
                alert("update success")
                getComments();
            }
        })
        
    }
    return (
        <div className='mybox'>
            <h3>Edit Cmt</h3>
            <input type="text" value={comment.title} onChange={(e)=>{setComment({...comment,title:e.target.value})}} placeholder='title'/>
            <input type="text" value={comment.content} onChange={(e)=>{setComment({...comment,content:e.target.value})}} placeholder='content'/>
            <button onClick={updateComment}>Update Comment</button>
        </div>
    )
}

export default EditCmt