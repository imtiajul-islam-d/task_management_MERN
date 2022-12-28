import React from "react";
import { Link } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";

const Category = () => {
  return (
    <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
      <div className="container p-6 mx-auto space-y-8">
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
          <article className="flex flex-col dark:bg-gray-900 border hover:shadow-md hover:scale-105 transition">
            <div>
              <p className="mt-6 text-center text-4xl font-bold">My Tasks</p>
            </div>
            <div className="flex flex-col flex-1 p-6">
              <Link className="bg-yellow-400 hover:bg-yellow-300 text-white hover:text-black p-4 flex items-center justify-center transition">
                <span className=" cursor-pointer text-xl">
                  <FaPlusCircle></FaPlusCircle>
                </span>
              </Link>
            </div>
          </article>
          {/* two */}
          <article className="flex flex-col dark:bg-gray-900 border hover:shadow-md hover:scale-105 transition">
            <div>
              <p className="mt-6 text-center text-4xl font-bold">Add Tasks</p>
            </div>
            <div className="flex flex-col flex-1 p-6">
              <Link className="bg-yellow-400 hover:bg-yellow-300 text-white hover:text-black p-4 flex items-center justify-center transition">
                <span className=" cursor-pointer text-xl">
                  <FaPlusCircle></FaPlusCircle>
                </span>
              </Link>
            </div>
          </article>
          {/* three */}
          <article className="flex flex-col dark:bg-gray-900 border hover:shadow-md hover:scale-105 transition">
            <div>
              <p className="mt-6 text-center text-4xl font-bold">Completed Tasks</p>
            </div>
            <div className="flex flex-col flex-1 p-6">
              <Link className="bg-yellow-400 hover:bg-yellow-300 text-white hover:text-black p-4 flex items-center justify-center transition">
                <span className=" cursor-pointer text-xl">
                  <FaPlusCircle></FaPlusCircle>
                </span>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Category;
