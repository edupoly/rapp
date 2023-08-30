import React from 'react'
import { Formik,Field,Form} from 'formik';
import { useLazyGetUserLoginQuery } from '../../services/usersApi';
import { useSelector,useDispatch } from 'react-redux';
import { updateUser } from './userSlice';
import { useNavigate } from 'react-router-dom';
function Login() {
    var [login]=useLazyGetUserLoginQuery()
    var user = useSelector(state=>state.user);
    console.log(user)
    var dispatch = useDispatch();
    var navigate = useNavigate();
  return (
    <div>
        <h1>Login</h1>
        <Formik
            initialValues={{phonenumber: '',password:'' }}
            onSubmit={(values, {resetForm}) => {
              login(values).then(res=>{
                console.log(res);
                dispatch(updateUser({...res.data[0]}))
                if(res.data[0]){
                  navigate("/customerList")
                }
              })
            }}
            >
            {({ isSubmitting }) => (
                <Form>
                    
                    <Field type="number" name="phonenumber" placeholder="phonenumber"/>
                    <br></br>
                    <Field type="password" name="password" placeholder="password"/>
                    <br></br>
                    <button type="submit" disabled={isSubmitting} >
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    </div>
  )
}

export default Login