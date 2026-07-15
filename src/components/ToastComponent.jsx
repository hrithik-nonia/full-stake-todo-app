export default function Toast({ message, type }) {
  return (
    <>
      <div
        className={`fixed top-[50%] right-[40%] z-10 px-6 py-3  rounded-lg shadow-lg text-white ${
          type === "success" ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {message}
      </div>
    </>
  );
}
