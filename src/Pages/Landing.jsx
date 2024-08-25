// IMAGES
import banner from "../Assets/banner.webp";

const Landing = () => {
  const styles = {
    banner: "w-full pt-24",
    title: "font-serif font-bold text-button text-2xl text-center mt-12 mb-6",
    subtitle: "font-serif italic text-black text-lg text-center mb-12",
    description: "text-black text-center text-base",

    scheduleContainer: "bg-[#FFF] px-20 my-12 py-12",
    sectionTitle: "text-center font-bold text-button text-xl",
    scheduleGrid: "grid grid-cols-3 gap-8 mt-6",
    scheduleTitle: "text-purple font-bold text-md text-center mb-2",
  };

  return (
    <div id="landing" className="bg-white">
      <div className={styles.banner}>
        <img src={banner} alt="york guitar ensemble banner" />
      </div>

      {/* COMPANY INTRO */}
      <div>
        <h1 className={styles.title}>
          Group Guitar Lessons <br />&<br /> Ensemble Rehearsals
        </h1>
        <h2 className={styles.subtitle}>
          Making acoustic and classical guitar music available to all
        </h2>
        <p className={styles.description}>What happens in the lessons?</p>
      </div>

      {/* SCHEDULE */}
      <div className={styles.scheduleContainer}>
        <h2 id="schedule" className={styles.sectionTitle}>
          Schedule
        </h2>

        <div className={styles.scheduleGrid}>
          <div>
            <h2 className={styles.scheduleTitle}>
              Beginner&apos;s Group Lessons
            </h2>
            <p>
              Start by learning the fundamentals of fingerpicking guitar, moving
              onto reading tabs and music, eventually graduating to chords!
            </p>
          </div>

          <div>
            <h2 className={styles.scheduleTitle}>
              Adult Beginner&apos;s Group Lessons
            </h2>
            <p>
              Always wanted to learn the guitar? Its never too late to learn!
              Hannah paces the lessons to suit everyone in the group.
              There&apos;s something for every ability, so come along to a
              friendly, non-judgemental environment.
            </p>
          </div>

          <div>
            <h2 className={styles.scheduleTitle}>
              Child&apos;s Beginner Ensemble Rehearsals
            </h2>
            <p>
              Even if you&apos;ve only been playing for a few weeks, come along
              for fun and learning!
            </p>
          </div>

          <div>
            <h2 className={styles.scheduleTitle}>
              Adult Beginner&apos;s Ensemble Rehearsals
            </h2>
          </div>

          <div>
            <h2 className={styles.scheduleTitle}>Junior Ensemble Rehearsals</h2>
          </div>

          <div>
            <h2 className={styles.scheduleTitle}>Senior Ensemble Rehearsals</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
