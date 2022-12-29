import { Collapse } from "antd";
import React from "react";
import { toast } from "react-hot-toast";
import { FcEditImage } from "react-icons/fc";
import { Link } from "react-router-dom";

const { Panel } = Collapse;

const CompletedTaskCard = ({ completedItem, refetch }) => {
  const deleteTask = (task) => {
    const confirm = window.confirm(`Want to delete ${task?.title}?`);
    if (!confirm) {
      return;
    }
    fetch(`https://todo-sage-iota.vercel.app/task/${task._id}`, {
      method: "DELETE",
      //   headers: {
      //     authorization: `bearer ${localStorage.getItem("furniture")}`,
      //   },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          toast.success("Task deleted successfully");
          refetch()
        }
      });
  };
  //   move to incomplete
  const toComplete = (id) => {
    const confirm = window.confirm(
      "Are you sure, you want to mark the task as incomplete?"
    );
    if (!confirm) {
      return;
    }
    fetch(`https://todo-sage-iota.vercel.app/task/status/in?id=${id}`, {
      method: "PATCH",
      // headers: {
      //   authorization: `bearer ${localStorage.getItem("furniture")}`,
      // },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("The task has been moved to incomplete section");
          refetch()
        }
      });
  };
  //   update comment
  const updateComment = (e, id) => {
    console.log(e.target.value, id);
    const value = e.target.value;
    const comment = { comment: value };
    if (!value) {
      alert("Please add some comment");
    } else {
      fetch(`https://todo-sage-iota.vercel.app/task/comment?id=${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          //   authorization: `bearer ${localStorage.getItem("furniture")}`,
        },
        body: JSON.stringify(comment),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            toast.success("Comment updated successfully");
          }
        });
    }
  };
  return (
    <div className="border h-fit">
      <div className="p-4">
        <input
          className="my-1 outline-none w-full border p-4"
          type="text"
          name="title"
          id="title"
          defaultValue={completedItem?.title}
        />
        <textarea
          className="w-full outline-none p-4 border mb-3"
          name="details"
          id="details"
          cols="30"
          rows="5"
          style={{
            resize: "none",
          }}
          maxLength="500"
          defaultValue={completedItem?.details}
        ></textarea>
        {completedItem?.imageName && (
          <div className="mb-4">
            <a
              rel="noreferrer"
              target={"_blank"}
              className="py-2 px-3 bg-yellow-500 hover:bg-yellow-400 hover:text-white flex justify-center items-center"
              href={completedItem?.image}
            >
              <span className="mr-2">
                <FcEditImage></FcEditImage>
              </span>
              {completedItem?.imageName}
            </a>
          </div>
        )}
        <div className="grid gap-3 grid-cols-1 lg:grid-cols-2 text-center">
          <Link
            onClick={() => toComplete(completedItem._id)}
            className="py-3 px-4 bg-yellow-500"
          >
            Not completed
          </Link>
          <Link
            onClick={() => deleteTask(completedItem)}
            className="py-3 px-4 bg-yellow-500"
          >
            Delete
          </Link>
        </div>
        <div className="mt-2">
          <Collapse style={{ borderRadius: "0px" }}>
            <Panel
              style={{ borderRadius: "0px" }}
              header="Comment on this task"
              key="1"
            >
              <textarea
                onBlur={(e) => updateComment(e, completedItem._id)}
                style={{ resize: "none", outline: "none" }}
                className="border w-full p-3"
                name="comment"
                id="comment"
                cols="30"
                rows="5"
                defaultValue={completedItem.comment}
              ></textarea>
            </Panel>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default CompletedTaskCard;
