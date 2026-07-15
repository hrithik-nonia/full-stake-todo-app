import TaskCard from "../components/TaskCard";
import { get_specific_user_tasks } from "../api/api";
import { useEffect, useState } from "react";

function Posts() {
  // state for storing tasks
  const [getTasks, setGetTasks] = useState([]);

  // get filtered tasks by filter using user id
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasks = await get_specific_user_tasks("123");
        setGetTasks(tasks);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTasks();
  }, []);
  return (
    <>
      <section className="min-h-screen bg-zinc-900 flex flex-col gap-5 pt-5 px-10">
        {getTasks.map((task) => (
          <TaskCard key={task.id} data={task} />
        ))}
      </section>
    </>
  );
}
export default Posts;
