// images

const About = () => {
  const styles = {
    background: "bg-white pt-24",
    title: "text-black text-2xl font-bold text-button text-center my-8",
    subtitle: "text-purple text-xl font-bold mb-2",
    bio: "leading-8 text-justify mx-8 pb-12",
  };

  return (
    <>
      <div id="about" className={styles.background}>
        <h1 className={styles.title}>YGE Tutors</h1>

        {/* HANNAH */}
        <div className={styles.bio}>
          <h2 className={styles.subtitle}>Hannah Feehan</h2>
          <div className={styles.image}>
            <img src={""} />
          </div>

          <p className="text-md">
            Hannah was given the opportunity to start teaching at the age of 19.
            <br />
            In that time she has guided students to many accolades, including
            national ensemble places{" "}
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
            performing rock music live across the UK with her band Third
            Conduct, to writing music for computer games and mobiles apps, to
            finally settling on the beautiful classical guitar.
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
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
