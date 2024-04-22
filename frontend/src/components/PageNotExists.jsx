import { Link } from "react-router-dom";
function PageNotExists() {
  return (
    <div className="flex flex-col justify-center items-center text-center h-[100vh] bg-black overflow-hidden space-y-10">
      <h1 className="text-3xl font-bold text-white">Page Not Exists</h1>
      <Link
        to={"/"}
        className="text-lg font-bold text-black rounded-md border-transparent border-2 bg-gray-50 hover:bg-gray-200 px-3 py-2 transition-all duration-300"
      >
        Go To Home
      </Link>
    </div>
  );
}

export default PageNotExists;
