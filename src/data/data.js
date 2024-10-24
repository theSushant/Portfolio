import { FaReact, FaDatabase } from "react-icons/fa";
import { AiOutlineCloudServer } from "react-icons/ai";
import { HiArrowRight } from "react-icons/hi";

// Features Data
export const featuresData = [
  {
    id: 1,
    icon: <FaReact />,
    title: "Frontend Development",
    des: "Creating dynamic and responsive user interfaces with modern front-end technologies, focusing on seamless user experiences and efficient component-based architecture.",
    arrow: <HiArrowRight /> 
  },
  {
    id: 2,
    icon: <AiOutlineCloudServer />,
    title: "Backend Development",
    des: "Developing robust, scalable backends using server-side technologies and integrating databases, ensuring high performance and secure data management.",
    arrow: <HiArrowRight /> 
  },
  {
    id: 3,
    icon: <FaDatabase />,
    title: "Database Management",
    des: "Designing, implementing, and maintaining efficient database systems, ensuring secure and reliable data storage, optimized queries, and smooth data retrieval for scalable applications.",
    arrow: <HiArrowRight /> 
  }
];
