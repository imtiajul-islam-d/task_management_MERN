import React from "react";
import { Link } from "react-router-dom";
import { FcEditImage } from "react-icons/fc";
import { toast } from "react-hot-toast";

const Task = ({ item }) => {
  const deleteTask = (task) => {
    const confirm = window.confirm(`Want to delete ${task?.title}?`);
    if (!confirm) {
      return;
    }
    fetch(`http://localhost:5000/task/${task._id}`, {
      method: "DELETE",
      //   headers: {
      //     authorization: `bearer ${localStorage.getItem("furniture")}`,
      //   },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          toast.success("Task deleted successfully");
        }
      });
  };
  //   update tasks to complete
  const toComplete = (id) => {
    const confirm = window.confirm(
      "Are you sure, you want to mark the task as completed?"
    );
    if (!confirm) {
      return;
    }
    fetch(`http://localhost:5000/task/status?id=${id}`, {
      method: "PATCH",
      // headers: {
      //   authorization: `bearer ${localStorage.getItem("furniture")}`,
      // },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Task completed");
        }
      });
  };
  // update details
  const updateDetails = (e, id) => {
    console.log(e.target.value, id);
    const value = e.target.value;
    const details = { details: value };
    console.log(details);
    if (!value) {
      alert("Please add some title");
    } else {
      fetch(`http://localhost:5000/task/details?id=${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          //   authorization: `bearer ${localStorage.getItem("furniture")}`,
        },
        body: JSON.stringify(details),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            toast.success("Details updated successfully");
          }
        });
    }
  };
  // update title
  const updateTitle = (e, id) => {
    console.log(e.target.value, id);
    const value = e.target.value;
    const title = { title: value };
    console.log(title);
    if (!value) {
      alert("Please add some title");
    } else {
      fetch(`http://localhost:5000/task/title?id=${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          //   authorization: `bearer ${localStorage.getItem("furniture")}`,
        },
        body: JSON.stringify(title),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            toast.success("Title updated successfully");
          }
        });
    }
  };
  return (
    <div className="border h-fit">
      <div className="p-4">
        <input
          onBlur={(e) => updateTitle(e, item?._id)}
          className="my-1 outline-none w-full border p-4"
          type="text"
          name="title"
          id="title"
          defaultValue={item?.title}
        />
        <textarea
          onBlur={(e) => updateDetails(e, item?._id)}
          className="w-full outline-none p-4 border mb-3"
          name="details"
          id="details"
          cols="30"
          rows="5"
          style={{
            resize: "none",
          }}
          maxLength="500"
          defaultValue={item?.details}
        ></textarea>
        {item?.imageName && (
          <div className="mb-4">
            <a
              rel="noreferrer"
              target={"_blank"}
              className="py-2 px-3 bg-yellow-500 hover:bg-yellow-400 hover:text-white flex justify-center items-center"
              href={item?.image}
            >
              <span className="mr-2">
                <FcEditImage></FcEditImage>
              </span>
              {item?.imageName}
            </a>
          </div>
        )}
        <div className="grid gap-3 grid-cols-1 lg:grid-cols-2 text-center">
          <Link
            onClick={() => toComplete(item?._id)}
            className="py-3 px-4 bg-yellow-500"
          >
            Completed
          </Link>
          <Link
            onClick={() => deleteTask(item)}
            className="py-3 px-4 bg-yellow-500"
          >
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Task;
