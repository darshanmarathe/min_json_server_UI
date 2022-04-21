import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { getUserData } from './actions/actions';
import {authenticateUser} from './actions/actions'
const LoginPage = () => {
    const initState = useSelector((state) => state.setUser);
    const dispatch = useDispatch();
    let navigate = useNavigate();
    let [logError, setLogError] = useState("")
    const formik = useFormik({
        initialValues:{
            url: "",
            userName: "",
            password: ""
        },
        validate: (values) =>{
            let errors = {};
            if(!values.userName){
                errors.userName = 'Please Enter Username';
            }
            if(!values.password){
                errors.password = 'Please Enter Password';
            }
            return errors;
        },
        onSubmit: (values) =>{
            console.log(values);
            dispatch(getUserData(values.userName, values.password))
            console.log(initState)
            console.log(values)
            if(initState.userName === values.userName && initState.password === values.password ){
                dispatch(authenticateUser(true));
                navigate('/admin');
            }
            else{
                setLogError("Wrong Credentials")
            }
        }
    })

  return(
      <>
          <div className='loginMain'>
              <div className='loginForm'>
              <form onSubmit ={formik.handleSubmit}>



              <div className='field'>
              <label htmlFor = "url">URL</label>
              <input type = "url" 
                  value = {formik.values.url}
                  name = "url"
                  id = "url"
                  onChange = {formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder='url'
                  />
        
                  </div>

              <div className='field'>
              <label htmlFor = "username">username</label>
                  <input type= "text" 
                  value = {formik.values.userName}
                  name = "userName"
                  id= "username"
                  onChange = {formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder='username'
                  />
                   <div className='errors'>
                      {formik.touched.userName && formik.errors.userName ? <p>{formik.errors.userName}</p> : null}
                  </div>
                  </div>
                  <div className='field'>
                  <label htmlFor='password'>password</label>
                  <input type= "password" 
                  value = {formik.values.password}
                  name = "password"
                  id = "password"
                  onChange = {formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder='password'
                  />
        
                  <div className='errors'>
                      {formik.touched.password && formik.errors.password ? <p>{formik.errors.password}</p> : null}
                  </div>
                  </div>
                  
                
                  <button type='submit'>Login</button>
                  {/* </Link> */}
                  <strong style = {{color: "firebrick"}}>{logError}</strong>
                  </form>
              </div>
          </div>
      </>
  );
};

export default LoginPage;
