// REACT ROUTER DOM
import { Link } from "react-router-dom";

// IMAGES
import banner from "../Assets/banner.webp";
import bannerXS from "../Assets/banner-xs.webp";

const Landing = () => {
  const styles = {
    banner: "w-full pt-24",
    title:
      "mx-8 font-serif font-bold text-button text-2xl text-center mt-12 mb-6",
    subtitle:
      "mx-8 font-serif italic text-black text-base md: text-center mb-12",
    description: "text-black text-center text-base",

    scheduleContainer: "bg-[#FFF] px-12 mt-12 py-12",
    sectionTitle: "text-center font-bold text-button text-2xl",
    scheduleGrid: "grid grid-cols-auto gap-8 mt-6",
    scheduleTitle: "text-purple font-bold text-md text-center mb-2",
    time: "text-center text-button mb-2 text-sm",

    calltoAction:
      "p-8 bg-accent/60 flex flex-col justify-center items-center mb-12",
    callToActionText: "text-center",
    link: "font-bold hover:text-button hover:underline",
    button:
      "bg-button py-2 px-6 rounded-md text-white mt-6 border-2 border-button hover:bg-white hover:text-button hover:font-bold",
  };

  return (
    <div id="landing" className="bg-white">
      <div className={styles.banner}>
        <img
          src={banner}
          alt="york guitar ensemble banner"
          className="hidden md:block"
        />
        <img
          src={bannerXS}
          alt="york guitar ensemble banner"
          className="md:hidden"
        />
      </div>

      {/* COMPANY INTRO */}
      <div>
        <h1 className={styles.title}>
          Group Guitar Lessons <br />&<br /> Ensemble Rehearsals
        </h1>
        <h2 className={styles.subtitle}>
          Making acoustic and classical guitar music available to all
        </h2>
      </div>

      {/* SCHEDULE */}
      <div className={styles.scheduleContainer}>
        <h2 id="schedule" className={styles.sectionTitle}>
          Schedule
        </h2>
        <p className="text-center mt-4">
          All classes are subject to availability and will work on a first come,
          first serve basis.
        </p>

        <div className={styles.scheduleGrid}>
          <div>
            <h2 className={styles.scheduleTitle}>
              Class One Ensemble Rehearsals
            </h2>
            <h3 className={styles.time}>Saturday @ 9:00 to 9:45</h3>
            <p>
              This class invites students who are complete beginners up to a
              Grade 3.
            </p>
          </div>

          <div>
            <h2 className={styles.scheduleTitle}>Senior Ensemble Rehearsals</h2>
            <h3 className={styles.time}>Saturday @ 10:00 to 10:45</h3>
          </div>
        </div>
      </div>

      {/* CALL TO ACTION */}
      <div className={styles.calltoAction}>
        <h2 className={styles.scheduleTitle}>
          Do you want to learn the guitar?
        </h2>
        <p className={styles.callToActionText}>
          Register your interest in our NEW group lessons by using the button
          below, <br />
          or{" "}
          <a href="/#contact" className={styles.link}>
            contact us here
          </a>{" "}
          to find out more information.
        </p>

        <Link>
          <button className={styles.button}>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
