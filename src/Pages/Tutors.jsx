// images
import hannah from "../Assets/profile-pic.jpg";

const Tutors = () => {
  const styles = {
    background: "bg-white pt-24 flex flex-col justify-center",
    imageContainer: "grid grid-cols-3 mb-6",
    image: "rounded-full col-start-1 row-span-2",
    subtitle:
      "text-purple text-xl text-right font-bold mb-2 col-start-2 col-span-2 row-span-2 self-center",
    title: "text-black text-5xl font-bold text-button text-center my-8",
    bio: "leading-8 text-justify mx-8 pb-12",
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
            <br />
            <br />
          </p>
        </div>
      </div>
    </>
  );
};

export default Tutors;
