export default function NavBar() {
  return (
    <>
      <nav className="bg-black flex justify-between py-5 px-10 text-white ">
        <div>
          <h1 className="text-lg font-serif ">TODO APP</h1>
        </div>

        <form className="flex gap-3">
          <input
            type="text"
            placeholder="Enter task..."
            className="rounded-full w-2xl border border-gray-600"
          />
          <button className="px-10 bg-green-400 rounded-full cursor-pointer py-1">
            Submit
          </button>
        </form>

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
