import { NavLink } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { createTask, updateTask } from "../api/api";
import Toast from "./ToastComponent";
import { AppContext } from "../AppContaxt/AppContext";

// initial form data
const initialFormData = { title: "" };
export default function NavBar() {
  // state for get form data
  const [formData, setFormData] = useState(initialFormData);

  // state for toast popup
  const [toast, setToast] = useState(null);

  // context se editTask aur setEditTask dono liya
  const { editTask, setEditTask } = useContext(AppContext);

  // set edit task to the input field
  useEffect(() => {
    if (editTask) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFormData({ title: editTask.title });
    }
  }, [editTask]);

  // handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 1 second ke baad toast popup hat jayga
  const showToast = (message, type) => {
    setToast({ message, type });

    setTimeout(() => {
      setToast(null); // 1 second baad hat jayega
    }, 1000);
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    let result;

    if (editTask) {
      // EDIT MODE -> PUT request
      const updatedData = {
        ...formData,
        date: editTask.date,
      };

      result = await updateTask(editTask.id, updatedData);
    } else {
      // CREATE MODE -> POST request
      const taskData = {
        ...formData,
        date: new Date().toISOString(),
      };
      result = await createTask(taskData);
    }

    if (result.success) {
      showToast(
        editTask ? "Successfully Updated Task" : "Successfully Created Post",
        "success",
      );
    } else {
      showToast(
        editTask ? "Fail to Update Task" : "Fail to Create Post",
        "error",
      );
    }

    setFormData(initialFormData);
    setEditTask(null); // edit mode reset -> wapas create mode
  };

  return (
    <>
      {/* toast popup */}
      {toast && <Toast message={toast.message} type={toast.type} />}

      {/* navbar */}
      <nav className="bg-black flex justify-between py-5 px-10 text-white ">
        <div>
          <h1 className="text-lg font-serif ">
            <NavLink to="/">TODO APP</NavLink>
          </h1>
        </div>

        <form className="flex gap-3" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter task..."
            className="rounded-full w-2xl border border-gray-600"
            value={formData.title}
            name="title"
            onChange={handleChange}
            required
          />
          <button
            className="px-10 bg-green-400 rounded-full cursor-pointer py-1"
            type="submit"
          >
            Submit
          </button>
        </form>

        {/* show my tasks */}
        <div>
          <NavLink
            to="/post"
            className="px-10 bg-green-400 rounded-full cursor-pointer py-1"
          >
            Show My Tasks
          </NavLink>
        </div>

        {/* login and sign up button */}
        <div>
          <button className="px-10 bg-blue-500 rounded-full cursor-pointer py-1">
            Sign Up
          </button>
        </div>
      </nav>
    </>
  );
}
