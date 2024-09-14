// REACT
import { useRef, useState } from "react";

// IMAGES
import banner from "../Assets/banner.webp";

// MOTION
import { motion } from "framer-motion";

// email js
import emailjs from "@emailjs/browser";

// TOAST
import toast, { Toaster } from "react-hot-toast";

// ANIMATION
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

const Taster = () => {
  // STYLES
  const layoutStyles = {
    background: "bg-white h-full w-screen z-0 pb-12 pt-24 px-8",
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
    title: "text-button py-12 text-center text-3xl",
    desc: "text-black text-base text-center mb-8 ",
    dropDown:
      "bg-[#fff] border-2 border-[#fff] rounded-md mb-6 px-3 py-2 focus:border-button",
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
      id="taster">
      <div className={layoutStyles.logoContainer}>
        <img src={banner} alt="york guitar ensemble logo" />
        <motion.h1 variants={variants} className={textStyles.title}>
          Book a taster lesson
        </motion.h1>
        <motion.h2 variants={variants} className={textStyles.desc}>
          Please fill out the form below if you are interested in a free 45
          minute taster session
        </motion.h2>
      </div>

      {/* CONTACT DETAILS */}
      <motion.div
        className={layoutStyles.contactContainer}
        variants={variants}></motion.div>

      {/* FORM */}
      <div>
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className={layoutStyles.formContainer}
          id="form">
          <select name="message" className={textStyles.dropDown} required>
            <option defaultValue={0}>Select</option>
            <option value="adult">Adult class</option>
            <option value="child">Children&apos;s class</option>
          </select>

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
            placeholder="Please use this space for anything you'd like to mention..."
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

export default Taster;
