// REACT
import { useRef, useState } from "react";

// EMAIL JS
import emailjs from "@emailjs/browser";

// TOAST
import toast, { Toaster } from "react-hot-toast";

const SignUp = () => {
  const styles = {
    background: "px-8 pt-24 bg-accent/10",
    title: "text-black text-5xl font-bold text-button text-center my-8",
    sectionTitle: "text-purple text-lg font-bold text-left mb-2",
    formLabel: "text-black text-sm font-bold mb-2",
    input:
      "bg-[#fff] border-2 border-[#fff] rounded-md mb-6 px-3 py-2 focus:border-button",
    textArea:
      "bg-[#fff] h-60 flex justify-self-start self-start border-2 border-[#fff] rounded-md mb-8 px-3 py-2 focus:border-button",
    dropDown: "bg-[#fff] px-3 py-2 rounded-md mb-8",
    button:
      "bg-button py-2 px-6 rounded-md text-white mt-6 border-2 border-button hover:bg-white hover:text-button hover:font-bold",
  };

  // CLEAR FORM
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");
  const [pieces, setPieces] = useState("");
  const [story, setStory] = useState("");
  const [additional, setAdditional] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMobile, setContactMobile] = useState("");

  // EMAIL JS
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setName("");
    setGrade("");
    setPieces("");
    setStory("");
    setAdditional("");
    setContactName("");
    setContactEmail("");
    setContactMobile("");

    emailjs
      .sendForm("service_vgs76jb", "template_dq3esin", form.current, {
        publicKey: "CLllgrNb6UYby4AOj",
      })
      .then(
        () => {
          toast.success(
            `Thanks for your email ${contactName}! We'll be in touch soon!`,
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
    <div id="signUp" className={styles.background}>
      <h1 className={styles.title}>Sign up</h1>
      <p className="pb-6 text-center">
        Fill in the form below and we will be in touch.
      </p>

      <form ref={form} onSubmit={sendEmail} className="pb-20">
        {/* STUDENT INFORMATION */}
        <h2 className={styles.sectionTitle}>Student Information</h2>

        <p className={styles.formLabel}>Student&apos;s first name</p>
        <input
          type="text"
          name="message"
          placeholder="Full name"
          className={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <p className={styles.formLabel}>Student&apos;s age</p>
        <select className={styles.dropDown} name="message" required>
          <option defaultValue={0}>Select</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
          <option value={11}>11</option>
          <option value={12}>12</option>
          <option value={13}>13</option>
          <option value={14}>14</option>
          <option value={15}>15</option>
          <option value={16}>16</option>
          <option value={17}>17</option>
          <option value={18}>18</option>
          <option value={19}>19 and over</option>
        </select>

        <p className={styles.formLabel}>Type of guitar</p>
        <select className={styles.dropDown} name="message" required>
          <option defaultValue={0}>Select</option>
          <option value="classical">Classical (nylon strings)</option>
          <option value="acoustic">Acoustic (all steel strings)</option>
          <option value="ukulele">Ukulele</option>
          <option value="bass">Bass Guitar</option>
          <option value="electric">Electric Guitar</option>
        </select>

        <p className={styles.formLabel}>Student&apos;s grade (if applicable)</p>
        <input
          type="text"
          name="message"
          placeholder="Grade"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          className={styles.input}
        />

        <p className={styles.formLabel}>
          Current piece/s the student is working on. Please include editions if
          relevant.
        </p>
        <input
          type="textarea"
          name="message"
          placeholder="Pieces you are learning"
          className={styles.textArea}
          value={pieces}
          onChange={(e) => setPieces(e.target.value)}
          required
        />

        <p className="mb-8">
          These next questions are simply to gain knowledge about the student
          and therefore, which music to give them. <br />
          <br />
          It is <strong>not</strong> necessary to be able to read traditional
          notation, tabulature and chord charts are absolutely acceptable.
        </p>

        <p className={styles.formLabel}>Can you read traditional music?</p>
        <select className={styles.dropDown} name="message" required>
          <option defaultValue={0}>Select</option>
          <option value="yes to traditional music">Yes</option>
          <option value="no to traditional music">No</option>
        </select>

        <p className={styles.formLabel}>Can you read TAB music?</p>
        <select className={styles.dropDown} name="message" required>
          <option defaultValue={0}>Select</option>
          <option value="yes to tab">Yes</option>
          <option value="no to tab">No</option>
        </select>

        <p className={styles.formLabel}>Can you read chord charts?</p>
        <select className={styles.dropDown} name="message" required>
          <option defaultValue={0}>Select</option>
          <option value="yes to chord charts">Yes</option>
          <option value="no to chord charts">No</option>
        </select>

        <p className={styles.formLabel}>
          Do you have any ensemble experience, not necessarily on the guitar?
        </p>
        <select className={styles.dropDown} name="message" required>
          <option defaultValue={0}>Select</option>
          <option value="yes to ensemble exp">Yes</option>
          <option value="no to ensemble exp">No</option>
        </select>

        <p className={styles.formLabel}>
          Please give a brief overview of your learning on the guitar so far
        </p>
        <input
          type="textarea"
          name="message"
          placeholder="Your story on the guitar"
          className={styles.textArea}
          value={story}
          onChange={(e) => setStory(e.target.value)}
          required
        />

        <p className={styles.formLabel}>
          Any additional information, such as neurodiversity, physical
          requirements, allergies (nuts, for example) that we may need to be
          aware of?
        </p>
        <input
          type="textarea"
          name="message"
          placeholder="Additional information"
          className={styles.textArea}
          value={additional}
          onChange={(e) => setAdditional(e.target.value)}
          required
        />

        {/* TIME PREFERENCES */}
        <h2 className={styles.sectionTitle}>Time Preferences</h2>
        <p className={styles.formLabel}>
          Precise session times will be decided when we know exactly who is
          interested and the abilities of those people, so we can group folks in
          the best way possible.
          <br />
          <br />
          Currently, the sessions are as follows, with a view to opening 1-3
          more groups if needed. <br /> <br />
          <li className="list-disc ml-8 pb-2">
            Session One - 9:30am till 10:15am
          </li>
          <li className="list-disc ml-8 pb-2">
            Session Two - 10:30am till 11:15am
          </li>
          <br /> Do you have any time constraints or preferences?
        </p>

        <select className={styles.dropDown} name="message" required>
          <option defaultValue={0}>Select</option>
          <option value="Before 11am">Before 11am</option>
          <option value="Anytime">Anytime</option>
        </select>

        {/* CONTACT INFORMATION */}
        <h2 className={styles.sectionTitle}>Contact Information</h2>

        <p className={styles.formLabel}>
          Are you a parent or guardian of the student named above?
        </p>
        <select className={styles.dropDown} name="message" required>
          <option defaultValue={0}>Select</option>
          <option value="yes to parent or guardian">Yes</option>
          <option value="no to parent or guardian">N/A</option>
        </select>

        <p className={styles.formLabel}>Contact Name</p>
        <input
          type="text"
          name="user_name"
          placeholder="Contact Name"
          className={styles.input}
          onChange={(e) => setContactName(e.target.value)}
          value={contactName}
          required
        />

        <p className={styles.formLabel}>Contact Email</p>
        <input
          type="email"
          name="user_email"
          placeholder="Contact Email"
          className={styles.input}
          onChange={(e) => setContactEmail(e.target.value)}
          value={contactEmail}
          required
        />

        <p className={styles.formLabel}>Contact Mobile Number</p>
        <input
          type="text"
          name="message"
          placeholder="Contact Mobile Number"
          className={styles.input}
          onChange={(e) => setContactMobile(e.target.value)}
          value={contactMobile}
          required
        />

        <button className={styles.button}>Join us!</button>
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 6000,
          }}
        />
      </form>
    </div>
  );
};

export default SignUp;
