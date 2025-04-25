import React from "react";
// import { useEffect } from 'react'
import { useState } from "react";
// import axios from 'axios'
import { Link } from "react-router-dom";
// import Swal from 'sweetalert2'

// const baseUrl='http://127.0.0.1:8000/api'

const Login = () => {
  // const studentLoginStatus=localStorage.getItem('studentLoginStatus');

  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])

  // const [studentLoginData,setStudentLoginData]=useState({
  //     email:'',
  //     password:''
  //   });

  const [errorMsg, setErrorMsg] = useState("");
  const [role, setRole] = useState("student"); // Default: student

  //   const handleChange=(event)=>{
  //     setStudentLoginData({
  //         ...studentLoginData,
  //         [event.target.name]:event.target.value
  //     });
  // }

  // // const submitForm=()=>{
  // //     const studentFormData=new FormData;
  // //     studentFormData.append('email',studentLoginData.email)
  // //     studentFormData.append('password',studentLoginData.password)
  // //     try{
  // //         axios.post(baseUrl+'/student-login',studentFormData)
  // //         .then((res)=>{
  // //             if(res.data.bool==true){
  // //                 localStorage.setItem('studentLoginStatus',true);
  // //                 localStorage.setItem('studentId',res.data.student_id);
  // //                 window.location.href='/user-dashboard';
  // //             }else{
  // //               if(res.status==200 || res.status==201){
  // //                 Swal.fire({
  // //                     title:'Please Enter all details correctly!',
  // //                     icon:'error',
  // //                     toast:true,
  // //                     timer:2000,
  // //                     position:'top',
  // //                     timerProgressBar: true,
  // //                     showConfirmButton: false
  // //                 });
  // //             }
  // //             }
  // //         })
  // //     }catch(error){
  // //         console.log(error)
  // //     }
  // // }

  // if(studentLoginStatus=='true'){
  //     window.location.href='/StudentDashboard';
  // }

  // useEffect(()=>{
  //     document.title='LMS | Login'
  //   })

  return (
    <>
      {/* <div className="container mx-auto border-0 shadow rounded-3 my-5">
        <div className="card-body p-4 p-sm-5">
          <h5 className="text-center mb-3 text-3xl">Login</h5>
          {errorMsg && (
            <p className="text-danger">
              {errorMsg}
            </p>
          )}
          <div className="mb-3">
            <input
              type="email"
              value={studentLoginData.email}
               onChange={handleChange}
              name="email"
              className="px-4 py-2 border"
              id="floatingInput"
              placeholder="Enter Your Email Address"
            />
          </div>
          <div className="mb-3">
            <input
              value={studentLoginData.password}
              name="password"
              type="password"
               onChange={handleChange}
              className="px-4 py-2"
              id="floatingPassword"
              placeholder="Enter Your Password"
            />
          </div>
          <div className="my-4">
            <button
              onClick={submitForm}
              className=""
              type="submit"
            >
              Sign in
            </button>
            <hr className="" />
            <Link
              to=""
              className=""
              type="submit"
            >
              SIGN UP
            </Link>
          </div>
        </div>
      </div> */}


      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-2xl shadow-xl transition-all duration-300">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
          Login
        </h2>

        {errorMsg && (
          <p className="text-red-500 text-center mb-4">{errorMsg}</p>
        )}

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Role Selector */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Login as
          </label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>

        {/* Sign In Button */}
        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition duration-300"
          >
            Sign In as {role.charAt(0).toUpperCase() + role.slice(1)}
          </button>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-center sm:text-left">
          <span className="text-sm text-gray-500 mb-2 sm:mb-0">
            Don't have an account?
          </span>
          <Link
            to="/register"
            className="text-sm text-blue-600 hover:underline"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>

    </>
  );
};

export default Login;
