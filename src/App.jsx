import React from 'react';
import {useFormik} from 'formik'
import * as Yup from 'yup';
function App() {
  var myform = useFormik({
    initialValues:{
      firstname:'',
      email:''
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("koncham chusukooo"),
      email: Yup.string().email().required("sarigga enter cheyy..")
    }),
    onSubmit:(x)=>{
      console.log("HI")
      console.log(x)
    }
  })
  return (
    <div style={{border:'2px solid blue',padding:"10px",margin:"10px"}}>
     <h1>Formik Practical Class</h1>
     <div style={{border:'2px solid green',padding:"10px",margin:"10px"}}>
      <form onSubmit={myform.handleSubmit}>
        <input type="text" {...myform.getFieldProps("firstname")}/>
        <i>{myform.touched.firstname && myform.errors.firstname}</i>
        <br />
        <input type="email" {...myform.getFieldProps("email")}/>
        <i>{myform.touched.email && myform.errors.email}</i>

        <br />
        <button type="submit">Save</button>
      </form>
     </div>
    </div>
  );
}

export default App;
