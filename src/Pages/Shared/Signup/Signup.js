import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Signup = ({ authentication }) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { createUserEmail, updateUser, googleLogin, signOut } = authentication;
  const handleGoogleLogin = () => {
    setError("");
    googleLogin()
      .then((result) => {
        const user = result.user;
        const name = user.displayName;
        const email = user.email;
        // check user
        fetch(`https://todo-sage-iota.vercel.app/user/availability?email=${email}`)
          .then((res) => res.json())
          .then((data) => {
            if (data.length) {
              toast.success("Login successful");
              navigate("/");
            } else {
              saveUser(name, email);
            }
          });
      })
      .catch((err) => {
        toast.error(err.message);
        setError(err.message);
        signOut();
      });
  };
  const handleCreateUser = (e) => {
    e.preventDefault();
    setError("");
    const email = e.target.email.value;
    const password = e.target.password.value;
    const info = {
      displayName: e.target.name.value,
    };
    createUserEmail(email, password)
      .then((result) => {
        updateUser(info)
        .then((result) => {
          const name = e.target.name.value;
          const email = e.target.email.value;
          navigate("/");
          saveUser(name, email);
        });
      })
      .catch((err) => {
        setError(err.message);
        toast.error(err.message);
      });
  };

  // save user to database
  // save user info to the database
  const saveUser = (name, email) => {
    const user = {
      name,
      email,
    };
    fetch("https://todo-sage-iota.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          navigate("/");
          toast.success("Successfully registered");
        }
      })
      .catch((err) => setError(err.message));
  };

  return (
    <section className="min-h-[80vh] flex justify-center items-center px-3">
      <div className="border py-5 px-6 h-fit container max-w-lg  md:mt-0">
        <form onSubmit={handleCreateUser} action="">
          <h3 className="text-center text-3xl font-bold my-3">Register</h3>
          <div className="my-1">
            <label htmlFor="name">Name</label>
            <br />
            <input
              className="border outline-none w-full px-3 py-2"
              type="text"
              name="name"
              id="name"
              required
            />
          </div>
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
            value="Signup"
            className="bg-yellow-500 w-full py-2 px-3 cursor-pointer hover:bg-yellow-600 hover:scale-105 transition text-white my-3"
          />
        </form>
        <div className="mb-2">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-700">
            Please login
          </Link>
        </div>
        {error && (
          <div>
            <p className="text-red-600">{error}</p>
          </div>
        )}
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
  return {
    authentication: state.auth.authentication,
  };
};

export default connect(mapStateToProps)(Signup);
