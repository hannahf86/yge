// REACT ROUTER DOM
import { Link } from "react-router-dom";

// IMAGES
import banner from "../Assets/banner.webp";
import bannerXS from "../Assets/banner-xs.webp";

// ICONS
import { FaCheck } from "react-icons/fa";

const Landing = () => {
  const styles = {
    banner: "w-full pt-24",
    title:
      "mx-8 font-serif font-bold text-button text-2xl text-center mt-12 mb-6",
    subtitle:
      "mx-8 font-serif italic text-black text-base md: text-center mb-12",
    description: "text-black text-center text-base",

    scheduleContainer: "bg-[#FFF] px-8 md:px-16 lg:px-32 mt-12 py-12",
    sectionTitle: "text-center font-bold text-button text-2xl",
    scheduleGrid: "grid grid-cols-auto gap-8 mt-6",
    scheduleTitle: "text-purple font-bold text-lg text-center mb-2",
    time: "text-center text-black mb-2 text-sm",

    calltoAction:
      "px-6 md:px-16 py-12 bg-accent/60 flex flex-col justify-center items-center my-12",
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
      <div id="company-info">
        <h1 className={styles.title}>
          Group Guitar Lessons <br />&<br /> Ensemble Rehearsals
        </h1>
        <h2 className={styles.subtitle}>
          Making guitar music available to all
        </h2>

        <div
          id="what-we-do"
          className="text-justify lg:text-center bg-[#FFF] py-12 px-8 md:px-16 md:px-32">
          <h3 className="text-button font-bold text-lg text-center mb-8">
            What do we do?
          </h3>
          <p>
            YGE is set up for guitarists of all ages, abilities and styles to
            come together and indulge in one of our passions.
            <br />
            <br />
            We will play a combination of traditional classical guitar music,
            folk music, &quot;pop&quot; (all inclusive title, so rock, country,
            pop etc), film music themes, and of course... Christmas music!
            <br />
            <br />
            At the end of each term, we will organise a short concert for our
            friends and family, with drinks and cake. Participation is not
            required, but encouraged, because its so much fun with your friends.
            <br />
            <br />
            Our experienced tutor has nearly two decades of preparing students
            for performances and can build the confidence of even the most shy
            performer. Each individual circumstance will be handled with care
            and considersation.
            <br />
            <br />
            You <strong>do not</strong> need to be able to read sheet music to
            join. We arrange our pieces to suit all guitar playing styles.
          </p>
        </div>

        <div id="what-we-do" className=" bg-[#FFF] py-12 px-8 md:px-32 mt-12">
          <h3 className="text-button font-bold text-lg text-center mb-8">
            These ensembles are for you if want...
          </h3>
          <li className="mb-6 list-none flex items-center justify-center text-sm">
            <div>
              {" "}
              <FaCheck size={20} className="mr-6 text-green-700" />
            </div>
            More performance opportunities on your guitar, as a soloist or with
            an ensemble
          </li>

          <li className="mb-6 list-none flex items-center justify-center text-sm">
            <div>
              {" "}
              <FaCheck size={20} className="mr-6 text-green-700" />
            </div>
            To develop your aural and reading skills outside of your normal
            lessons
          </li>

          <li className="mb-6 list-none flex items-center justify-center text-sm">
            <div>
              {" "}
              <FaCheck size={20} className="mr-6 text-green-700" />
            </div>
            Meet likeminded people and have fun without judgement of skill level
          </li>

          <li className="mb-6 list-none flex items-center justify-center text-sm">
            <div>
              {" "}
              <FaCheck size={20} className="mr-6 text-green-700" />
            </div>
            To grow as a musician in a supportive and encouraging environment
          </li>
        </div>
      </div>

      {/* CALL TO ACTION -  GUITAR LESSONS */}
      <div className={styles.calltoAction}>
        <h2 className={styles.scheduleTitle}>DO YOU WANT TO LEARN GUITAR?</h2>
        <p className={styles.callToActionText}>
          Register your interest in our beginner&apos;s group lessons for
          children, teens and adults by using the button below.
        </p>

        <Link to="register">
          <button className={styles.button}>Register</button>
        </Link>
      </div>

      {/* CLASS INFO */}
      <div id="class-info" className={styles.scheduleContainer}>
        <h2 className={styles.sectionTitle}>Class Info</h2>
        <p className="text-center mt-4">
          At the moment there are just two sessions available. As YGE grows, we
          will be expanding the ensemble choices.
          <br />
          <br />
          When you join us, you will be assigned into a group that best suits
          your ability.
        </p>

        <div className={styles.scheduleGrid}>
          <div>
            <h2 className={styles.scheduleTitle}>
              Ensemble Rehearsal <br />
              Slot 1
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
              Ensemble Rehearsals
              <br /> Slot 2
            </h2>
            <h3 className={styles.time}>Saturday @ 10:00 to 10:45</h3>
            <p className="text-center text-black text-xs mt-4">
              <strong>Location:</strong>
              <br />
              St. Aelred&apos;s Community Center, <br />
              Fifth Ave, YO31 0PN
            </p>
          </div>

          {/* <div>
            <h2 className={styles.scheduleTitle}>
              Ensemble Rehearsal <br />
              Slot 3
            </h2>
            <h3 className={styles.time}>Saturday @ 9:00 to 9:45</h3>
            <p className="text-center text-black text-xs mt-4">
              <strong>Location:</strong>
              <br />
              St. Aelred&apos;s Community Center, <br />
              Fifth Ave, YO31 0PN
            </p>
          </div> */}
        </div>

        {/* CALL TO ACTION - SIGN UP */}
        <div className="mt-16 flex flex-col justify-center mx-6">
          <h2 className={styles.sectionTitle}>Join YGE</h2>
          <p className="text-center text-black mt-4 text-sm">
            If this sounds like something you&apos;d be interested in, sign up
            now!
          </p>
          <a href="/signUp" className="flex justify-center">
            <button className={styles.button}>Sign Up</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
