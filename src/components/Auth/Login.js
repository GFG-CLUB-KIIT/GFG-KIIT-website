import "./Login.css";
import React, { useState, useEffect } from "react";
import Logo from "../../img/logo.png";
import { authenticate, isAuth, login } from "../../actions/auth";
import { useHistory } from "react-router-dom";


function Login({ setIsLogin }) {
  let history = useHistory();


  const [loading, setLoading] = useState(0);
  // Form Values
  const [inputVals, setInputVals] = useState({
    email: "",
    password: "",
  });


  // Form Input Handler
  const inputHandler = (e) => {
    setInputVals({
      ...inputVals,
      [e.target.name]: e.target.value,
    });
  };

  // Form Submit
  const submit = async (e) => {
    setLoading(1);
    e.preventDefault();

    const { email, password } = inputVals;
    setInputVals({
      email: "",
      password: "",
      loading: "true",
      error: "",
      message: "",
    });

    const user = { email, password };

    // try {
    //   const response = await login(user);
    //   if (response) {
    //     console.log(response);
    //     return;
    //   }
    // } catch (error) {
    //   console.log(error);
    //   return;
    // }

    login(user).then((data) => {
      console.log("hello");
      console.log(data);

      // return;
      if (data.error) {
        setLoading(0);

        setInputVals({
          ...inputVals,
          loading: "",
        });
      } else {
        authenticate(data, () => {
          if (isAuth()) {
            console.log(data);
            setLoading(0);
            history.push("/dashboard");

            // route.push("/");
          } else {
            setLoading(0);


            
          }
        });
      }
    });
  };

  return (
    <div className="w-screen h-screen fixed top-0   bg-opacity-70 flex justify-center items-center z-30 ">
      <div className="first-box   ">
        {/* Exit Logo */}
        <div
          className="exitLogo absolute cursor-pointer z-30 "
          onClick={() => {
            window.scroll(10000, 10000);
            setIsLogin(0);
          }}
        >
          <box-icon
            name="exit"
            color="#5BBB60"
            size="md"
            className="  "
          ></box-icon>
        </div>

        {/* Logo + Title */}
        <div className="logo flex  justify-center items-center  text-2xl mt-3 absolute w-full ">
          <img src={Logo} width="76px" className="mr-2" />
          GEEKS FOR GEEKS | KIIT
        </div>

        {/* Form  */}
        <form
          className="flex flex-col  justify-center items-center h-full  "
          onSubmit={submit}
        >
          <div className="flex flex-col w-60 mt-3">
            <label className=" font- font-medium ">Email</label>
            <input
              type="email"
              className="p-2 text-black  rounded-sm"
              placeholder="Email"
              name="email"
              value={inputVals.email}
              onChange={inputHandler}
              required
            />
          </div>
          <div className="flex flex-col w-60 mt-3">
            <label className=" font- font-medium ">Password</label>
            <input
              type="password"
              className="p-2 rounded-sm"
              placeholder="Password"
              name="password"
              value={inputVals.password}
              onChange={inputHandler}
              required
            />
          </div>

          {/* Login Button */}
          <button className=" loginBtn w-60 mt-5 p-2  text-lg text-white rounded-sm ">
            {loading ? "Logging in...." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
