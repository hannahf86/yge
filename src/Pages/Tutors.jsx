// images
import hannah from "../Assets/profile-pic.jpg";

// REACT ROUTER DOM
import { Link } from "react-router-dom";

const Tutors = () => {
  const styles = {
    background: "bg-white pt-24 flex flex-col justify-center md:px-16 lg:px-32",

    imageContainer: "grid grid-cols-3 mb-6",
    image: "rounded-full col-start-1 row-span-2 md:p-6",
    subtitle:
      "text-purple text-xl md:text-2xl text-right md:text-left md:pl-4 font-bold mb-2 row-start-1 col-start-2 col-span-2 row-span-2 self-center",
    website:
      "hidden md:block col-start-2 col-span-2 row-start-1 row-span-2 self-center text-purple text-xl md:text-md text-right md:text-left md:pl-4 md:pt-16",

    title:
      "text-black text-5xl font-bold text-button text-center my-8 md:mt-16 md:mb-20",
    bio: "leading-8 text-justify mx-8",
    calltoAction:
      "px-6 py-12 bg-accent/60 flex flex-col justify-center items-center my-12",
    callToActionText: "text-center",
    link: "font-bold hover:text-button hover:underline",
    button:
      "bg-button py-2 px-6 rounded-md text-white mt-6 border-2 border-button hover:bg-white hover:text-button hover:font-bold",
    scheduleTitle: "text-purple font-bold text-lg text-center mb-2",
  };

  return (
    <>
      <div id="tutors" className={styles.background}>
        <h1 className={styles.title}>YGE Tutors</h1>

        {/* HANNAH */}
        <div className={styles.bio}>
          <div className={styles.imageContainer}>
            <img
              src={hannah}
              alt="Hannah Feehan, guitar tutors"
              className={styles.image}
            />
            <h2 className={styles.subtitle}>Hannah Feehan</h2>
            <Link
              to="https://www.hannahfeehan.com"
              target="_blank"
              aria-label="Hannah Feehan's website"
              className={styles.website}>
              <h3>hannahfeehan.com</h3>
            </Link>
          </div>

          <p className="text-md">
            Hannah started teaching at the age of 19 years old.
            <br />
            <br />
            Nearly two decades later, she has guided students to many accolades,
            including national ensemble places{" "}
            <a
              href="https://guitarcircus.org.uk/nyge-3/what-we-offer-nyge-2/"
              target="_blank"
              className="text-button font-bold underline">
              in NYGE
            </a>
            , playing the role of{" "}
            <a
              href="https://www.youtube.com/channel/UC6P6fXzfiuPxdi9cgeSAZvg"
              target="_blank"
              className="text-button font-bold underline">
              Zak
            </a>{" "}
            in School of Rock on the West End and most recently a scholarship
            place at{" "}
            <a
              href="https://www.isaaccardow.com/"
              target="_blank"
              className="text-button font-bold underline">
              The Royal Academy of Music
            </a>
            .
            <br />
            <br />
            Hannah has experience across a very broad range of music, from
            performing as lead guitarist with her band Third Conduct across the
            UK, to writing music for computer games and mobiles apps, to finally
            settling on the beautiful classical guitar.
            <br />
            <br />
            In 2009, Hannah started a guitar ensemble with only three students.
            This quickly grew to three ensembles and almost 20 students, who
            performed many different styles of music throughout the year, some
            of whom went on to win competitions within Yorkshire.
            <br />
            <br />
            Described as a conscientious, fun and empathetic teacher, Hannah
            always puts the needs of her students first, helping them achieve
            their goals no matter what they are. Her knowledge and experience
            shine through with a clear passion when she speaks about music
            education, and this is why we&apos;re excited for Hannah to run our
            ensembles.
            <br />
            <br />
            You are guarenteed to have a fun lesson with Hannah!
          </p>
        </div>

        {/* CALL TO ACTION -  GUITAR LESSONS */}
        <div className={styles.calltoAction}>
          <h2 className={styles.scheduleTitle}>Sound good?</h2>
          <p className={styles.callToActionText}>
            Try a free taster lesson with Hannah before you commit
          </p>

          <Link to="/taster">
            <button className={styles.button}>Free taster lesson</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Tutors;
