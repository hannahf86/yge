// REACT
import { useRef, useState } from "react";

// ICONS
import { HiMail, HiLocationMarker } from "react-icons/hi";
import { HiPhone } from "react-icons/hi2";

// IMAGES
import banner from "../Assets/banner.webp";

// MOTION
import { motion } from "framer-motion";

// email js
import emailjs from "@emailjs/browser";

// TOAST
import toast, { Toaster } from "react-hot-toast";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  // STYLES
  const layoutStyles = {
    background: "bg-white h-full w-screen z-0 pb-12 pt-24",
    textContainer: "relative mx-8",
    button:
      "bg-button py-2 px-6 rounded-md text-white mt-6 border-2 border-button hover:bg-white hover:text-button hover:font-bold",
    contactContainer: "hidden",
    formContainer: "flex flex-col justify-center items-center w-full mb-12",
    input:
      "bg-[#fff] border-2 border-[#fff] rounded-md mb-6 px-3 py-2 focus:border-button",
    logoContainer: "flex flex-col justify-center",
    logo: "flex flex-col justify-self-center items-center w-4/6",
  };

  const textStyles = {
    title: "text-button py-12 text-center text-5xl",
    desc: "text-black text-base text-center mb-8 mx-10",
  };

  const ref = useRef();

  // CLEAR FORM
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // EMAIL JS
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");

    emailjs
      .sendForm("service_vgs76jb", "template_dq3esin", formRef.current, {
        publicKey: "CLllgrNb6UYby4AOj",
      })
      .then(
        () => {
          toast.success(
            `Thanks for your email ${name}! We'll be in touch soon!`,
          );
        },
        () => {
          toast.error(
            `Oh no! There's been an error! If the problem persists, please contact hello@jorvikweb.dev`,
          );
        },
      );
  };

  return (
    <motion.div
      ref={ref}
      className={layoutStyles.background}
      variants={variants}
      initial="initial"
      whileInView="animate"
      id="contact">
      <div className={layoutStyles.logoContainer}>
        <img src={banner} alt="york guitar ensemble logo" />
        <motion.h1 variants={variants} className={textStyles.title}>
          Contact
        </motion.h1>
        <motion.h2 variants={variants} className={textStyles.desc}>
          Please get in touch if you&apos;re interested in joining or have any
          questions. <br />
          <br />
          We&apos;re happy to hear from you!
        </motion.h2>
      </div>

      {/* CONTACT DETAILS */}
      <motion.div className={layoutStyles.contactContainer} variants={variants}>
        {/* EMAIL */}
        <motion.div className="item" variants={variants}>
          <div className="iconContainer">
            <HiMail color="orange" size={25} className="icon" />
            <h2>eMail</h2>
          </div>
          <span>hello@jorvikmedia.dev</span>
        </motion.div>
        {/* ADDRESS */}
        <motion.div className="item" variants={variants}>
          <div className="iconContainer">
            <HiLocationMarker color="orange" size={25} className="icon" />
            <h2>Address</h2>
          </div>
          <span>York, United Kingdom</span>
        </motion.div>
        {/* PHONE */}
        <motion.div className="item" variants={variants}>
          <div className="iconContainer">
            <HiPhone color="orange" size={22} className="icon" />
            <h2>Phone</h2>
          </div>
          <span>07548 957500</span>
        </motion.div>
      </motion.div>

      {/* FORM */}
      <div>
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className={layoutStyles.formContainer}
          id="form">
          <input
            type="text"
            required
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={layoutStyles.input}
          />
          <input
            type="email"
            required
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={layoutStyles.input}
          />
          <textarea
            rows={8}
            placeholder="Message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={layoutStyles.input}
          />
          <button className={layoutStyles.button}>Submit</button>
          <Toaster
            position="top-center"
            toastOptions={{
              duration: 6000,
            }}
          />
        </motion.form>
      </div>

      <div className="footer"></div>
    </motion.div>
  );
};

export default Contact;
