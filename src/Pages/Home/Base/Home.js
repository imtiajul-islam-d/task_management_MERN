import React, { useContext } from "react";
import { AuthContext } from "./../../../Authentication/AuthProvider";
import Category from "../Category/Category";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <section className="min-h-[90vh] px-3 md:px-10 flex items-center justify-center">
      <section className="container mx-auto">
        <section className="flex justify-center">
          <div>
            <h3 className="text-7xl lg:text-9xl font-bold mb-6 mt-10 text-center">
              Task Manager
            </h3>
            <p className="text-center text-3xl font-mono mt-3">
              A complete task management solution
            </p>
          </div>
        </section>
        <div>
          <Category></Category>
        </div>
      </section>
    </section>
  );
};

export default Home;
