import React, { useState, useEffect } from "react";
import styles from "./Login.module.css";

// router
import { useHistory } from "react-router-dom";

// axios
import axios from "../../Axios/Axios";

// material-ui
import { TextField, InputLabel } from "@material-ui/core";

// redux
import { showAlert } from "../../Redux/App/actions";
import { useDispatch, useSelector } from "react-redux";
import { Authenticate, isAuthenticated } from "../../Helpers/authHelper";

const Login = () => {
  const [FormData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [Loading, setLoading] = useState(false);
  const [FormError, setFormError] = useState({
    email: false,
    password: false,
  });
  const [didRedirect, setRedirect] = useState(false);

  //? useHistory
  let history = useHistory();

  //? destructuring
  const { email, password } = FormData;

  //? Dispatch
  let dispatch = useDispatch();

  //? changeHandler
  const changeHandler = (name) => (e) => {
    let value = e.target.value;
    setFormData({ ...FormData, [name]: value });
  };

  //? validations
  const validate = () => {
    let value = true;

    let err = { email: false, password: false };
    setFormError({ ...err });

    if (email === "") {
      value = false;
      err.email = "Enter Email First!";
    }

    if (password === "") {
      value = false;
      err.password = "Enter Password First!";
    }

    setFormError({ ...err });
    return value;
  };

  //? loginHandler
  const loginHandler = async (e) => {
    e.preventDefault();

    if (validate()) {
      setLoading(true);

      axios({ method: "POST", url: "/api/v1/admin/login", data: FormData })
        .then((response) => {
          console.log("RESPONSE", response);
          console.log("res.data", response.data);
          Authenticate(response.data.data);
          dispatch(showAlert(response.data.message));
          setLoading(false);
          setRedirect(true);
        })
        .catch((err) => {
          console.log("ERROR", err.response.data);

          setLoading(false);
          dispatch(showAlert(err.response.data));
        });
    }
  };

  //? redirectHandler
  const redirectHandler = () => {
    if (isAuthenticated()) {
      if (didRedirect) {
        return history.push("/dashboard");
      }
    }
  };

  console.log("FormData", FormData);
  // component return
  return (
    <>
      <div className={styles.container}>
        {redirectHandler()}
        <div className={styles.left}>
          <div className={styles.img_wrapper}>
            <img
              src="https://i.pinimg.com/750x/07/7c/a8/077ca88c5e28d9a5dabbb377667016d1.jpg"
              alt="Login-Image"
            />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.form_wrapper}>
            <form onSubmit={loginHandler} className={styles.form}>
              <div className={styles.greeting_wrapper}>
                <p className={styles.greeting}>Welcome Back!</p>
                <p className={styles.general_msg}>Login to continue</p>
              </div>
              <InputLabel className={styles.label}>Email</InputLabel>
              <TextField
                onChange={changeHandler("email")}
                defaultValue={email}
                id="outlined-basic"
                variant="outlined"
                error={FormError.email}
                helperText={FormError.email}
              />
              <br />
              <InputLabel className={styles.label}>Password</InputLabel>
              <TextField
                onChange={changeHandler("password")}
                defaultValue={password}
                id="outlined-basic"
                variant="outlined"
                error={FormError.password}
                helperText={FormError.password}
              />
              <br />
              <br />
              <button className={styles.login_btn}>
                {Loading ? "Loading..." : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
