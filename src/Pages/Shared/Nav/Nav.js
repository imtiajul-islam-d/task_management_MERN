import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../../../assets/logo/logoNote.png";
// 
import { connect } from "react-redux";
// 
// drawer
import { Drawer } from "antd";
// drawer

const Nav = ({authentication}) => {
    console.log(authentication.login);
  // drawer start
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  // drawer end
  const menuItemsLeft = (
    <React.Fragment>
      <li className="flex">
        <Link
          to="/mytask"
          className="flex items-center px-4 -mb-1 dark:border-transparent hover:cursor-pointer"
        >
          My task
        </Link>
      </li>
      <li className="flex">
        <Link
          to="/addtask"
          className="flex items-center px-4 -mb-1 dark:border-transparent"
        >
          Add task
        </Link>
      </li>
    </React.Fragment>
  );
  const menuItemsRight = (
    <React.Fragment>
      <li className="flex">
        <Link
          to="/completedtask"
          className="flex items-center px-4 -mb-1 dark:border-transparent hover:cursor-pointer"
        >
          Completed task
        </Link>
      </li>
      {/*  */}
      <li className="flex">
        <Link
          className="flex items-center px-4 -mb-1 dark:border-transparent"
        >
          Logout
        </Link>
      </li>
    </React.Fragment>
  );
  return (
    <div className="border-b border-gray-300 h-full backdrop-blur-lg">
      {/* for large device */}
      <header className="w-full h-full dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex justify-between h-full mx-auto md:justify-center md:space-x-8 relative">
          <ul className="items-stretch hidden space-x-3 md:flex">
            {menuItemsLeft}
          </ul>
          <Link
            to="/"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <img className="h-[90%]" src={logo} alt="" />
          </Link>
          <ul className="items-stretch hidden space-x-3 md:flex">
            {menuItemsRight}
          </ul>
          <button title="Button" type="button" className="p-4 md:hidden">
            <svg
              type="primary"
              onClick={showDrawer}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 dark:text-gray-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
      {/* drawer start */}
      <section className="w-full">
        <Drawer
          width="90%"
          style={{
            background: "rgba(255, 255, 255, 0.95)",
          }}
          placement="right"
          onClose={onClose}
          open={open}
        >
          <div>
            <ul>
              {menuItemsLeft}
              {menuItemsRight}
            </ul>
          </div>
        </Drawer>
      </section>
      {/* drawer end */}
    </div>
  );
};

const mapStateToProps = (state) => {
    console.log(state)
    return {
       authentication : state.auth.authentication
    }
}

export default connect(mapStateToProps) (Nav);
