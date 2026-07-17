import { useContext } from "react";
import { AppContext } from "../AppContaxt/AppContext";
import { patchTask, deleteTask } from "../api/api";

function TaskCard({ data }) {
  const { setEditTask, setGetData } = useContext(AppContext);

  // delete task
  const handelDeleteTask = async () => {
    const response = await deleteTask(data.id);

    if (response.success) {
      // list me se sirf isi task ko hatao (id match karke)
      setGetData((prev) => prev.filter((task) => task.id !== data.id));
    } else {
      alert(response.error);
    }
  };

  // mark complete / incomplete toggle
  const handleToggleComplete = async () => {
    const response = await patchTask(data.id);

    if (response.success) {
      // list me sirf isi task ka completed status update karo
      setGetData((prev) =>
        prev.map((task) =>
          task.id === data.id
            ? { ...task, completed: response.data.completed }
            : task,
        ),
      );
    } else {
      alert(response.error);
    }
  };

  return (
    <>
      <section className="text-white border border-gray-600 backdrop-blur-4xl rounded-2xl px-10 flex flex-col gap-3">
        <div
          className={`${data.completed === true ? "bg-green-400" : "bg-red-400"} py-2 rounded-full`}
        >
          <p className="text-center">
            {data.completed === true ? "Completed" : "Not Completed"}
          </p>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-3">
            <p className="text-lg">{data.title}</p>
            <p className="text-sm">{data.date}</p>
          </div>

          <div className="flex flex-col gap-3">
            <button
              className="bg-yellow-500 px-10 rounded-full py-1 cursor-pointer"
              onClick={() => setEditTask(data)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 px-10 rounded-full py-1 cursor-pointer"
              onClick={handelDeleteTask}
            >
              Delete
            </button>

            <button
              className="bg-blue-500 px-10 rounded-full py-1 cursor-pointer"
              onClick={handleToggleComplete}
            >
              Mark Complete
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
export default TaskCard;
