import TaskCard from "../components/TaskCard";
import { getAllTasks } from "../api/api";
import { useEffect, useContext } from "react";
import { AppContext } from "../AppContaxt/AppContext";

function AllPosts() {
  // get task data from context
  const { getData, setGetData } = useContext(AppContext);

  // fetch all taska at once
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasks = await getAllTasks();

        setGetData(tasks);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTasks();
  }, []);
  return (
    <>
      <section className="min-h-screen bg-zinc-900 flex flex-col gap-5 pt-5 px-10">
        {getData.map((task) => (
          <TaskCard key={task.id} data={task} />
        ))}
      </section>
    </>
  );
}
export default AllPosts;
