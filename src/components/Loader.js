import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen fixed top-0 left-0 w-full">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400 bg-black"></div>
    </div>
  );
};

export default Loader;
