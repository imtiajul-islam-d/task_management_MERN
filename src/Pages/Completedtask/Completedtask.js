import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Authentication/AuthProvider";
import Loader from "../../components/Loader";
import CompletedTaskCard from "./CompletedTaskCard";

const Completedtask = () => {
  const { user } = useContext(AuthContext);
  const { isLoading, data: completedTasks } = useQuery({
    queryKey: ["completedTasks", user?.email],
    queryFn: () =>
      fetch(`http://localhost:5000/completedtasks?email=${user?.email}`, {
        // headers: {
        //   authorization: `bearer ${localStorage.getItem("furniture")}`,
        // },
      }).then((res) => res.json()),
  });
  if (isLoading) {
    return <Loader></Loader>;
  }
  console.log(completedTasks);
  return (
    <section>
      <div className="flex items-center justify-center bg-yellow-400 text-black min-h-[25vh]">
        <h3 className="font-bold text-3xl">Completed Tasks</h3>
      </div>
      {completedTasks?.length && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-3 container mx-auto py-5 px-3 min-h-[63vh]">
          {completedTasks?.map((completedTask, idx) => (
            <CompletedTaskCard key={idx} completedItem={completedTask}></CompletedTaskCard>
          ))}
        </div>
      )}
      {completedTasks?.length === 0 && (
        <div className="min-h-[56vh] flex items-center justify-center">
          <Link className="py-3 px-5 bg-yellow-500 text-white" to="/addtask">
            Please add some tasks
          </Link>
        </div>
      )}
    </section>
  );
};

export default Completedtask;
