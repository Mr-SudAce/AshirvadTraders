import { useState, useCallback, memo } from "react";
import { FaHome, FaBars } from "react-icons/fa";
import { LuBook, LuImage, LuLockKeyhole, LuUser } from "react-icons/lu";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const tabs = [
  { id: 1, icon: <FaHome size={24} />, name: "Home" },
  { id: 2, icon: <LuImage size={24} />, name: "Gallery" },
  { id: 3, icon: <LuBook size={24} />, name: "Articles" },
  { id: 4, icon: <LuUser size={24} />, name: "Community" },
  { id: 5, icon: <LuLockKeyhole size={24} />, name: "Profile" },
];

const Navbar = memo(() => {
  const [activeTab, setActiveTab] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleTabClick = useCallback((id) => {
    setActiveTab(id);
    setMenuOpen(false);
  }, []);

  return (
    <motion.nav className="w-full h-20 fixed bg-[var(--superbg)] lg:top-10 md:top-5 top-5 shadow-md z-50 p-4">
      <div className="flex h-full items-center justify-between mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <LazyLoadImage
            src="https://picsum.photos/id/202/1080/720/"
            alt="logo"
            loading="lazy"
            height={50}
            width={50}
          />
        </div>

        {/* Menu Button for Small Screens */}
        <button
          className="lg:hidden text-[var(--superbg2)] text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars />
        </button>

        {/* Navigation Tabs */}
        <div
          className={`lg:flex gap-10 absolute lg:static top-16 left-0 right-0 bg-[var(--superbg)] lg:bg-transparent p-4 lg:p-0 transition-all duration-300 ease-in-out ${menuOpen ? "block" : "hidden"
            } lg:flex-row flex flex-col items-center shadow-lg lg:shadow-none`}
        >
          {tabs.map(({ id, icon, name }) => (
            <div
              key={id}
              className="relative flex flex-col items-center cursor-pointer group text-[var(--superbg2)] my-2 lg:my-0"
              onClick={() => handleTabClick(id)}
            >
              {activeTab === id && (
                <motion.div
                  layoutId="underline"
                  className="absolute -top-4 w-14 h-14 bg-[var(--superbg2)] rounded-full shadow-lg"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                />
              )}
              <span
                className={`relative z-10 transition-all duration-300 ${activeTab === id ? "text-[var(--superbg)]" : ""
                  }`}
                title={name}
              >
                {icon}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.nav>
  );
});

export default Navbar;
