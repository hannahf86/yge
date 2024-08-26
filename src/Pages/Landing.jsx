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
    time: "text-center text-black mb-2 text-sm",

    calltoAction:
      "p-8 bg-accent/60 flex flex-col justify-center items-center my-12",
    callToActionText: "text-center",
    link: "font-bold hover:text-button hover:underline",
    button:
      "bg-button py-2 px-6 rounded-md text-white mt-6 border-2 border-button hover:bg-white hover:text-button hover:font-bold",
  };

  return (
    <div id="landing" className="bg-white">
      {/* HERO IMAGE */}
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

      {/* CALL TO ACTION -  GUITAR LESSONS */}
      <div className={styles.calltoAction}>
        <h2 className={styles.scheduleTitle}>DO YOU WANT TO LEARN GUITAR?</h2>
        <p className={styles.callToActionText}>
          Register your interest in our beginner&apos;s group lessons for
          children, teens and adults by using the button below.
        </p>

        <Link to="Register">
          <button className={styles.button}>Register</button>
        </Link>
      </div>

      {/* SCHEDULE */}
      <div className={styles.scheduleContainer}>
        <h2 id="schedule" className={styles.sectionTitle}>
          Schedule
        </h2>
        <p className="text-center mt-4">
          At the moment there are just two sessions available. As YGE grows, we
          will be expanding the ensemble choices.
          <br />
          <br />
          When you join us, you will be assigned into a group that best suits
          your ability.
          <br />
          <br />
          You will be asked for a preferred time option on the sign up sheet,
          and we will stick to this as much as possible.
        </p>

        <div className={styles.scheduleGrid}>
          <div>
            <h2 className={styles.scheduleTitle}>
              Ensemble Rehearsal - Slot 1
            </h2>
            <h3 className={styles.time}>Saturday @ 9:00 to 9:45</h3>
            <p className="text-center text-black text-xs mt-4">
              <strong>Location:</strong>
              <br />
              St. Aelred&apos;s Community Center, <br />
              Fifth Ave, YO31 0PN
            </p>
          </div>

          <div>
            <h2 className={styles.scheduleTitle}>
              Ensemble Rehearsals- Slot 2
            </h2>
            <h3 className={styles.time}>Saturday @ 10:00 to 10:45</h3>
            <p className="text-center text-black text-xs mt-4">
              <strong>Location:</strong>
              <br />
              St. Aelred&apos;s Community Center, <br />
              Fifth Ave, YO31 0PN
            </p>
          </div>
        </div>

        {/* CALL TO ACTION - SIGN UP */}
        <div className="mt-16 flex flex-col justify-center mx-12">
          <h2 className={styles.sectionTitle}>Join YGE</h2>
          <p className="text-center text-black mt-4">
            If this sounds like something you&apos;d be interested in, sign up
            now!
          </p>
          <a href="/#sign-up" className="flex justify-center">
            <button className={styles.button}>Sign Up</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
