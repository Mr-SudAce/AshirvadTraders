/* eslint-disable no-unused-vars */
import { useState, useCallback, memo } from "react";
import { FaHome, FaBars, FaCity, FaUser } from "react-icons/fa";
import { LuBike } from "react-icons/lu";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TbBrand4Chan } from "react-icons/tb";
import { LazyLoadImage } from "react-lazy-load-image-component";

const tabs = [
  { id: 1, icon: <FaHome size={24} />, name: "Home", navurl: "/" },
  {
    id: 2, icon: <LuBike size={24} />, name: "Bike", navurl: "/bike",
    bikes: [
      { id: 1, name: "Mountain Bike", url: "mountain-bike" },
      { id: 2, name: "Road Bike", url: "road-bike" },
      { id: 3, name: "Electric Bike", url: "electric-bike" },
      { id: 4, name: "Scooty", url: "scooty" },
      { id: 1, name: "Mountain Bike", url: "mountain-bike" },
      { id: 2, name: "Road Bike", url: "road-bike" },
      { id: 3, name: "Electric Bike", url: "electric-bike" },
      { id: 4, name: "Scooty", url: "scooty" },
      { id: 1, name: "Mountain Bike", url: "mountain-bike" },
      { id: 2, name: "Road Bike", url: "road-bike" },
      { id: 3, name: "Electric Bike", url: "electric-bike" },
      { id: 4, name: "Scooty", url: "scooty" },
      { id: 1, name: "Mountain Bike", url: "mountain-bike" },
      { id: 2, name: "Road Bike", url: "road-bike" },
      { id: 3, name: "Electric Bike", url: "electric-bike" },
      { id: 4, name: "Scooty", url: "scooty" },
      { id: 1, name: "Mountain Bike", url: "mountain-bike" },
      { id: 2, name: "Road Bike", url: "road-bike" },
      { id: 3, name: "Electric Bike", url: "electric-bike" },
      { id: 4, name: "Scooty", url: "scooty" },
      { id: 1, name: "Mountain Bike", url: "mountain-bike" },
      { id: 2, name: "Road Bike", url: "road-bike" },
      { id: 3, name: "Electric Bike", url: "electric-bike" },
      { id: 4, name: "Scooty", url: "scooty" },
      { id: 1, name: "Mountain Bike", url: "mountain-bike" },
      { id: 2, name: "Road Bike", url: "road-bike" },
      { id: 3, name: "Electric Bike", url: "electric-bike" },
      { id: 4, name: "Scooty", url: "scooty" },
      { id: 1, name: "Mountain Bike", url: "mountain-bike" },
      { id: 2, name: "Road Bike", url: "road-bike" },
      { id: 3, name: "Electric Bike", url: "electric-bike" },
      { id: 4, name: "Scooty", url: "scooty" },
      { id: 1, name: "Mountain Bike", url: "mountain-bike" },
      { id: 2, name: "Road Bike", url: "road-bike" },
      { id: 3, name: "Electric Bike", url: "electric-bike" },
      { id: 4, name: "Scooty", url: "scooty" },
      { id: 1, name: "Mountain Bike", url: "mountain-bike" },
      { id: 2, name: "Road Bike", url: "road-bike" },
      { id: 3, name: "Electric Bike", url: "electric-bike" },
      { id: 4, name: "Scooty", url: "scooty" },
      { id: 1, name: "Mountain Bike", url: "mountain-bike" },
      { id: 2, name: "Road Bike", url: "road-bike" },
      { id: 3, name: "Electric Bike", url: "electric-bike" },
      { id: 4, name: "Scooty", url: "scooty" },
      { id: 1, name: "Mountain Bike", url: "mountain-bike" },
      { id: 2, name: "Road Bike", url: "road-bike" },
      { id: 3, name: "Electric Bike", url: "electric-bike" },
      { id: 4, name: "Scooty", url: "scooty" },
      { id: 1, name: "Mountain Bike", url: "mountain-bike" },
      { id: 2, name: "Road Bike", url: "road-bike" },
      { id: 3, name: "Electric Bike", url: "electric-bike" },
      { id: 4, name: "Scooty", url: "scooty" },
    ],
  },
  {
    id: 3, icon: <FaCity size={24} />, name: "City", navurl: "/city",
    cities: [
      { id: 1, name: "Kathmandu", url: "kathmandu" },
      { id: 2, name: "Pokhara", url: "pokhara" },
      { id: 3, name: "Biratnagar", url: "biratnagar" },
      { id: 4, name: "Birgunj", url: "birgunj" },
      { id: 5, name: "Dharan", url: "dharan" },
      { id: 6, name: "Janakpur", url: "janakpur" },
      { id: 7, name: "Dhangadi", url: "dhangadi" },
      { id: 8, name: "Butwal", url: "butwal" },
      { id: 9, name: "Mahendranagar", url: "mahendranagar" },
      { id: 10, name: "Hetauda", url: "hetauda" },

      { id: 1, name: "Kathmandu", url: "kathmandu" },
      { id: 2, name: "Pokhara", url: "pokhara" },
      { id: 3, name: "Biratnagar", url: "biratnagar" },
      { id: 4, name: "Birgunj", url: "birgunj" },
      { id: 5, name: "Dharan", url: "dharan" },
      { id: 6, name: "Janakpur", url: "janakpur" },
      { id: 7, name: "Dhangadi", url: "dhangadi" },
      { id: 8, name: "Butwal", url: "butwal" },
      { id: 9, name: "Mahendranagar", url: "mahendranagar" },
      { id: 10, name: "Hetauda", url: "hetauda" },
    ],
  },
  { id: 4, icon: <TbBrand4Chan size={24} />, name: "Profile", navurl: "/profile" },
  { id: 5, icon: <FaUser size={24} />, name: "User", navurl: "/user" },
];

const Navbar = memo(() => {
  const [activeTab, setActiveTab] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleTabClick = useCallback((id) => {
    setActiveTab((prev) => (prev === id ? null : id));
  }, []);

  return (
    <nav className="w-full fixed bg-[var(--superbg)] lg:top-10 md:top-5 shadow-md z-50 p-4">
      <div className="flex h-full items-center justify-between w-full">
        <Link to="/" className="text-white text-lg font-bold">
          <LazyLoadImage
            src="https://picsum.photos/id/202/1080/720/"
            alt="logo"
            loading="lazy"
            height={50}
            width={50}
          />
        </Link>
        <button
          className="lg:hidden text-[var(--superbg2)] text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars />
        </button>
        <div
          className={`absolute lg:static top-16 left-0 right-0 bg-[var(--superbg)] gap-10 p-4 lg:p-0 transition-all duration-300 ${menuOpen ? "block" : "hidden"
            } lg:flex flex justify-between items-center`}
        >
          {tabs.map(({ id, icon, name, navurl, cities, bikes }) => (
            <div key={id} className="relative flex flex-col items-center group">
              <Link
                to={navurl}
                className="text-[var(--superbg2)] flex flex-col items-center px-2 py-1 transition-all"
                onClick={() => handleTabClick(id)}
              >
                {icon}
              </Link>

              {/* Dropdown Menu */}
              {(cities || bikes) && activeTab === id && (
                <motion.div
                  className=" absolute lg:max-h-100 md:max-h-50 max-h-80 text-center lg:text-start md:text-start overflow-scroll no-scrollbar top-full left-0 bg-[var(--superbg)] shadow-lg rounded-md p-2 mt-1 w-48"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {(cities || bikes).map((item) => (
                    <Link
                      key={item.id}
                      to={`${navurl}/${item.url}`}
                      className="block px-4 py-2 text-[var(--superbg2)] hover:bg-[var(--superbg2)] hover:text-[var(--superbg)] rounded transition-all"
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
});

export default Navbar;
