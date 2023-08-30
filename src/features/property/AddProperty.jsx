import React from 'react'
import { Formik, Form, Field } from 'formik';
import { useAddPropertyMutation } from '../../services/propertiesApi';
import Button from '@mui/material/Button';
import { Container, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
function AddProperty() {
    var [addProperty]=useAddPropertyMutation()
  return (
    <div>
        <h4>Add Property</h4>
        <Formik
            initialValues={{ name:'',pic: '', price: '',remarks:'',type:'' }}
            onSubmit={(values, {resetForm}) => {
              console.log(values)
              // addProperty(values).then(()=>{alert("Property added success")})
            }}
            >
            {({ isSubmitting }) => (
             
                  <Form>
                  <Grid container columns={{ lg:2,xs: 4, sm: 8, md: 12 }}>

                      <Grid lg={12}>
                        <Field name="name" as={TextField} fullWidth variant="outlined" label="Property Name"/>
                      </Grid>
                      <Grid lg={12}>
                        <Field name="pic" label="Paste image url" as={TextField} variant="outlined" />
                      </Grid>
                      <Grid lg={3}>
                        <Field type="number" name="price" label="Enter Price" as={TextField} variant="outlined" />
                      </Grid>
                      <Grid lg={3}>
                        <Field name="remarks" label="remarks" as={TextField} variant="outlined" />
                      </Grid>
                      <Grid lg={3}>
                        <Field name="type" as={TextField} label="Type of Property" variant="outlined"></Field>
                      </Grid>

                      <Grid lg={3}>
                      <Button variant="contained" type="submit">Save</Button>
                      </Grid>
                </Grid>

                  </Form>
               
            )}
        </Formik>
    </div>
  )
}

export default AddProperty
// 1. dev
// 2. testing
// 3. production