import { useContext, useState } from "react";
import iconSuccess from "/src/assets/images/icon-success.svg";
import { Link } from "react-router-dom";
import { NewsletterContext } from "../context/NewsletterContext";

export default function Success() {
  const { email, setEmail } = useContext(NewsletterContext);
  return (
    <>
      <section className="thanks">
        <div>
          <img src={iconSuccess} />
          <h1>Thanks for subscribing!</h1>
          <p>
            A confirmation email has been sent to <strong>{email}</strong>.
            Please open it and click the button inside to confirm your
            subscription.
          </p>
        </div>
        <Link to="/">
          <button onClick={(e) => setEmail("")}>Dismiss message</button>
        </Link>
      </section>
    </>
  );
}
