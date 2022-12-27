import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Signin = ({authentication}) => {
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const {googleLogin, emailLogin} = authentication;
  // google login
  const handleGoogleLogin = () => {
    setError('')
    googleLogin()
    .then(result => {
      if(result.user.uid){
        toast.success('Login Successful')
        navigate('/')
      }
    })
    .catch(err => {
      setError(err.message)
    })
  }
  // email sign-in
  const handleEmailLogin = (e) => {
    e.preventDefault()
    setError('')
    const email = e.target.email.value;
    const password = e.target.password.value;
    emailLogin(email, password)
    .then(result => {
      if(result.user.uid){
        toast.success('Login Successful')
        navigate('/')
      }
    })
    .catch(err => {
      setError(err.message)
    })
  }
  return (
    <section className="min-h-[80vh] flex justify-center items-center px-3">
      <div className="border py-5 px-6 h-fit container max-w-lg  md:mt-0">
        <form onSubmit={handleEmailLogin}>
          <h3 className="text-center text-3xl font-bold my-3">Login</h3>
          <div className="my-1">
            <label htmlFor="email">Email</label>
            <br />
            <input
              className="border outline-none w-full px-3 py-2"
              type="email"
              name="email"
              id="email"
              required
            />
          </div>
          <div className="my-1">
            <label htmlFor="password">Password</label>
            <br />
            <input
              className="border outline-none w-full px-3 py-2"
              type="password"
              name="password"
              id="password"
              required
            />
          </div>
          <input
            type="submit"
            value="Login"
            className="bg-yellow-500 w-full py-2 px-3 cursor-pointer hover:bg-yellow-600 hover:scale-105 transition text-white my-3"
          />
        </form>
        <div className="mb-2">
          New to this site? <Link to='/signup' className="text-blue-700">Create an account</Link>
        </div>
        {/* */}
        {
          error && <p className="text-red-700">{error}</p>
        }
        <div className="flex text-center justify-center">
          <span onClick={handleGoogleLogin} className="text-2xl cursor-pointer">
            <FcGoogle></FcGoogle>
          </span>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  console.log(state)
  return {
     authentication : state.auth.authentication
  }
}

export default connect(mapStateToProps) (Signin);
