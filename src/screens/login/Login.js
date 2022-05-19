import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../redux/actions/auth.action";

function Login() {
  let history = useHistory();
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        let loginData = await axios.post("https://utube-clone-application.herokuapp.com/login", values);
        window.localStorage.setItem("myapptoken", loginData.data.token);
        history.push("/");
      } catch (error) {
        console.log(error);
        alert("Something went wrong");
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
          <div style={{height:"300px" ,width:"300px",}}>
            <form onSubmit={formik.handleSubmit}>
              <div className="row">
                <div className="col-lg-12">
                  <label>Email</label>
                  <input
                    type={"email"}
                    className="form-control"
                    name="email"
                    id="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </div>
                <div className="col-lg-12">
                  <label>Password</label>
                  <input
                    type={"password"}
                    className="form-control"
                    name="password"
                    id="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                </div>
                <div className="col-lg-12 mt-2">
                  <input
                    type={"submit"}
                    className="btn btn-primary"
                    value={"Login"}
                  />
                  <input
                    type={"submit"}
                    className="btn btn-primary  ms-2"
                    value={"Register"}
                    onClick={() => history.push("/register")}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
