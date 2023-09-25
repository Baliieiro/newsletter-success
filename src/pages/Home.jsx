import illustrations from "/src/assets/images/illustration-sign-up-mobile.svg";
import illustrationsMobile from "/src/assets/images/illustration-sign-up-mobile.svg";
import icon from "/src/assets/images/icon-list.svg";
import { useContext } from "react";
import { NewsletterContext } from "../context/NewsletterContext";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { email, setEmail, errors, setErrors, validateEmail } =
    useContext(NewsletterContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors("");

    try {
      validateEmail(email);
      navigate("/success");
    } catch (err) {
      console.error(err.message);
      setErrors(err.message);
    }
  };

  return (
    <>
      <div className="info">
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
          <li>
            <img src={icon} />
            Product discovery and building what matters
          </li>
          <li>
            <img src={icon} />
            Measuring to ensure updates are a success
          </li>
          <li>
            <img src={icon} />
            And much More!
          </li>
        </ul>
        <form onSubmit={handleSubmit}>
          <span>
            <label htmlFor="email">Email address</label>
            {errors && <p>{errors}</p>}
          </span>
          <input
            className={errors ? "error" : null}
            type="text"
            name="email"
            id="email"
            value={email}
            placeholder="email@company.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Subscribe to monthly newsletter</button>
        </form>
      </div>
      <div className="image"></div>
    </>
  );
}
