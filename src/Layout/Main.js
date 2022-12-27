import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Nav from "../Pages/Shared/Nav/Nav";

const Main = () => {
  // scroll effect start
  const [show, setShow] = useState(true);
  let lastScrollY = window.scrollY;
  const controlNavbar = () => {
    if (lastScrollY < window.scrollY) {
      if (window.scrollY > 100) {
        setShow(false);
      }
    } else {
      setShow(true);
    }
    lastScrollY = window.scrollY;
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  });
  // scroll effect end
  return (
    <section>
      {/* navigation */}
      <section
        className={`transition fixed z-30 ${
          show ? " top-0 w-full h-20 z-10 shadow-sm" : "-top-32"
        }`}
      >
        {show && <Nav></Nav>}
      </section>
      {/* outlet */}
      <section className={`mt-20`}>
        <Outlet></Outlet>
      </section>
      {/* footer */}
      <Footer></Footer>
    </section>
  );
};

export default Main;
