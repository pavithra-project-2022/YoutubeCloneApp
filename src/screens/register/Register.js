import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import { useHistory, } from 'react-router-dom';

function Register() {
  let history = useHistory();
  let formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      try {
        await axios.post('https://utube-clone-application.herokuapp.com/register', values);
        history.push('/');
      } catch (error) {
        console.log(error);
        alert('Something went wrong');
      }
    },
  });
  return (
    <div className="container">
        <div style={{height:"300px" ,width:"300px",marginLeft:"400px",marginTop:"200px" , border:"2px solid black" ,borderRadius:"5px"}}>
      <form className='d-flex align-item-center justify-content-center m-3' onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-12">
            <label>Name</label>
            <input
              type={'text'}
              name="name"
              id="name"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </div>
          <div className="col-lg-12">
            <label>Email</label>
            <input
              type={'email'}
              name="email"
              id="email"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          <div className="col-lg-12">
            <label>Password</label>
            <input
              type={'password'}
              name="password"
              id="password"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>
          <div className="col-lg-12 mt-3">
            <input type={'submit'} className="btn btn-primary" value="Submit" />
            <input
              type={'submit'}
              className="btn btn-primary ms-2"
              value={'SignIn'} onClick={()=>history.push('/auth')}
            />
          </div>
        </div>
      </form>
      </div>
    </div>
  );
}

export default Register;
