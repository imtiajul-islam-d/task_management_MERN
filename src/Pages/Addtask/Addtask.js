import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import { AuthContext } from "./../../Authentication/AuthProvider";

const Addtask = () => {
  const { user } = useContext(AuthContext);
  const [img, setImage] = useState("");
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // set loader
    setLoading(true)
    // get form data
    const form = e.target;
    const title = form.title.value;
    const details = form.details.value;
    // get form data end
    // upload image
    const Formdata = new FormData();
    Formdata.append("file", img);
    Formdata.append("upload_preset", "todoapp");
    Formdata.append("cloud_name", "dueuqmxmd");
    fetch("https://api.cloudinary.com/v1_1/dueuqmxmd/image/upload", {
      method: "POST",
      body: Formdata,
    })
      .then((res) => res.json())
      .then((data) => {
        setImage("");
        //   // declaring and object to post on database as a task
        const task = {
          email: user.email,
          status: "pending",
          title: title,
          imageName: data.original_filename,
          image: data.url,
          details: details,
        };
        // 
        fetch("https://todo-sage-iota.vercel.app/task", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(task),
        })
          .then((result) => {
            toast.success("Task added successfully!");
            form.reset()
            setLoading(false)
            navigate("/mytask");
          })
          .catch((err) => {
            setLoading(false)
            toast.error("Something went wrong! Please try again..");
          });
      })
      .catch((err) => {
        if (err) {
          setLoading(false)
          toast.error("Something went wrong! Please try again.");
        }
      });
  };
  if(loading){
    return <Loader></Loader>
  }
  return (
    <section>
      <div>
        <div className="flex items-center justify-center bg-yellow-400 text-black min-h-[25vh]">
          <h3 className="font-bold text-3xl">Add a task</h3>
        </div>
        <div className="container mx-auto px-6 mt-2">
          <form onSubmit={handleFormSubmit}>
            <div className="border p-6">
              <div className="my-2">
                <label className="font-bold" htmlFor="title">
                  Title
                </label>
                <br />
                <input
                  className="border w-full px-4 py-3 outline-none"
                  type="text"
                  name="title"
                  id="title"
                  required
                />
              </div>
              <div className="my-2">
                <label className="font-bold" htmlFor="title">
                  Upload
                </label>
                <br />
                <input
                  onChange={(e) => setImage(e.target.files[0])}
                  className="w-full border outline-none p-4"
                  type="file"
                  name="image"
                  id="image"
                />
              </div>
              <div className="my-2">
                <label className="font-bold" htmlFor="title">
                  Details
                </label>
                <br />
                <textarea
                  className="w-full border outline-none p-4"
                  name="details"
                  id="details"
                  maxLength="1000"
                  cols="30"
                  rows="10"
                  style={{ resize: "none" }}
                ></textarea>
              </div>
              <div className="my-2">
                <input
                  className="w-full bg-yellow-400 text-white py-3 hover:bg-yellow-300 hover:text-black cursor-pointer"
                  type="submit"
                  value="Add task"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Addtask;
