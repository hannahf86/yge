// REACT ROUTER DOM
import { Link } from "react-router-dom";

// ICONS
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaMobileScreen } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

// IMAGES
import logo from "../Assets/profilePic.png";

const Footer = () => {
  // TOP OF PAGE
  const toTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  // STYLES
  const layoutStyles = {
    container:
      "w-screen p-6 sm:px-10 bg-button bottom-0 md:grid grid-cols-4 grid-rows-3",
    logo: "w-20 md:ml-2 md:ml-4 self-center row-span-2 col-start-1",

    newsletterContainer:
      "md:col-start-2 md:row-start-1 md:col-span-3 md:row-span-2 pl-20 pt-4",
    desc: "text-white text-sm mb-3",
    form: "flex",
    button:
      "text-mono bg-button text-white text-sm rounded-lg px-8 py-2 mx-2 hover:bg-accent",
    input: "px-2 rounded-md",

    socialContainer: "flex flex-col md:ml-3 self-center col-start-2 col-span-2",
    icons: "text-white hover:text-accent mr-4 cursor-pointer",

    contactContainer:
      "flex flex-col justify-center md:ml-3 col-start-2 row-start-2",
    contactIcons: "text-white hover:text-accent mr-2 cursor-pointer",

    navContainer:
      "flex justify-between md:justify-start md:mt-2 mt-12 text-white cursor-pointer md:col-start-4 md:row-start-1 md:row-end-4 md:flex-col md:text-right md:row-span-3",
    navLink: "hover:text-accent font-thin text-xs md:py-2",

    legalContainer:
      "flex flex-col justify-center mt-2 md:row-start-3 md:col-start-2 md:col-end-4 pl-20",
    legalLinkContainer:
      "flex justify-between mx-10 sm:mx-32 md:mx-0 md:justify-start",
    privacy:
      "text-center font-thin text-white text-xs tracking-widest hover:text-accent md:text-left md:mr-20",
  };

  return (
    <div id="footer" className={layoutStyles.container}>
      {/* LOGO */}
      <div className="flex items-center mr-8">
        <img src={logo} className={layoutStyles.logo} />
      </div>

      {/* NEWSLETTER */}
      {/* <div id="col01" className={layoutStyles.newsletterContainer}>
        <p className={layoutStyles.desc}>
          Sign up to our newsletter to receive updates, offers and tips
        </p>
        <form id="newsletter" className={layoutStyles.form}>
          <input placeholder="Email" className={layoutStyles.input} />
          <button className={layoutStyles.button}>Sign up</button>
        </form>
      </div> */}

      {/* SOCIAL ICONS */}
      <div id="socialIcons" className={layoutStyles.socialContainer}>
        <Link to="https://www.facebook.com/profile.php?id=61565066786390">
          <div className="flex mt-4">
            <FaFacebookSquare size={25} className={layoutStyles.contactIcons} />{" "}
            <small className="text-white tracking-wider text-sm">
              York Guitar Ensemble
            </small>
          </div>
        </Link>

        <div className="flex mt-4">
          <FaInstagram size={25} className={layoutStyles.contactIcons} />{" "}
          <small className="text-white tracking-wider text-sm">
            /yorkguitarensemble
          </small>
        </div>
      </div>

      <div className={layoutStyles.contactContainer}>
        <div className="flex mt-4">
          <FaMobileScreen size={25} className={layoutStyles.contactIcons} />{" "}
          <small className="text-white tracking-wider text-sm">
            07548 957500
          </small>
        </div>

        <div className="flex mt-4">
          <MdEmail size={25} className={layoutStyles.contactIcons} />{" "}
          <small className="text-white tracking-wider text-sm">
            hello@yge.com
          </small>
        </div>
      </div>

      {/* NAV */}
      <div id="navArea" className={layoutStyles.navContainer}>
        <Link to="/" className={layoutStyles.navLink} onClick={toTop}>
          Home
        </Link>
        <Link to="about" className={layoutStyles.navLink} onClick={toTop}>
          About
        </Link>
        <Link to="signup" className={layoutStyles.navLink} onClick={toTop}>
          Sign Up
        </Link>
        <Link to="contact" className={layoutStyles.navLink} onClick={toTop}>
          Contact
        </Link>
      </div>

      {/* WEBSITE BUILT BY  */}
      <div className="row-start-3 col-start-1 col-span-4 self-end justify-self-center">
        <small className="text-white text-small">
          Website build by{" "}
          <strong>
            <a href="https://www.jorvikweb.dev" target="_blank">
              Jorvik Web Dev
            </a>
          </strong>{" "}
          using React, Vite and Vercel hosting
        </small>
      </div>
    </div>
  );
};

export default Footer;
