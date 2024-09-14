/* eslint-disable react/prop-types */

// REACT
import { useState } from "react";

// REACT ROUTER DOM
import { Outlet, Link } from "react-router-dom";

// PAGES
import Footer from "./Footer";

// MOTION
import { motion } from "framer-motion";

// COMPONENTS
import ToggleButton from "./ToggleButton";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const RootNav = () => {
  const [open, setOpen] = useState(false);
  const handleNav = () => {
    setOpen(!open);
  };

  // TOP OF PAGE
  const toTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  // STYLES
  const mobileStyles = {
    container: "fixed w-screen h-24 bg-button z-40",
    fullMenu:
      "bg-white fixed w-screen h-screen p-20 md:p-0 flex flex-col justify-center items-center z-30 md:w-3/6 lg:w-2/6 ",
    menuItem:
      "bg-button text-white w-60 h-16 m-8 rounded-lg flex justify-center items-center sm:w-96 sm:h-16 md:w-60 lg:w-72 sm:my-8 hover:bg-accent hover:text-button hover:font-bold",
    menuIcon: "mr-3 tracking-widest text-sm ",
  };

  const desktopStyles = {
    container:
      "hidden md:block fixed flex content-center w-3/6 top-0 right-0 h-24 bg-transparent z-40 items-center",
    linkSubContainer: "absolute top-6 right-6 flex items-center",
    link: "mx-8 font-bold text-white hover:bg-accent p-2 rounded-sm",
    button:
      "font-serif font-bold bg-accent text-button text-sm rounded-lg px-6 py-3 border border-2 border-accent hover:bg-white",
  };

  return (
    <div id="rootNav">
      {/* MOBILE NAV */}
      <motion.div
        id="nav"
        className={mobileStyles.container}
        animate={open ? "open" : "closed"}>
        <motion.div variants={variants} className={mobileStyles.fullMenu}>
          <motion.div onClick={handleNav}>
            <Link to="/" onClick={toTop}>
              <span className={mobileStyles.menuItem}>
                <p className="text-sm ">Home</p>
              </span>
            </Link>

            {/* <Link to="services" onClick={toTop}>
              <span className={mobileStyles.menuItem}>
                <HiBriefcase className={mobileStyles.menuIcon} />
                <p className="text-sm ">Class Info</p>
              </span>
            </Link> */}

            <Link to="tutors" onClick={toTop}>
              <span className={mobileStyles.menuItem}>
                <p className="text-sm ">Tutors</p>
              </span>
            </Link>

            <Link to="signup" onClick={toTop}>
              <span className={mobileStyles.menuItem}>
                <p className="text-sm ">Sign Up</p>
              </span>
            </Link>

            <Link to="contact" onClick={toTop}>
              <span className={mobileStyles.menuItem}>
                <p className="text-sm ">Contact</p>
              </span>
            </Link>
          </motion.div>
        </motion.div>

        <ToggleButton setOpen={setOpen} />
      </motion.div>

      {/* DESKTOP NAV */}
      <header className={desktopStyles.container}>
        <nav>
          {/* LINKS */}
          <div className={desktopStyles.linkSubContainer}>
            <Link to="signup" onClick={toTop}>
              <button className={desktopStyles.button}>Sign up</button>
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export default RootNav;
