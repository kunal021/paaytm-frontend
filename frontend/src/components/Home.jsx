import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="bg-gradient-to-r from-black via-blue-900 to-blue-400 h-[100vh] w-[100vw] overflow-hidden">
      <div className="flex flex-col justify-center items-center text-center p-10 md:p-32 text-white h-full">
        <p className="text-lg md:text-2xl font-extrabold">
          Your money, your way. Instant, secure, and hassle-free
        </p>
        <p className="text-sm md:text-lg font-semibold py-10">
          Seamless payments, just a tap away. Send money, simple and secure.
        </p>
        <Link
          to="/signup"
          className="border-transparent rounded-lg border-2 px-3 py-3 bg-black hover:bg-gray-900 transition-all duration-300 text-white font-bold text-sm md:text-lg"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default Home;
