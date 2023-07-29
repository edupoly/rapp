import React from 'react';
import {Formik,Field, useFormik, ErrorMessage} from 'formik'
import * as Yup from 'yup';
function App() {
  
  return (
    <div style={{border:'2px solid blue',padding:"10px",margin:"10px"}}>
     <h1>Formik Practical Class</h1>
     <div style={{border:'2px solid green',padding:"10px",margin:"10px"}}>
      <Formik initialValues={{
                firstname:'',
                email:''
              }}
              validationSchema={ Yup.object({
                firstname: Yup.string().required("koncham chusukooo"),
                email: Yup.string().email().required("sarigga enter cheyy..")
              })}
              onSubmit={(x)=>{
                console.log("HI")
                console.log(x)
              }}
      >
        {
          (myform)=>{
            return (
              <form onSubmit={myform.handleSubmit}>
                <Field name="firstname"></Field>
                <ErrorMessage name="firstname" component="div"></ErrorMessage>
                <Field type="email" name="email"></Field>
                <ErrorMessage name="email" component="b"></ErrorMessage>
                <br />
                <button type="submit">Save</button>
              </form>
            )
          }
        }
      </Formik>

      



     </div>
    </div>
  );
}

export default App;
