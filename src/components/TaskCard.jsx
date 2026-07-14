function TaskCard() {
  return (
    <>
      <section className="text-white border border-gray-600 backdrop-blur-4xl rounded-2xl px-10 flex flex-col gap-3">
        <div className="bg-green-400 py-2 rounded-full">
          <p className="text-center">Complete</p>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-3">
            <p className="text-lg">task</p>
            <p className="text-sm">date</p>
          </div>

          <div className="flex flex-col gap-3">
            <button className="bg-yellow-500 px-10 rounded-full py-1">
              Edit
            </button>
            <button className="bg-red-500 px-10 rounded-full py-1">
              Delete
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
export default TaskCard;
