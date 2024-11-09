import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
 
import Doctors from "../Pages/Doctors/Doctors";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Services from "../Pages/Services";
import Image from "../Pages/image";
import DoctorsDetails from "../Pages/Doctors/DoctorsDetails";
import HealthEducation from "../Pages/healtheducation";
import MapPage from "../Pages/pharmacy"
import VideoCall from "../Pages/video-call";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/pharmacy" element={<MapPage />} />
      <Route path="/healtheducation" element={<HealthEducation />} />
      
       
      <Route path="/doctors" element={<Doctors />} />
      
      <Route path="/doctors/:id" element={<DoctorsDetails />} />
      <Route path="/image" element={<Image />} />
      <Route path="/VideoCall" element={<VideoCall />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
};

export default Routers;
