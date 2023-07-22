import React, { useContext } from 'react'
import MyContext from './MyContent'
function Third() {
    // var d = useContext(MyContext);
  return (
    <MyContext.Consumer>
        {
            (d)=>{
                return (
                    <div  style={{border:'3px solid green',padding:'10px',margin:'10px'}}>
                        <h1>third Comp:{d}</h1>
                    </div>
                )
            }
        }
        
    </MyContext.Consumer>
  )
}

export default Third