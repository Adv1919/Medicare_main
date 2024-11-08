import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../About/About";
import ServicesList from "../Services/ServicesList";
import DoctorsList from "./Doctors/DoctorsList";
import FaqItem from "./Faq/FaqItem";
import Testimonial from "../Components/Testimonial/Testimonial";
import useTitle from "../Hooks/useTitle";
const Home = () => {
  useTitle("Home");
  return (
    <>
       <div className="bg-blue-50 min-h-screen p-10 flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {/* Top Buttons */}
        <div className="bg-blue-100 rounded-lg p-6 text-center shadow-md">
          <h2 className="text-lg font-semibold">Book Consultation</h2>
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
          <Link to="/doctors" className="  font-medium ">
            Schedule now
          </Link>
          </button>
        </div>
        <div className="bg-pink-100 rounded-lg p-6 text-center shadow-md">
          <h2 className="text-lg font-semibold">Order Medicine</h2>
          <button className="mt-4 bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700">
          <Link to="/pharmacy" className=" r font-medium ">
             View Pharmacies
          </Link>
          </button>
        </div>
        <div className="bg-blue-100 rounded-lg p-6 text-center shadow-md">
          <h2 className="text-lg font-semibold">Health Articles</h2>
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
          <Link to="/healtheducation" className="  font-medium ">
            Browse Content
          </Link>
          </button>
        </div>
      </div>

      {/* Upcoming Appointments */}
      <div className="bg-white rounded-lg shadow-md w-full max-w-4xl mt-8 p-6">
        <h3 className="text-lg font-semibold mb-4">Upcoming Appointments</h3>
         
      </div>

      {/* Prescriptions and Health Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mt-8">
        {/* Recent Prescriptions */}
        <div className="bg-pink-100 rounded-lg p-6 shadow-md">
          <h3 className="text-lg font-semibold mb-4">Recent Prescriptions</h3>
          <div className="bg-pink-200 rounded-md p-4 mb-2"> </div>
          <div className="bg-pink-200 rounded-md p-4"> </div>
        </div>

        {/* Health Metrics */}
        <div className="bg-blue-100 rounded-lg p-6 shadow-md">
          <h3 className="text-lg font-semibold mb-4">Health Metrics</h3>
          <div className="bg-blue-200 rounded-md p-4 mb-2"> </div>
          <div className="bg-blue-200 rounded-md p-4"> </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
