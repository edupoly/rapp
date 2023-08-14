import React,{useEffect, useState} from 'react'
import { useAddCommentMutation, useDeleteCommentMutation, useGetAllCommentsQuery,useLazyGetAllCommentsQuery } from '../../services/commentsApi'
import AddCmt from './AddCmt';
import EditCmt from './EditCmt';
function Comment() {
    var {isLoading,isError,data} = useGetAllCommentsQuery();
    useEffect(()=>{setEditflag(false)},[data])
    var [getComments] = useLazyGetAllCommentsQuery();
    console.log(data)
    var [delCmtFn] = useDeleteCommentMutation();
    const [editflag, setEditflag] = useState(false)
    const [selectedComment, setSelectedComment] = useState({})
    
    function delCmt(id){
        delCmtFn(id).then(function(res){
            if(res.error && res.error.status==='FETCH_ERROR'){
                alert("Some thing went wrong")
            }
            else{
                alert("comment deleted")
                getComments();
            }
        })
    }
    function editCmt(comment){
        setSelectedComment({...comment})
        setEditflag(true)
    }
  return (
    <div className='mybox'>
        <h1>Comment</h1>
        {
            !editflag && (<AddCmt></AddCmt>)
        }
        {
            editflag && (<EditCmt selectedComment={selectedComment}></EditCmt>)
        }

        {
            isLoading && <b>Loading...</b>
        }
        {
            !isLoading &&!isError && data.map((c)=>{
                return <li>
                    {c.title}
                    <button onClick={()=>{editCmt(c)}}>edit</button>
                    <button onClick={()=>{delCmt(c.id)}}>delete</button>
                    </li>
            })
        }
    </div>
  )
}

export default Comment