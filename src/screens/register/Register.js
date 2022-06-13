import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, } from 'react-router-dom';
import { login } from '../../redux/actions/auth.action';

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

  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.auth.accessToken);

  const handleLogin = () => {
    dispatch(login());
  };

  useEffect(() => {
    if (accessToken) {
      history.push("/");
    }
  }, [accessToken, history]);

  return (
    <div className="container">
      <div className="login">
        <div className="login__container">
          <h2>Youtube Clone</h2>
          <img
            src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
            alt=""
          />
           <button onClick={handleLogin}>Login With google</button>
        
    </div>
    </div>
    </div>
  );
}

export default Register;
