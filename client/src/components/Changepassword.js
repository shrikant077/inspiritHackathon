import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import './Auth.css'

const Changepassword = () => {

  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post(
        "http://localhost:5050",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      return status
        ? console.log(user)
        : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  // const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    currpassword: "",
    newpassword: "",
    confirmpassword: "",
  });
  const { email, currpassword, newpassword, confirmpassword } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.patch(
        "http://localhost:5050/changepassword",
        {
          ...inputValue,
        }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/events");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      currpassword: "",
      newpassword: "",
      confirmpassword: "",
    });
  };

  return (
    <div className="authcontainer">
      <div className="form_container">
        <h2>Change Password</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label htmlFor="currpassword">Current Password</label>
            <input
              type="password"
              name="currpassword"
              value={currpassword}
              placeholder="Enter your current password"
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label htmlFor="newpassword">New Password</label>
            <input
              type="password"
              name="newpassword"
              value={newpassword}
              placeholder="Enter your new password"
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label htmlFor="confirmpassword">Confirm New Password</label>
            <input
              type="password"
              name="confirmpassword"
              value={confirmpassword}
              placeholder="Re-enter your new password"
              onChange={handleOnChange}
            />
          </div>
          <button type="submit">Submit</button>
          
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Changepassword;