import React from 'react'
import { Formik, Form, Field } from 'formik';
import { useAddCustomerMutation } from '../../services/customersApi';

function AddCustomer() {
    var [addCustomer] = useAddCustomerMutation()
  return (
    <div>
        <h4>AddCustomer</h4>
        <Formik
            initialValues={{ fullname:'',email: '', phonenumber: '',remarks:'' }}
            onSubmit={(values, {resetForm}) => {
               addCustomer(values)
               .then(()=>{
                console.log(values)
                resetForm(null)
               })
               .catch((err)=>{console.log(err)})
               .finally(()=>{
                console.log("finally")
               })
            }}
            >
            {({ isSubmitting }) => (
                <Form>
                    <Field name="fullname" placeholder="fullname"/>
                    <br></br>
                    <Field type="email" name="email" placeholder="email"/>
                    <br></br>
                    <Field type="number" name="phonenumber" placeholder="phonenumber"/>
                    <br></br>
                    <Field component="textarea" name="remarks" placeholder="remarks"/>
                    <br></br>
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    </div>
  )
}

export default AddCustomer